# High Pixel Density Query — SCSS helper mixin

High pixel density query mixin applying rules on retina/HiDPI screens via min-resolution with a -webkit fallback.

## What it does
High pixel density query mixin applying rules on retina/HiDPI screens via min-resolution with a -webkit fallback.

## Files
- `_high-pixel-density-query.scss` — the mixin partial

## Usage
```scss
@use "./high-pixel-density-query" as *;

.logo { @include high-pixel-density(2) { background-image: url(logo@2x.png); } }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81325
