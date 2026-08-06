# LightningCSS Build Refactor Proposal (`ease-build-script-refactor-proposal`)

An architectural proposal to replace the current Node.js CSS minifier with [LightningCSS](https://lightningcss.dev/) (formerly Parcel CSS) for significantly faster build times and better optimization.

## 🚀 Features & EaseMotion Showcase

- **Performance**: LightningCSS is written in Rust and is often 100x faster than traditional JS-based minifiers.
- **Modern Vendor Prefixing**: Automatically handles prefixing based on a browserslist target, removing the need for a separate autoprefixer pass.
- **Architectural Proposal**: This submission proposes updating the root `build-minified-css.mjs` script. To pass the automated EaseMotion PR checks without modifying root/core files, the proposed script changes are documented below and demonstrated via a conceptual UI in `demo.html`.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser to view the benchmark comparison proposal. All required CSS is inside `style.css`.

### Proposed Script Change
If this proposal is accepted, the maintainer would update `build-minified-css.mjs` to look something like this:

```javascript
import { transform } from 'lightningcss';
import fs from 'fs';

// Read raw CSS
const css = fs.readFileSync('core/easemotion.css');

// Minify with LightningCSS
const { code, map } = transform({
  filename: 'easemotion.css',
  code: css,
  minify: true,
  sourceMap: true
});

// Write minified output
fs.writeFileSync('dist/easemotion.min.css', code);
# LightningCSS Build Refactor Proposal (`ease-build-script-refactor-proposal`)

An architectural proposal to replace the current Node.js CSS minifier with [LightningCSS](https://lightningcss.dev/) (formerly Parcel CSS) for significantly faster build times and better optimization.

## 🚀 Features & EaseMotion Showcase

- **Performance**: LightningCSS is written in Rust and is often 100x faster than traditional JS-based minifiers.
- **Modern Vendor Prefixing**: Automatically handles prefixing based on a browserslist target, removing the need for a separate autoprefixer pass.
- **Architectural Proposal**: This submission proposes updating the root `build-minified-css.mjs` script. To pass the automated EaseMotion PR checks without modifying root/core files, the proposed script changes are documented below and demonstrated via a conceptual UI in `demo.html`.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser to view the benchmark comparison proposal. All required CSS is inside `style.css`.

### Proposed Script Change
If this proposal is accepted, the maintainer would update `build-minified-css.mjs` to look something like this:

```javascript
import { transform } from 'lightningcss';
import fs from 'fs';

// Read raw CSS
const css = fs.readFileSync('core/easemotion.css');

// Minify with LightningCSS
const { code, map } = transform({
  filename: 'easemotion.css',
  code: css,
  minify: true,
  sourceMap: true
});

// Write minified output
fs.writeFileSync('dist/easemotion.min.css', code);
