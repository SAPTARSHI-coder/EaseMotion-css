# image-rendering: pixelated vs crisp-edges vs auto

## Overview

Compares CSS `image-rendering` property values for pixel art scaling. A 16×16 sprite is rendered at 1×, 2×, 4×, and 8× using `pixelated` (nearest-neighbor), `crisp-edges` (contrast-preserving), and `auto` (bicubic smoothing). Includes a pixel-art character built with CSS grid cells and a browser-differences reference.

## Usage

Open `demo.html` in Chrome, Firefox, and Safari to see browser-specific rendering differences. Each column applies a different `image-rendering` value to the same pixel art at progressive scales. The pixel art is built entirely with CSS/JS (no external images needed). The code block shows recommended usage patterns.

## Browser Support

`image-rendering` is supported in all modern browsers. `pixelated` is supported in Chrome, Edge, and Opera. `crisp-edges` is supported in Firefox, Safari, and Chrome. Safari does not support `pixelated`. The property degrades to `auto` (default bicubic) when unsupported. Use both values for cross-browser pixel art: `image-rendering: pixelated; image-rendering: crisp-edges;`.
