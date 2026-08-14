# Custom Selection Highlight — SCSS helper mixin

Custom selection highlight mixin styling ::selection with configurable colors and a forced-colors fallback.

## What it does
Custom selection highlight mixin styling ::selection with configurable colors and a forced-colors fallback.

## Files
- `_custom-selection-highlight.scss` — the mixin partial

## Usage
```scss
@use "./custom-selection-highlight" as *;

p { @include custom-selection(#6366f1, #fff); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81305
