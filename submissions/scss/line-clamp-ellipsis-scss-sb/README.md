# Line Clamp Ellipsis — SCSS helper mixin

Line clamp ellipsis mixin truncating text to N lines with an ellipsis, with -webkit fallbacks.

## What it does
Line clamp ellipsis mixin truncating text to N lines with an ellipsis, with -webkit fallbacks.

## Files
- `_line-clamp-ellipsis.scss` — the mixin partial

## Usage
```scss
@use "./line-clamp-ellipsis" as *;

.desc { @include line-clamp(3); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81322
