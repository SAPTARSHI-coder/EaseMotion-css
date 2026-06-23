# Replace regex-based CSS minification with AST-based lightningcss

## What does this do?
Demonstrates how the fragile regex-based `minifyCss` function in `scripts/build-minified-css.mjs` should be replaced with an AST-based CSS minifier (`lightningcss`) that correctly understands CSS grammar and preserves complex property values.

## Root Cause
The current `minifyCss` function uses aggressive regex replacements like `.replace(/\s*([{}:;,>])\s*/g, "$1")` which strips necessary whitespace from complex CSS values such as:
- `grid-template-areas: "a b" "c d"` → merged into invalid `"a b""c d"`
- `calc(100% - 2rem)` → became `calc(100%-2rem)` — invalid
- Multi-value `filter`, `transform`, and `background` chains get mangled

## Proposed Fix
Replace the custom `minifyCss` function with `transform()` from `lightningcss`:

```js
import { transform } from "lightningcss";

function minifyCss(css) {
  let result = transform({ code: Buffer.from(css), minify: true });
  return result.code.toString();
}
```

The lightningcss minifier parses CSS into an AST, applies safe minifications, and serializes back — preserving all valid CSS grammar.

## Demo
Open `demo.html` in a browser to see complex CSS properties (grid-template-areas, calc(), clamp(), multi-layer gradients, filter/transform chains) that the old regex minifier would break, displayed correctly.

Fixes #18795
