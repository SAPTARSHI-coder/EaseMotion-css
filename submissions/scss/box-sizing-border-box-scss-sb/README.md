# Box Sizing Border Box — SCSS helper mixin

Box sizing border box mixin applying border-box sizing universally with an inherit fallback.

## What it does
Box sizing border box mixin applying border-box sizing universally with an inherit fallback.

## Files
- `_box-sizing-border-box.scss` — the mixin partial

## Usage
```scss
@use "./box-sizing-border-box" as *;

*, *::before, *::after { @include box-sizing-border-box; }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81361
