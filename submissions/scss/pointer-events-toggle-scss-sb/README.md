# Pointer Events Toggle — SCSS helper mixin

Pointer events toggle mixin switching pointer events on/off with a focus-visible escape hatch for accessibility.

## What it does
Pointer events toggle mixin switching pointer events on/off with a focus-visible escape hatch for accessibility.

## Files
- `_pointer-events-toggle.scss` — the mixin partial

## Usage
```scss
@use "./pointer-events-toggle" as *;

.disabled-layer { @include pointer-events-toggle(none); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81293
