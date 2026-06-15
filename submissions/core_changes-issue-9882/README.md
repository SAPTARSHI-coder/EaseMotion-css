# Core Changes — Issue #9882: Source Map Generation for Minified CSS

## Overview

Generate `easemotion.min.css.map` alongside `easemotion.min.css` so browser DevTools can map minified rules back to their original source files.

## Problem

`npm run build` writes `easemotion.min.css` with a custom regex-based minifier that strips whitespace and comments. No source map is produced. When debugging in Chrome DevTools, every CSS rule appears to originate from `easemotion.min.css:1`, making it impossible to identify which source file (e.g., `core/animations.css` vs `components/buttons.css`) contains the rule.

## Target Changes

### scripts/build-minified-css.mjs
- Replace the custom `minifyCss` function with a `csso.minify(css, { sourceMap: true })` call
- Write `easemotion.min.css.map` containing the source map JSON
- Append `/*# sourceMappingURL=easemotion.min.css.map */` to the minified CSS

### scripts/validate-bundle.mjs
- Track the original `.map` file alongside the original `.css`
- After rebuild, validate source map structure: `version === 3`, non-empty `sources`, non-empty `mappings`

### scripts/validate-pack.mjs
- Add `"easemotion.min.css.map"` to the `required` files array

## How to Apply

1. Replace `scripts/build-minified-css.mjs` with the updated version
2. Apply the validation additions to `scripts/validate-bundle.mjs` and `scripts/validate-pack.mjs`
3. Run `npm run build` — verify both `.css` and `.css.map` are created
4. Run `node scripts/validate-bundle.mjs` — verify validation passes

## Labels

- type:feature
- type:devops
- level:intermediate
- GSSoC-26
