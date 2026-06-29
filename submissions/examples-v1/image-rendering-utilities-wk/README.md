# Image Rendering Utility Classes

## What does this do?

This adds utility classes to configure image upscaling algorithms in EaseMotion CSS. It provides control over whether scaled images appear smooth/blurred (default browser interpolation) or sharp/blocky (nearest-neighbor scaling, perfect for retro pixel art).

## How is it used?

Apply these scaling utility classes on images (`<img>`), canvas, or graphics elements:

```html
<img src="retro-sprite.png" class="ease-image-render-pixelated" />
```

Available classes:

- `.ease-image-render-auto`: Scaling using the browser's default smooth algorithm (bilinear or bicubic interpolation).
- `.ease-image-render-crisp`: Scaling preserving high contrast and edge crispness. Uses vendor prefixes (`-moz-crisp-edges`, `-webkit-optimize-contrast`, and `crisp-edges`) for cross-browser safety.
- `.ease-image-render-pixelated`: Scaling using a nearest-neighbor algorithm, causing pixels to look blocky and retro.

## Why is it useful?

It gives developers control over image quality rendering, allowing sharp presentation of low-resolution retro sprites, pixel art icons, barcodes, and medical images without browser-induced blurriness.
