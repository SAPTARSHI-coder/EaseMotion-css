# Grid Template Area — SCSS helper mixin

Grid template area mixin mapping named areas to grid-template-areas with validation-friendly syntax.

## What it does
Grid template area mixin mapping named areas to grid-template-areas with validation-friendly syntax.

## Files
- `_grid-template-area.scss` — the mixin partial

## Usage
```scss
@use "./grid-template-area" as *;

.layout { @include grid-template-area("header header" "sidebar main" "footer footer"); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81330
