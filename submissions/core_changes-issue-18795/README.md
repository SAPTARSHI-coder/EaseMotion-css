# Replace regex-based CSS minification with AST-based lightningcss

## What does this do?
Replaces the fragile regex-based `minifyCss` function in `scripts/build-minified-css.mjs` with `lightningcss`, an AST-based CSS minifier that correctly understands CSS grammar and preserves complex property values.

## Root Cause
The old `minifyCss` function used aggressive regex replacements like `.replace(/\s*([{}:;,>])\s*/g, "$1")` which strips necessary whitespace from complex CSS values such as:

```css
/* grid-template-areas — quoted strings merged into invalid syntax */
grid-template-areas: "a b" "c d";  /* became: "a b""c d" */

/* calc() — spaces around operators stripped */
width: calc(100% - 2rem);  /* became: calc(100%-2rem) — invalid */
```

## Changes Made
- Added `lightningcss` as a devDependency in `package.json`
- Replaced the custom `minifyCss` function in `scripts/build-minified-css.mjs` with `transform()` from lightningcss
- The new minifier parses CSS into an AST, applies safe minifications, and serializes back — preserving all valid CSS

## Testing
```bash
npm run build     # produces easemotion.min.css via lightningcss
npm test          # existing test suite still passes
```

Fixes #18795
