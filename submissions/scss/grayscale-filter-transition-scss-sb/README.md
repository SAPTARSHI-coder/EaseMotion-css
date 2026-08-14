# Grayscale Filter Transition — SCSS helper mixin

Grayscale filter transition mixin with a hover/focus color restore and reduced-motion guard.

## What it does
Grayscale filter transition mixin with a hover/focus color restore and reduced-motion guard.

## Files
- `_grayscale-filter-transition.scss` — the mixin partial

## Usage
```scss
@use "./grayscale-filter-transition" as *;

.photo { @include grayscale-transition(1, 0.3s); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81288
