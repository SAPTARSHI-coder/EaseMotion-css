# CSS Minification Build Step

Welcome to the **CSS Minification Build Step** guide! This document details how to configure a build script that concatenates and minifies EaseMotion's core CSS modules into a single production asset, complete with source maps and size reports.

---

## 📋 Table of Contents

1. [Build Step Specifications](#1-build-step-specifications)
2. [Minifier Script Blueprint](#2-minifier-script-blueprint)
3. [NPM Integration Setup](#3-npm-integration-setup)
4. [Interactive Simulator Dashboard](#4-interactive-simulator-dashboard)

---

## 1. Build Step Specifications

For production builds, the compilation task must satisfy:

- **Concatenation**: Combine variables, base, animation, and utility CSS files into one file.
- **Optimization**: Use `clean-css` (or `cssnano`) to strip comments, whitespaces, and optimize selectors.
- **Source Maps**: Generate a `.map` file so developers can debug using unminified source code in browser inspector devtools.
- **Build Logs**: Print the original size, minified size, and compression ratio in the terminal.

---

## 2. Minifier Script Blueprint (`build.js`)

Save this file under `scripts/build.js`:

```javascript
const fs = require("fs");
const path = require("path");
const CleanCSS = require("clean-css");

// Source paths
const srcDir = path.join(__dirname, "../core");
const distDir = path.join(__dirname, "../dist");

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Core CSS files to bundle
const files = [
  path.join(srcDir, "variables.css"),
  path.join(srcDir, "base.css"),
  path.join(srcDir, "animations.css"),
  path.join(srcDir, "utilities.css"),
];

console.log("Locating CSS modules...");
const concatenated = files
  .map((file) => fs.readFileSync(file, "utf8"))
  .join("\n");

console.log("Optimizing via clean-css with source-map generation...");
const output = new CleanCSS({
  sourceMap: true,
  rebase: false,
}).minify(concatenated);

// Write outputs
fs.writeFileSync(path.join(distDir, "easemotion.min.css"), output.styles);
fs.writeFileSync(
  path.join(distDir, "easemotion.min.css.map"),
  output.sourceMap.toString()
);

const origSize = (concatenated.length / 1024).toFixed(2);
const miniSize = (output.styles.length / 1024).toFixed(2);
const lift = (
  ((concatenated.length - output.styles.length) / concatenated.length) *
  100
).toFixed(1);

console.log(`Success! easemotion.min.css written.`);
console.log(
  `Original Size: ${origSize} KB | Minified Size: ${miniSize} KB | Compression: -${lift}%`
);
```

---

## 3. NPM Integration Setup

Expose this build script by adding the `build` target inside the project's `package.json` file:

```json
{
  "name": "easemotion-css",
  "version": "1.1.0",
  "scripts": {
    "build": "node scripts/build.js"
  },
  "devDependencies": {
    "clean-css": "^5.3.2"
  }
}
```

Now developers can run `npm run build` to compile production assets.

---

## 4. Interactive Simulator Dashboard

The companion page (`demo.html`) simulates this setup:

- **Interactive Editor**: Edit source CSS definitions.
- **CLI Log Screen**: Displays the compilation logs.
- **Stats Cards**: Displays the original size, minified size, and compression lift values.
