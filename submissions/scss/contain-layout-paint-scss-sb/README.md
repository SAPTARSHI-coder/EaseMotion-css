# Contain Layout Paint — SCSS helper mixin

Contain layout & paint mixin isolating an element's rendering for performance with size/content fallbacks.

## What it does
Contain layout & paint mixin isolating an element's rendering for performance with size/content fallbacks.

## Files
- `_contain-layout-paint.scss` — the mixin partial

## Usage
```scss
@use "./contain-layout-paint" as *;

.widget { @include contain-layout-paint(layout paint); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81313
