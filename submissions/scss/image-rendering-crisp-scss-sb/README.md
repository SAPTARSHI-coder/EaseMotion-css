# Image Rendering Crisp — SCSS helper mixin

Image rendering crisp mixin for pixelated/sharp rendering of pixel-art images with a smooth fallback.

## What it does
Image rendering crisp mixin for pixelated/sharp rendering of pixel-art images with a smooth fallback.

## Files
- `_image-rendering-crisp.scss` — the mixin partial

## Usage
```scss
@use "./image-rendering-crisp" as *;

.pixel-art { @include image-rendering-crisp(pixelated); }
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81296
