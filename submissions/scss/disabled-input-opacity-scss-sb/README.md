# Disabled Input Opacity — SCSS helper mixin

Disabled input opacity mixin styling disabled controls with reduced opacity and a not-allowed cursor.

## What it does
Disabled input opacity mixin styling disabled controls with reduced opacity and a not-allowed cursor.

## Files
- `_disabled-input-opacity.scss` — the mixin partial

## Usage
```scss
@use "./disabled-input-opacity" as *;

input { @include disabled-input-opacity(0.5); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81319
