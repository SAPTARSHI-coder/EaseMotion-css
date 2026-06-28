/**
 * scripts/minify.mjs
 *
 * Production CSS minifier for EaseMotion CSS (issue #20495).
 *
 * Usage:
 *   npm run build:minify
 *
 * What it does:
 *   1. Reads easemotion.css and recursively inlines all local @import rules.
 *   2. Passes the bundled CSS through CleanCSS (level 1 + level 2 optimisations).
 *   3. Writes:
 *        easemotion.min.css        ← minified output
 *        easemotion.min.css.map    ← external source map
 *   4. Prints original size, minified size, and compression ratio.
 */

import { readFile, writeFile } from 'node:fs/promises';
import { createRequire }       from 'node:module';
import path                    from 'node:path';
import { fileURLToPath }       from 'node:url';

// CleanCSS is a CJS package; use createRequire for clean ESM interop.
const require  = createRequire(import.meta.url);
const CleanCSS = require('clean-css');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT      = path.resolve(__dirname, '..');

// Matches both `@import "file.css"` and `@import url("file.css")` forms.
const IMPORT_RE = /@import\s+(?:url\(\s*)?["']([^"']+)["']\s*\)?\s*;/g;

/**
 * Recursively resolve and inline local @import statements.
 * External URLs (http/https/protocol-relative) are left in place.
 */
async function bundle(filePath, visited = new Set()) {
  const abs = path.normalize(path.resolve(filePath));
  if (visited.has(abs)) return ''; // guard against circular imports
  visited.add(abs);

  const src = await readFile(abs, 'utf8');
  const dir = path.dirname(abs);
  let output = src;

  // Collect all import matches first so replacements don't shift indices.
  const imports = [...src.matchAll(IMPORT_RE)];

  for (const [full, importPath] of imports) {
    if (/^(?:https?:)?\/\//.test(importPath)) continue; // skip external URLs
    const resolved = path.resolve(dir, importPath);
    const content  = await bundle(resolved, visited);
    output = output.replace(full, content);
  }

  return output;
}

/** Format a byte count as "x.xx KB". */
const kb = bytes => `${(bytes / 1024).toFixed(2)} KB`;

async function main() {
  const entry  = path.join(ROOT, 'easemotion.css');
  const outCss = path.join(ROOT, 'easemotion.min.css');
  const outMap = path.join(ROOT, 'easemotion.min.css.map');

  console.log('\n  EaseMotion CSS — Production Minifier\n');
  console.log('  Bundling @import rules…');

  const bundled   = await bundle(entry);
  const origBytes = Buffer.byteLength(bundled, 'utf8');

  console.log('  Minifying with CleanCSS (level 1 + level 2)…\n');

  const result = new CleanCSS({
    // Level 1: safe property/value clean-ups.
    // Level 2: cross-rule restructuring (merge selectors, remove duplicates).
    level: { 1: { all: true }, 2: { all: true } },
    // Generate an external source map.
    sourceMap: true,
    // Embed original source text in the map for offline debugging.
    sourceMapInlineSources: true,
    returnPromise: false,
  }).minify({ 'easemotion.css': { styles: bundled } });

  if (result.errors.length) {
    console.error('  ERROR: CleanCSS reported errors:');
    result.errors.forEach(e => console.error('  ', e));
    process.exitCode = 1;
    return;
  }

  if (result.warnings.length) {
    result.warnings.forEach(w => console.warn('  WARNING:', w));
  }

  // Append the source-map URL comment to the minified CSS.
  const finalCss = `${result.styles}\n/*# sourceMappingURL=easemotion.min.css.map */\n`;
  const mapJson  = result.sourceMap.toString();

  await writeFile(outCss, finalCss, 'utf8');
  await writeFile(outMap, mapJson,  'utf8');

  const minBytes = Buffer.byteLength(result.styles, 'utf8');
  const saved    = origBytes - minBytes;
  const ratio    = ((saved / origBytes) * 100).toFixed(1);

  console.log('  ┌─────────────────────────────────────────┐');
  console.log('  │  Build output                           │');
  console.log('  ├─────────────────────────────────────────┤');
  console.log(`  │  Input       easemotion.css             │`);
  console.log(`  │  Output      easemotion.min.css         │`);
  console.log(`  │  Source map  easemotion.min.css.map     │`);
  console.log('  ├─────────────────────────────────────────┤');
  console.log(`  │  Original    ${origBytes.toString().padEnd(10)} (${kb(origBytes).padEnd(10)}) │`);
  console.log(`  │  Minified    ${minBytes.toString().padEnd(10)} (${kb(minBytes).padEnd(10)}) │`);
  console.log(`  │  Saved       ${saved.toString().padEnd(10)} (${kb(saved).padEnd(10)}) │`);
  console.log(`  │  Reduction   ${(ratio + '%').padEnd(24)} │`);
  console.log('  └─────────────────────────────────────────┘');
  console.log('\n  Done.\n');
}

main().catch(err => {
  console.error('\n  Build failed:', err.message, '\n');
  process.exitCode = 1;
});
