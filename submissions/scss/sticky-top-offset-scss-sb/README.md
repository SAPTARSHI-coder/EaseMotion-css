# Sticky Top Offset — SCSS helper mixin

Sticky top offset mixin making an element sticky at a given offset with a static fallback.

## What it does
Sticky top offset mixin making an element sticky at a given offset with a static fallback.

## Files
- `_sticky-top-offset.scss` — the mixin partial

## Usage
```scss
@use "./sticky-top-offset" as *;

.nav { @include sticky-top-offset(4rem); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81336
