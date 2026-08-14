# Placeholder Color Styling — SCSS helper mixin

Placeholder color styling mixin theming ::placeholder with configurable color and opacity across vendors.

## What it does
Placeholder color styling mixin theming ::placeholder with configurable color and opacity across vendors.

## Files
- `_placeholder-color-styling.scss` — the mixin partial

## Usage
```scss
@use "./placeholder-color-styling" as *;

input { @include placeholder-color(#94a3b8, 1); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81320
