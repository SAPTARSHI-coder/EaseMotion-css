# Accent Caret Color — SCSS helper mixin

Accent & caret color mixin setting accent-color and caret-color from a single CSS variable for consistent theming.

## What it does
Accent & caret color mixin setting accent-color and caret-color from a single CSS variable for consistent theming.

## Files
- `_accent-caret-color.scss` — the mixin partial

## Usage
```scss
@use "./accent-caret-color" as *;

input { @include accent-caret(#6366f1); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81292
