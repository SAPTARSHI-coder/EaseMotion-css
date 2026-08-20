# Masonry Grid Layout — SCSS helper mixin

Masonry grid layout mixin using CSS grid masonry with a column-count fallback for unsupported browsers.

## What it does
Masonry grid layout mixin using CSS grid masonry with a column-count fallback for unsupported browsers.

## Files
- `_masonry-grid-layout.scss` — the mixin partial

## Usage
```scss
@use "./masonry-grid-layout" as *;

.wall { @include masonry-grid(4, 1.5rem); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81281
