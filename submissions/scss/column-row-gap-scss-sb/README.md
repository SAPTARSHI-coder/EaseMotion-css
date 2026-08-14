# Column Row Gap — SCSS helper mixin

Column & row gap mixin setting gap for grid/flex/multicol with legacy browser fallbacks.

## What it does
Column & row gap mixin setting gap for grid/flex/multicol with legacy browser fallbacks.

## Files
- `_column-row-gap.scss` — the mixin partial

## Usage
```scss
@use "./column-row-gap" as *;

.grid { @include column-row-gap(1rem, 1.5rem); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81314
