# Color Mix Palette Functions — SCSS helper mixin

Color-mix palette functions generating tints/shades/tones via color-mix() with CSS variable integration and legacy rgb() fallbacks.

## What it does
Color-mix palette functions generating tints/shades/tones via color-mix() with CSS variable integration and legacy rgb() fallbacks.

## Files
- `_color-mix-palette-functions.scss` — the mixin partial

## Usage
```scss
@use "./color-mix-palette-functions" as *;

.soft { color: tint(#6366f1, 30%); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81267
