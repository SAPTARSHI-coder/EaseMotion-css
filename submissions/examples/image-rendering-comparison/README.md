# Image Rendering Comparison

## What does it do?
A pure-CSS demo showing the `image-rendering` property for controlling how scaled images are rendered — no JavaScript required.

## Features
- **auto (default)** — smooth bilinear interpolation (good for photos)
- **pixelated** — nearest-neighbor scaling (essential for pixel art)
- **crisp-edges** — contrast-preserving scaling
- **Side-by-side comparison** — 8px checkerboard scaled 32x

## Usage
```css
.pixel-art { image-rendering: pixelated; }
.photo-img { image-rendering: auto; }
```

## Classes
- `.ir-auto` — default smooth scaling
- `.ir-pixelated` — blocky nearest-neighbor scaling
- `.ir-crisp` — contrast-preserving scaling

## Browser Support
- `image-rendering` — Chrome 41+, Firefox 65+, Safari 13+

## Tech Stack
- HTML + CSS only, no JavaScript
- Self-contained data URI SVG images

## Preview
Open `demo.html` directly in browser.
