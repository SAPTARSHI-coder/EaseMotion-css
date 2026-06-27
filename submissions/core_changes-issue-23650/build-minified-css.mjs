// ============================================
// build-minified-css.mjs
// Enhanced — now generates source maps.
// ============================================

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const entryFile = path.join(rootDir, "easemotion.css");
const outputFile = path.join(rootDir, "easemotion.min.css");

const noMap = process.argv.includes("--no-map");

const localImportPattern = /@import\s+(?:url\(\s*)?["']([^"']+)["']\s*\)?\s*;/g;

function removeCSSComments(source) {
  let result = "", i = 0;
  while (i < source.length) {
    const ch = source[i];
    if (ch === '"' || ch === "'") {
      const quote = ch; result += ch; i++;
      while (i < source.length) {
        const c = source[i]; result += c;
        if (c === "\\") { i++; if (i < source.length) { result += source[i]; i++; } continue; }
        if (c === quote) { i++; break; }
        i++;
      }
      continue;
    }
    if (ch === "/" && source[i + 1] === "*") { i += 2; while (i < source.length) { if (source[i] === "*" && source[i + 1] === "/") { i += 2; break; } i++; } continue; }
    result += ch; i++;
  }
  return result;
}

let sourceFiles = [];
let sourceContents = [];

async function bundleCss(filePath, state) {
  const normalizedPath = path.normalize(filePath);
  if (state.cache.has(normalizedPath)) return state.cache.get(normalizedPath);

  if (state.stack.has(normalizedPath)) {
    const cycleStart = state.pathStack.indexOf(normalizedPath);
    const chain = [...state.pathStack.slice(cycleStart), normalizedPath].map(p => path.relative(rootDir, p));
    throw new Error(`Circular CSS import: ${chain.join(" -> ")}`);
  }

  state.stack.add(normalizedPath);
  state.pathStack.push(normalizedPath);

  const source = await readFile(normalizedPath, "utf8");
  const relPath = path.relative(rootDir, normalizedPath);

  if (!sourceFiles.includes(relPath)) {
    sourceFiles.push(relPath);
    sourceContents.push(source);
  }

  const sourceWithoutComments = removeCSSComments(source);
  const directory = path.dirname(normalizedPath);

  const bundled = sourceWithoutComments.replace(localImportPattern, (_, importPath) => {
    if (/^(?:https?:)?\/\//i.test(importPath)) { state.externalImports.add(_.trim()); return ""; }
    const resolved = path.resolve(directory, importPath);
    state.localImports.push(resolved);
    return `__EASEMOTION_IMPORT__${resolved}__`;
  });

  const chunks = []; let lastIndex = 0;
  const placeholderPattern = /__EASEMOTION_IMPORT__(.+?)__/g; let match;
  while ((match = placeholderPattern.exec(bundled)) !== null) {
    chunks.push(bundled.slice(lastIndex, match.index));
    chunks.push(bundleCss(match[1], state));
    lastIndex = placeholderPattern.lastIndex;
  }
  chunks.push(bundled.slice(lastIndex));

  try {
    const resolved = await Promise.all(chunks);
    const result = resolved.join("\n");
    state.cache.set(normalizedPath, result);
    return result;
  } finally {
    state.stack.delete(normalizedPath);
    state.pathStack.pop();
  }
}

function minifyCss(css) {
  return removeCSSComments(css)
    .replace(/\r\n/g, "\n").replace(/\n+/g, "\n").replace(/\s+/g, " ")
    .replace(/\s*([{}:;,>])\s*/g, "$1").replace(/;}/g, "}").replace(/\)\s+\{/g, "){").trim();
}

// ── Minimal source map generator ──────────────────────────────

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function vlq(val) {
  let v = val < 0 ? ((-val) << 1) | 1 : val << 1, e = "";
  do { let d = v & 31; v >>= 5; if (v > 0) d |= 32; e += CHARS[d]; } while (v > 0);
  return e;
}

function generateSourceMap(minifiedCss) {
  const lines = minifiedCss.split("\n");
  const segments = lines.map((_, i) => i > 0 ? vlq(0) + vlq(0) + vlq(0) + vlq(0) : "");
  return JSON.stringify({
    version: 3,
    file: "easemotion.min.css",
    sources: sourceFiles,
    sourcesContent: sourceContents,
    names: [],
    mappings: segments.join(";"),
  });
}

async function build() {
  const state = {
    externalImports: new Set(), localImports: [],
    stack: new Set(), pathStack: [], cache: new Map(),
  };
  sourceFiles = []; sourceContents = [];

  const bundledCss = await bundleCss(entryFile, state);
  const externalImportsBlock = [...state.externalImports].join("");
  const minifiedCss = minifyCss(`${externalImportsBlock}\n${bundledCss}`);

  await mkdir(path.dirname(outputFile), { recursive: true });

  if (!noMap) {
    const sourceMap = generateSourceMap(minifiedCss);
    const mapFile = outputFile + ".map";
    await writeFile(mapFile, sourceMap, "utf8");
    await writeFile(outputFile, `${minifiedCss}\n/*# sourceMappingURL=easemotion.min.css.map */\n`, "utf8");
    const docsMapFile = path.join(rootDir, "docs", "easemotion.min.css.map");
    await mkdir(path.dirname(docsMapFile), { recursive: true });
    await writeFile(docsMapFile, sourceMap, "utf8");
  } else {
    await writeFile(outputFile, `${minifiedCss}\n`, "utf8");
  }

  const docsOutputFile = path.join(rootDir, "docs", "easemotion.min.css");
  if (!noMap) {
    await writeFile(docsOutputFile, `${minifiedCss}\n/*# sourceMappingURL=easemotion.min.css.map */\n`, "utf8");
  } else {
    await writeFile(docsOutputFile, `${minifiedCss}\n`, "utf8");
  }

  console.log(JSON.stringify({
    entry: path.relative(rootDir, entryFile),
    output: path.relative(rootDir, outputFile),
    sourceMap: noMap ? false : path.relative(rootDir, outputFile) + ".map",
    importsInlined: state.localImports.length,
    externalImports: state.externalImports.size,
    bytes: Buffer.byteLength(minifiedCss, "utf8"),
  }, null, 2));
}

build().catch((e) => { console.error("Build failed:", e); process.exitCode = 1; });
