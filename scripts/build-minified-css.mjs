import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const entryFile = path.join(rootDir, "easemotion.css");
const outputFile = path.join(rootDir, "easemotion.min.css");

const localImportPattern =
  /@import\s+(?:url\(\s*)?["']([^"']+)["']\s*\)?\s*;/g;

async function bundleCss(filePath, state) {
  const normalizedPath = path.normalize(filePath);

  if (state.stack.has(normalizedPath)) {
    const chain = [...state.stack, normalizedPath].map((item) =>
      path.relative(rootDir, item),
    );
    throw new Error(`Circular CSS import detected: ${chain.join(" -> ")}`);
  }

  state.stack.add(normalizedPath);
  const source = await readFile(normalizedPath, "utf8");
  const sourceWithoutComments = source.replace(/\/\*[\s\S]*?\*\//g, "");
  const directory = path.dirname(normalizedPath);

  const bundled = sourceWithoutComments.replace(localImportPattern, (fullMatch, importPath) => {
    if (/^(?:https?:)?\/\//i.test(importPath)) {
      state.externalImports.add(fullMatch.trim());
      return "";
    }

    const resolvedImport = path.resolve(directory, importPath);
    state.localImports.push(resolvedImport);
    return `__EASEMOTION_IMPORT__${resolvedImport}__`;
  });

  const chunks = [];
  let lastIndex = 0;
  const placeholderPattern = /__EASEMOTION_IMPORT__(.+?)__/g;
  let match;

  while ((match = placeholderPattern.exec(bundled)) !== null) {
    chunks.push(bundled.slice(lastIndex, match.index));
    chunks.push(bundleCss(match[1], state));
    lastIndex = placeholderPattern.lastIndex;
  }

  chunks.push(bundled.slice(lastIndex));
  const resolvedChunks = await Promise.all(chunks);

  state.stack.delete(normalizedPath);
  return resolvedChunks.join("\n");
}

function minifyCss(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\r\n/g, "\n")
    .replace(/\n+/g, "\n")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}:;,>])\s*/g, "$1")
    .replace(/;}/g, "}")
    .replace(/\)\s+\{/g, "){")
    .trim();
}

async function build() {
  const state = {
    externalImports: new Set(),
    localImports: [],
    stack: new Set(),
  };

  const bundledCss = await bundleCss(entryFile, state);
  const externalImportsBlock = [...state.externalImports].join("");
  const minifiedCss = minifyCss(`${externalImportsBlock}\n${bundledCss}`);

  await mkdir(path.dirname(outputFile), { recursive: true });
  await writeFile(outputFile, `${minifiedCss}\n`, "utf8");

  const summary = {
    entry: path.relative(rootDir, entryFile),
    output: path.relative(rootDir, outputFile),
    importsInlined: state.localImports.length,
    externalImports: state.externalImports.size,
    bytes: Buffer.byteLength(minifiedCss, "utf8"),
  };

  console.log(JSON.stringify(summary, null, 2));
}

build().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
