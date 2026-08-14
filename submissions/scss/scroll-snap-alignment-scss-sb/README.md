# Scroll Snap Alignment — SCSS helper mixin

Scroll snap alignment mixin configuring snap type, snap align, and a fallback for non-snap browsers.

## What it does
Scroll snap alignment mixin configuring snap type, snap align, and a fallback for non-snap browsers.

## Files
- `_scroll-snap-alignment.scss` — the mixin partial

## Usage
```scss
@use "./scroll-snap-alignment" as *;

.feed { @include scroll-snap-align(y mandatory, start); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81284
