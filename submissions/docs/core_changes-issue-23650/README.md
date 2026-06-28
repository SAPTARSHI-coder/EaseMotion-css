# Source Maps Generation — Issue #23650

## What does this do?

This submission proposes generating source maps (`.map` files) for the minified production stylesheet `easemotion.min.css` by upgrading the build script using the standard `clean-css` compiler.

## How is it used?

Run the build script in the terminal:

```bash
npm run build
```

This compiles the stylesheet and outputs both `easemotion.min.css` and its corresponding source map file `easemotion.min.css.map`. When inspected in browser DevTools, rules will map directly back to their original CSS partial files in `core/` and `components/`.

## Why is it useful?

It enables developers using EaseMotion CSS in production to easily debug and trace CSS style issues directly back to original source files and line numbers, instead of having all rules map to a single unreadable, minified line.

---

## Proposed Changes in Core Code

The following changes are proposed to integrate source maps:

### 1. File: `package.json`

Add `clean-css` under `devDependencies`:

```json
"devDependencies": {
  "clean-css": "^5.3.3",
  ...
}
```

### 2. File: `core/layers.css` (New File)

Extract cascade layers declaration to a separate file so that `@import` rules remain at the very top of `easemotion.css` (required for CSS spec compliance with clean-css):

```css
@layer easemotion-base, easemotion-components, easemotion-utilities;
```

### 3. File: `easemotion.css`

Replace the `@layer` declaration with the new layers stylesheet import:

```css
- @layer easemotion-base, easemotion-components, easemotion-utilities;
+ @import "./core/layers.css";
```

### 4. File: `scripts/build-minified-css.mjs`

Rewrite the build script to use `clean-css` and generate relative-path source maps:

```javascript
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import CleanCSS from "clean-css";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const entryFile = path.join(rootDir, "easemotion.css");
const outputFile = path.join(rootDir, "easemotion.min.css");
const mapFile = path.join(rootDir, "easemotion.min.css.map");

async function build() {
  const options = {
    inline: ["local"],
    sourceMap: true,
    rebase: false,
  };

  const output = await new Promise((resolve, reject) => {
    new CleanCSS(options).minify([entryFile], (error, result) => {
      if (error) return reject(error);
      if (result.errors.length > 0)
        return reject(new Error(result.errors.join("\n")));
      resolve(result);
    });
  });

  let minifiedCss = output.styles;
  // Append sourceMappingURL
  minifiedCss += `\n/*# sourceMappingURL=${path.basename(outputFile)}.map */\n`;

  // Make source paths relative to rootDir
  const sourceMap = JSON.parse(output.sourceMap.toString());
  sourceMap.sources = sourceMap.sources.map((source) => {
    if (path.isAbsolute(source)) {
      return path.relative(rootDir, source);
    }
    return source;
  });

  await mkdir(path.dirname(outputFile), { recursive: true });
  await writeFile(outputFile, minifiedCss, "utf8");
  await writeFile(mapFile, JSON.stringify(sourceMap), "utf8");

  // Write docs
  const docsDir = path.join(rootDir, "docs");
  await mkdir(docsDir, { recursive: true });
  const docsOutputFile = path.join(docsDir, "easemotion.min.css");
  const docsMapFile = path.join(docsDir, "easemotion.min.css.map");
  await writeFile(docsOutputFile, minifiedCss, "utf8");
  await writeFile(docsMapFile, JSON.stringify(sourceMap), "utf8");

  const summary = {
    entry: path.relative(rootDir, entryFile),
    output: path.relative(rootDir, outputFile),
    bytes: Buffer.byteLength(minifiedCss, "utf8"),
  };

  console.log(JSON.stringify(summary, null, 2));
}

build().catch((error) => {
  console.error("Build failed:", error);
  process.exitCode = 1;
});
```

Fixes #23650
