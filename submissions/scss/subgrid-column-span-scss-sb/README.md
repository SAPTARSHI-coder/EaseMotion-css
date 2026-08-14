# Subgrid Column Span — SCSS helper mixin

Subgrid column span mixin making a grid item span its parent's tracks via subgrid with a fallback.

## What it does
Subgrid column span mixin making a grid item span its parent's tracks via subgrid with a fallback.

## Files
- `_subgrid-column-span.scss` — the mixin partial

## Usage
```scss
@use "./subgrid-column-span" as *;

.nested { @include subgrid-column-span(3); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81349
