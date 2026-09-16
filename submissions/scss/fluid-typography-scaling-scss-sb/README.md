# Fluid Typography Scaling — SCSS helper mixin

Fluid typography scaling using clamp() for smooth responsiveness without media queries, with CSS variable integration and a rem fallback.

## What it does
Fluid typography scaling using clamp() for smooth responsiveness without media queries, with CSS variable integration and a rem fallback.

## Files
- `_fluid-typography-scaling.scss` — the mixin partial

## Usage
```scss
@use "./fluid-typography-scaling" as *;

h1 { @include fluid-type(1.25rem, 2.5rem, 360px, 1200px); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81263
