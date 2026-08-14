# fix regex css minification

1. **What does this do?** Shows how the regex-based `minifyCss` function in `scripts/build-minified-css.mjs` strips important whitespace from values like `grid-template-areas`, `calc()`, `clamp()`, and multi-property functions. The proposed fix is to swap it for `lightningcss`, which parses CSS into an AST and minifies safely.

2. **How is it used?** Open `demo.html` — each section shows a CSS property that the old regex minifier breaks (tagged "broken") alongside the correct rendering that an AST minifier (like lightningcss) produces.

3. **Why is it useful?** The current `minifyCss` regex `/\s*([{}:;,>])\s*/g` is too aggressive. It does not understand CSS grammar — it treats all whitespace as removable, but `grid-template-areas` quoted strings, operator spacing in `calc()`, and multi-value functions depend on specific whitespace. An AST-based tool like lightningcss (used by Parcel, Next.js, and others) knows the grammar and only strips whitespace that is truly safe to remove. This keeps `easemotion.min.css` small without silently producing invalid CSS.

fixes #18795
