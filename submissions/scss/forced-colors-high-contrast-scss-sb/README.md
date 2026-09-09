# Forced Colors High Contrast — SCSS helper mixin

Forced colors high-contrast mixin adjusting elements for Windows High Contrast mode via forced-colors media query.

## What it does
Forced colors high-contrast mixin adjusting elements for Windows High Contrast mode via forced-colors media query.

## Files
- `_forced-colors-high-contrast.scss` — the mixin partial

## Usage
```scss
@use "./forced-colors-high-contrast" as *;

.card { @include forced-colors { border: 1px solid ButtonText; } }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81275
