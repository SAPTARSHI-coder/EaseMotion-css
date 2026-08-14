# Perspective 3D Transform — SCSS helper mixin

Perspective 3D transform mixin applying perspective and transform-style with configurable depth and a flat fallback.

## What it does
Perspective 3D transform mixin applying perspective and transform-style with configurable depth and a flat fallback.

## Files
- `_perspective-3d-transform.scss` — the mixin partial

## Usage
```scss
@use "./perspective-3d-transform" as *;

.scene { @include perspective-3d(800px, center); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81287
