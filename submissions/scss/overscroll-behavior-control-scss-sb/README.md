# Overscroll Behavior Control — SCSS helper mixin

Overscroll behavior control mixin preventing scroll chaining with configurable per-axis values.

## What it does
Overscroll behavior control mixin preventing scroll chaining with configurable per-axis values.

## Files
- `_overscroll-behavior-control.scss` — the mixin partial

## Usage
```scss
@use "./overscroll-behavior-control" as *;

.modal { @include overscroll-control(none); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81291
