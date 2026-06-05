# Add npm package.json for CDN Publishing

## What does this do?

Enhances the existing `package.json` with CDN-specific fields (`unpkg`, `jsdelivr`, `exports`) so EaseMotion CSS works optimally via jsDelivr and unpkg CDNs, and supports modern bundler resolution.

## Proposed Changes to `package.json`

The following fields should be added to the existing `package.json`:

```json
{
  "unpkg": "easemotion.css",
  "jsdelivr": "easemotion.css",
  "exports": {
    ".": "./easemotion.css",
    "./core/variables.css": "./core/variables.css",
    "./core/base.css": "./core/base.css",
    "./core/animations.css": "./core/animations.css",
    "./core/utilities.css": "./core/utilities.css",
    "./components/buttons.css": "./components/buttons.css",
    "./components/cards.css": "./components/cards.css"
  }
}
```

## How is it used?

After publishing to npm, developers can use EaseMotion CSS via:

**jsDelivr CDN:**

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion.css"
/>
```

**unpkg CDN:**

```html
<link rel="stylesheet" href="https://unpkg.com/easemotion-css/easemotion.css" />
```

**npm install + bundler import:**

```js
// In Vite, webpack, or any bundler
import "easemotion-css";
// or granular:
import "easemotion-css/core/variables.css";
import "easemotion-css/core/animations.css";
```

## Why is it useful?

- The `jsdelivr` field tells jsDelivr which file to serve as the default entry point
- The `unpkg` field does the same for unpkg CDN
- The `exports` field enables modern bundlers (Vite, webpack 5+) to resolve individual CSS modules
- This makes EaseMotion CSS a first-class npm package that works seamlessly with CDNs and bundlers
- Aligns with the project's goal of "link one file and start building"
