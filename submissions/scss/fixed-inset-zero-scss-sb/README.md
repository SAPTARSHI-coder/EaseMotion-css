# Fixed Inset Zero — SCSS helper mixin

Fixed inset zero mixin pinning an element to all edges of the viewport for full-screen overlays.

## What it does
Fixed inset zero mixin pinning an element to all edges of the viewport for full-screen overlays.

## Files
- `_fixed-inset-zero.scss` — the mixin partial

## Usage
```scss
@use "./fixed-inset-zero" as *;

.scrim { @include fixed-inset-zero; }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81335
