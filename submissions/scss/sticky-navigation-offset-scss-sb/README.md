# Sticky Navigation Offset — SCSS helper mixin

Sticky navigation offset mixin reserving space for a fixed/sticky header via scroll-margin-top and a CSS variable.

## What it does
Sticky navigation offset mixin reserving space for a fixed/sticky header via scroll-margin-top and a CSS variable.

## Files
- `_sticky-navigation-offset.scss` — the mixin partial

## Usage
```scss
@use "./sticky-navigation-offset" as *;

section { @include sticky-nav-offset(5rem); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81283
