# Tab Size Formatting — SCSS helper mixin

Tab size formatting mixin setting the rendered width of tab characters with a px fallback.

## What it does
Tab size formatting mixin setting the rendered width of tab characters with a px fallback.

## Files
- `_tab-size-formatting.scss` — the mixin partial

## Usage
```scss
@use "./tab-size-formatting" as *;

pre { @include tab-size(2); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81343
