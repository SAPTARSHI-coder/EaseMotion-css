# Flexbox Gap Fallback — SCSS helper mixin

Flexbox gap fallback mixin applying gap with a margin-based fallback for older browsers.

## What it does
Flexbox gap fallback mixin applying gap with a margin-based fallback for older browsers.

## Files
- `_flexbox-gap-fallback.scss` — the mixin partial

## Usage
```scss
@use "./flexbox-gap-fallback" as *;

.row { @include flex-gap-fallback(1rem, row); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81282
