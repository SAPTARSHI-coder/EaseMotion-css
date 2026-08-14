# Fix: Missing Vendor Prefixes in Built CSS (Issue #53769)

## What does this do?

Documents and demonstrates the missing vendor prefix bug in EaseMotion CSS, where the build pipeline (`scripts/build-minified-css.mjs`) performs only regex-based minification with no PostCSS/Autoprefixer step, causing the output `easemotion.min.css` to omit WebKit/Safari prefixes that are required for correct rendering on iOS and other WebKit-based browsers.

## How is it used?

Open `demo.html` directly in a browser to see:

1. The broken vs. fixed behaviour of `.ease-select` — without `-webkit-appearance: none`, iOS Safari renders its native dropdown arrow on top of the custom SVG chevron.
2. The broken vs. fixed behaviour of `.ease-toggle` — without `-webkit-user-select: none`, older WebKit builds allow accidental text selection on the toggle label.
3. The proposed PostCSS + autoprefixer integration for the build script.

The `style.css` in this submission contains the corrected class variants (`.ease-select-fixed`, `.ease-toggle-fixed`) with the vendor prefixes applied, and inline code comments that show the exact diff needed in `components/forms.css`.

## Why is it useful?

EaseMotion CSS targets real-world browser usage including iOS Safari and other WebKit-based mobile browsers. Any CSS property that requires a vendor prefix — such as `appearance`, `user-select`, and `backdrop-filter` — will silently fail on those browsers without the corresponding `-webkit-` rule.

The root cause is architectural: the build script has no prefix-generation step, so the problem recurs with every new property added to any component. The short-term fix is to add the prefixes manually to `components/forms.css`; the long-term fix is to integrate PostCSS + autoprefixer into the build pipeline so prefixes are generated automatically against a `browserslist` config.

## Files Changed (for maintainer reference)

The actual core changes recommended are:

- **`components/forms.css`**
  - Add `-webkit-appearance: none;` before `appearance: none;` on `.ease-select`
  - Add `-webkit-user-select: none;` before `user-select: none;` on `.ease-toggle`

- **`scripts/build-minified-css.mjs`** *(long-term)*
  - Add a PostCSS + autoprefixer processing step after bundling, before minifying

- **`.browserslistrc`** *(new file, long-term)*
  - Define the target browser matrix for autoprefixer

## Affected Properties Summary

| Property | Component | Missing Prefix | Impact |
|---|---|---|---|
| `appearance: none` | `.ease-select` | `-webkit-appearance: none` | Native arrow not hidden on iOS Safari |
| `user-select: none` | `.ease-toggle` | `-webkit-user-select: none` | Text selectable on old WebKit |
| `backdrop-filter` | Various (glass effects) | `-webkit-backdrop-filter` | Blur effect missing on Safari < 18 |
