# Perspective Origin Helper — SCSS helper mixin

Perspective origin helper mixin setting perspective-origin with a sensible default and CSS variable integration.

## What it does
Perspective origin helper mixin setting perspective-origin with a sensible default and CSS variable integration.

## Files
- `_perspective-origin-helper.scss` — the mixin partial

## Usage
```scss
@use "./perspective-origin-helper" as *;

.scene { @include perspective-origin(30% 20%); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81289
