# Fix: Stylelint Enforces Legacy CSS Notation (#2779)

> ⚠️ **For Maintainer:** This fix requires editing `.stylelintrc.json`, a project configuration file which contributors cannot modify directly. This submission documents the proposed patch for review.

1. **What's the bug?** `.stylelintrc.json` sets `"color-function-notation": "legacy"`, forcing comma-separated color values (`rgba(0, 0, 0, 0.5)`) instead of the modern space-separated syntax (`rgb(0 0 0 / 50%)`). It also sets `"media-feature-range-notation": "prefix"`, forcing old-style `min-width`/`max-width` media queries instead of the modern range-context syntax (`@media (width >= 768px)`).
2. **Proposed fix:** Update `.stylelintrc.json`:
```diff
- "color-function-notation": "legacy",
+ "color-function-notation": "modern",

- "media-feature-range-notation": "prefix",
+ "media-feature-range-notation": "context",
```
   (Per the issue, `"color-function-notation"` could also simply be removed, since `"modern"` is the default in `stylelint-config-standard`.)
3. **How is it tested?** `demo.html` shows two visually identical cards — one written with modern notation, one with legacy notation — to illustrate the syntax difference these rules govern. Once the config is updated, the "legacy" card's syntax would start failing lint while the "modern" card's syntax would pass.
4. **Why is this correct?** Modern CSS color functions (`rgb()`/`hsl()` with space-separated values and `/` for alpha) and range-context media queries (`width >= 768px`) are part of the CSS Color Module Level 4 and Media Queries Level 4 specs, supported in all current major browsers. Enforcing legacy syntax in a "modern" framework's linter actively discourages contributors from using up-to-date, more readable CSS.