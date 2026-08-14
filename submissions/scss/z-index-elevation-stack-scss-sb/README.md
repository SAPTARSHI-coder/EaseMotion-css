# Z Index Elevation Stack — SCSS helper mixin

Z-index elevation stack mixin assigning a layered z-index scale from a CSS variable with a base of 0.

## What it does
Z-index elevation stack mixin assigning a layered z-index scale from a CSS variable with a base of 0.

## Files
- `_z-index-elevation-stack.scss` — the mixin partial

## Usage
```scss
@use "./z-index-elevation-stack" as *;

.modal { @include z-index-elevation(5); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81359
