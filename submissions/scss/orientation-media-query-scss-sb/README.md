# Orientation Media Query — SCSS helper mixin

Orientation media query mixin applying rules for portrait or landscape orientations.

## What it does
Orientation media query mixin applying rules for portrait or landscape orientations.

## Files
- `_orientation-media-query.scss` — the mixin partial

## Usage
```scss
@use "./orientation-media-query" as *;

.grid { @include orientation-query(landscape) { grid-template-columns: 1fr 1fr; } }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81326
