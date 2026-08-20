# Conic Gradient Generator — SCSS helper mixin

Conic gradient generator mixin producing rotating conic backgrounds with configurable color stops and a linear-gradient fallback.

## What it does
Conic gradient generator mixin producing rotating conic backgrounds with configurable color stops and a linear-gradient fallback.

## Files
- `_conic-gradient-generator.scss` — the mixin partial

## Usage
```scss
@use "./conic-gradient-generator" as *;

.wheel { @include conic-gradient(from 0deg, #6366f1, #ec4899, #22d3ee, #6366f1); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81272
