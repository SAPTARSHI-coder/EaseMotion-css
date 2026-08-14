# Absolute Center Transform — SCSS helper mixin

Absolute center transform mixin centering a positioned element with translate(-50%,-50%) and a flex fallback.

## What it does
Absolute center transform mixin centering a positioned element with translate(-50%,-50%) and a flex fallback.

## Files
- `_absolute-center-transform.scss` — the mixin partial

## Usage
```scss
@use "./absolute-center-transform" as *;

.modal { @include absolute-center; }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81334
