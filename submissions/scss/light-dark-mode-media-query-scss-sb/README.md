# Light Dark Mode Media Query — SCSS helper mixin

Light & dark mode media query mixins (prefers-color-scheme) plus an optional [data-theme] override, with content blocks.

## What it does
Light & dark mode media query mixins (prefers-color-scheme) plus an optional [data-theme] override, with content blocks.

## Files
- `_light-dark-mode-media-query.scss` — the mixin partial

## Usage
```scss
@use "./light-dark-mode-media-query" as *;

body { @include dark-mode { background: #0f172a; } }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81274
