# Retro 8-bit Pixelated Utility

## Description
This submission resolves Issue #68981 by introducing a simple, reusable utility class `.ease-pixelated`. It applies `image-rendering` CSS properties to enforce nearest-neighbor scaling (crisp edges).

## Features
- **Cross-Browser Support**: Uses standard `image-rendering: pixelated;` along with fallbacks for Firefox (`-moz-crisp-edges`), Webkit (`-webkit-optimize-contrast`), and older standards.
- **Perfect for Pixel Art**: Prevents the browser from applying default bilinear or bicubic smoothing when scaling up small images (like 16x16 or 32x32 sprites).
- **Canvas Compatible**: Works great on `<canvas>` elements as well, which is especially useful for retro web games.

## Usage
Simply apply the `.ease-pixelated` class to any `<img>` or `<canvas>` element that you are scaling up.

```html
<!-- A small 16x16 image scaled up to 200x200 via CSS or width attributes -->
<img src="small-sprite.png" class="ease-pixelated" width="200" height="200" alt="Pixel Art">
```

Without this utility, browsers will blur the small image when stretching it. With `.ease-pixelated`, it scales with sharp, crisp squares, preserving the 8-bit retro aesthetic.
