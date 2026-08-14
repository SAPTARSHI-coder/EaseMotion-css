# Grid Column Row Span — SCSS helper mixin

Grid column & row span mixin for an item spanning N tracks with a fallback for older grid implementations.

## What it does
Grid column & row span mixin for an item spanning N tracks with a fallback for older grid implementations.

## Files
- `_grid-column-row-span.scss` — the mixin partial

## Usage
```scss
@use "./grid-column-row-span" as *;

.item { @include grid-span(2, 1); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81331
