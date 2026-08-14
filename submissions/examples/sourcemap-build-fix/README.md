# Build Pipeline Architecture: Sourcemap Generation Fix

This submission documents and provides the architectural fix for the catastrophic build script bug that actively destroys the CSS debugging experience for developers using the framework in production environments.

## Issue Description
Currently, the core Node.js build script (`scripts/build-minified-css.mjs`) is severely flawed. It simply utilizes a fragile Regex replacement script to strip comments and whitespace to generate `easemotion.min.css`. Because it circumvents a proper AST (Abstract Syntax Tree) compiler, it completely fails to generate a corresponding `.map` sourcemap file.

As a result, when developers use `easemotion.min.css` in production and attempt to inspect a component using Chrome DevTools, every single CSS rule points to `easemotion.min.css:1` (Line 1). This mathematically destroys the debugging experience, making it impossible to trace bugs back to their original component source files.

## Proposed Fix
To obliterate this issue, the custom regex-based `build-minified-css.mjs` script MUST be retired. Instead, the framework must utilize a proper, industry-standard CSS minification pipeline (such as `clean-css`, `esbuild`, or `postcss`) that natively parses the AST and emits a perfect `easemotion.min.css.map` alongside the minified bundle.

### Example Architecture (Using `clean-css`)

**❌ Incorrect (Current `build-minified-css.mjs`):**
```javascript
// Relies on fragile regex and provides 0 sourcemaps
const sourceWithoutComments = removeCSSComments(source);
const minifiedCss = minifyCss(bundledCss);
await writeFile(outputFile, minifiedCss, "utf8");
```

**✅ Correct (New Architecture):**
```javascript
// Generates perfect .map files for DevTools integration
import CleanCSS from 'clean-css';

const output = new CleanCSS({ sourceMap: true }).minify(source);
await writeFile('easemotion.min.css', output.styles);
await writeFile('easemotion.min.css.map', output.sourceMap.toString());
```

The `demo.html` in this folder documents this architectural requirement. The maintainers must immediately replace the regex minifier with a proper AST compiler to restore the developer experience.
