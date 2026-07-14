#!/usr/bin/env node
/**
 * EaseMotion CSS — Unused CSS Custom Properties Detector
 * submissions/scripts/find-unused-css-vars-ksk/find-unused-css-vars.js
 *
 * Usage:
 *   node find-unused-css-vars.js [--root <path>] [--ext <ext,...>] [--json] [--allow <var,...>]
 *
 * Examples:
 *   node find-unused-css-vars.js
 *   node find-unused-css-vars.js --root ../../ --ext css,html
 *   node find-unused-css-vars.js --json
 *   node find-unused-css-vars.js --allow --ease-debug-bg,--ease-test-var
 */

'use strict';

const fs   = require('fs');
const path = require('path');

// ── CLI argument parsing ─────────────────────────────────────────────────────
const args   = process.argv.slice(2);
const getArg = (flag, fallback) => {
  const i = args.indexOf(flag);
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
};

const ROOT       = path.resolve(getArg('--root', path.join(__dirname, '../../..')));
const EXTENSIONS = getArg('--ext', 'css').split(',').map(e => e.trim().replace(/^\./, ''));
const JSON_MODE  = args.includes('--json');
const ALLOW_RAW  = getArg('--allow', '');
const ALLOW_LIST = new Set(ALLOW_RAW ? ALLOW_RAW.split(',').map(v => v.trim()) : []);

// ── File discovery ───────────────────────────────────────────────────────────
const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', 'build', '.cache']);

function walk(dir, extSet, results = []) {
  let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); }
  catch { return results; }

  for (const entry of entries) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, extSet, results);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).replace('.', '');
      if (extSet.has(ext)) results.push(fullPath);
    }
  }
  return results;
}

// ── Regex patterns ───────────────────────────────────────────────────────────
// Matches:  --some-variable-name  (declaration, inside a rule block)
const RE_DECL = /(?:^|[{;,\s])(--[\w-]+)\s*:/gm;
// Matches:  var(--some-variable-name)  (reference, anywhere)
const RE_REF  = /var\(\s*(--[\w-]+)/g;

// ── Scan files ───────────────────────────────────────────────────────────────
function scanFiles(files) {
  const declared  = new Map(); // varName → [filePath, ...]
  const referenced = new Set();

  for (const file of files) {
    let src;
    try { src = fs.readFileSync(file, 'utf8'); }
    catch { continue; }

    // Remove comments to avoid false positives
    const stripped = src
      .replace(/\/\*[\s\S]*?\*\//g, '')  // block comments
      .replace(/\/\/.*/g, '');            // line comments (SCSS/less)

    // Collect declarations
    for (const match of stripped.matchAll(RE_DECL)) {
      const name = match[1];
      if (!declared.has(name)) declared.set(name, []);
      declared.get(name).push(file);
    }

    // Collect references
    for (const match of stripped.matchAll(RE_REF)) {
      referenced.add(match[1]);
    }
  }

  return { declared, referenced };
}

// ── Main ─────────────────────────────────────────────────────────────────────
(function main() {
  const extSet = new Set(EXTENSIONS);
  const files  = walk(ROOT, extSet);

  if (!JSON_MODE) {
    console.log(`\n🔍 EaseMotion CSS — Unused Variable Detector`);
    console.log(`   Root   : ${ROOT}`);
    console.log(`   Types  : ${[...extSet].map(e => '.' + e).join(', ')}`);
    console.log(`   Scanned: ${files.length} file(s)\n`);
  }

  if (files.length === 0) {
    if (JSON_MODE) { console.log(JSON.stringify({ error: 'No files found', root: ROOT })); }
    else { console.error('⚠️  No CSS files found. Check --root and --ext options.'); }
    process.exit(1);
  }

  const { declared, referenced } = scanFiles(files);

  // Find unused: declared but never referenced, not in allow-list
  const unused = [...declared.entries()]
    .filter(([name]) => !referenced.has(name) && !ALLOW_LIST.has(name))
    .sort(([a], [b]) => a.localeCompare(b));

  // ── Output ─────────────────────────────────────────────────────────────────
  if (JSON_MODE) {
    const report = {
      scanned: files.length,
      declared: declared.size,
      referenced: referenced.size,
      unused: unused.map(([name, paths]) => ({
        variable: name,
        declaredIn: paths.map(p => path.relative(ROOT, p)),
      })),
    };
    console.log(JSON.stringify(report, null, 2));
    process.exit(unused.length > 0 ? 1 : 0);
  }

  // Pretty output
  console.log(`📊 Summary`);
  console.log(`   Declared  : ${declared.size} variable(s)`);
  console.log(`   Referenced: ${referenced.size} variable(s)`);
  console.log(`   Unused    : ${unused.length} variable(s)`);
  if (ALLOW_LIST.size) console.log(`   Allow-list: ${ALLOW_LIST.size} variable(s) skipped\n`);
  else console.log('');

  if (unused.length === 0) {
    console.log('✅ No unused CSS custom properties found. All clean!\n');
    process.exit(0);
  }

  console.log('⚠️  Unused CSS Custom Properties:\n');
  for (const [name, paths] of unused) {
    console.log(`  ${name}`);
    for (const p of paths) {
      console.log(`    ↳ ${path.relative(ROOT, p)}`);
    }
  }

  console.log(`\n💡 Tip: Add variables to --allow to suppress false positives.`);
  console.log(`   Example: node find-unused-css-vars.js --allow ${unused[0][0]}\n`);
  process.exit(1);
})();
