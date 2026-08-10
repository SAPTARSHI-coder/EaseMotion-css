# Production Build Guide — Minified CSS

## What does this do?
Documents and demonstrates the correct way to reference `easemotion.min.css` — the single-file production bundle — instead of the development entry point, explaining the build pipeline and showing the real-world file size difference.

## How is it used?

### In a plain HTML page
```html
<!-- ✅ Production: single file, no @import chain -->
<link rel="stylesheet" href="easemotion.min.css">

<!-- 🚧 Development only -->
<link rel="stylesheet" href="easemotion.css">
```

### Via npm / bundler
```js
// ✅ Production bundle
import 'easemotion-css/easemotion.min.css';

// 🚧 Dev build (readable source, suitable for debugging)
import 'easemotion-css/easemotion.css';
```

### Via CDN
```html
<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css@x.x.x/easemotion.min.css">
```

## Why is it useful?

The original issue (#38163) reported that only the unminified `easemotion.css` was visible to consumers, causing production sites to ship unnecessary whitespace, comments, and — more critically — an `@import` chain of 14 files requiring 14 separate HTTP requests.

`easemotion.min.css` already exists and solves this. The missing piece was developer-facing documentation that:

1. Explains the difference between the two files
2. Shows the concrete file size numbers (~120 KB source across 14 files → ~71 KB minified single file, ~18 KB gzip)
3. Demonstrates how to reference the minified build in HTML, npm/bundler, and CDN contexts
4. Clarifies that `npm run build` is a maintainer-only command and contributors should not run it

This submission fills that documentation gap without modifying any framework source file, following the contribution freeze policy.

## File size reference

| File | Size | Notes |
|---|---|---|
| `easemotion.css` (entry) | 1.9 KB | `@import` declarations only |
| All source files combined | ~120 KB | 14 files, 14 HTTP requests |
| `easemotion.min.css` | ~71 KB | 1 file, ~41% smaller than source total |
| `easemotion.min.css` gzip | ~18 KB | Typical over-the-wire size |

## Tech Stack
- HTML
- CSS
- Minimal vanilla JavaScript (tab switcher, ~15 lines, no dependencies)

## Preview
Open `demo.html` directly in any modern browser. The page is fully self-contained and requires no server.

## Contribution Notes
- Only files inside `submissions/docs/minified-css-guide-ksg/` have been created.
- No core files, build scripts, workflows, or root-level files were modified.
- The `style.css` in this folder styles the demo page only — it is not part of the framework.
