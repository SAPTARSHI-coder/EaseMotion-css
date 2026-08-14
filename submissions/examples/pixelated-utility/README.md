# Retro 8-bit Pixelated Utility

## Description
This submission resolves Issue #68980 by providing a simple CSS utility class designed to enforce harsh, aliased scaling on images or canvas elements. It prevents the browser from automatically blurring scaled-up images (bilinear interpolation) and instead preserves sharp, blocky edges (nearest-neighbor interpolation), perfect for retro 8-bit aesthetics or pixel art.

## Features
- Pure CSS solution.
- Uses `image-rendering: pixelated;` for modern browsers.
- Includes fallbacks (`crisp-edges` and `-ms-interpolation-mode`) for maximum cross-browser compatibility.

## Usage
Simply apply the `.ease-pixelated` class to any `<img>`, `<canvas>`, or element with a `background-image` that you intend to scale up while retaining a sharp pixelated look.

```html
<!-- Scaling up a small 16x16 pixel art image to 200x200 -->
<img src="small-pixel-art.png" class="ease-pixelated" style="width: 200px; height: 200px;" alt="Pixel Art">
```

### Why use this?
When you have a small pixel art graphic (e.g., 16x16px or 32x32px) and you want it to appear large on the screen, setting a higher `width` and `height` in CSS usually causes the browser to smooth or blur the image to make it look "better". For pixel art, this destroys the aesthetic. Adding `.ease-pixelated` forces the browser to scale the image sharply, keeping every pixel crisp and distinct.
