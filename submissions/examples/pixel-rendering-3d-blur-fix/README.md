# Sandbox Layout Fix: WebKit `image-rendering: pixelated` 3D Spatial Transform Bi-Linear Blur Resolution

## Overview
A high-performance WebKit texture sampling patch for pixel art assets, retro game UI components, and QR code graphics undergoing 3D perspective transforms (`rotateY()`, `perspective()`). It completely eliminates bi-linear texture blurring, forces point-sampled nearest-neighbor rasterization, and preserves razor-sharp pixel boundaries during 3D hover tilt effects in Apple Safari.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a 3D tilt card containing an ultra-low-resolution pixel art SVG sprite asset.
* `style.css` — Scoped layout modifier asset layer specifying `-webkit-optimize-contrast`, `transform-style: flat`, and nearest-neighbor rendering declarations.

## 🐛 The Bug Resolved
Previously, rendering pixel art assets or QR codes using `image-rendering: pixelated` caused severe blurring in Apple Safari when applying 3D hover tilt transformations (`transform: perspective(800px) rotateY(15deg)`). WebKit's 3D rasterization pipeline overrides `image-rendering: pixelated` and defaults to smooth bi-linear texture sampling whenever an element is promoted to a 3D spatial compositing layer, turning crisp pixel edges into fuzzy, smeared textures.

## 🛠️ The Solution
The 3D layer compositing and texture sampling pipelines are optimized. By declaring `-webkit-optimize-contrast` alongside `image-rendering: pixelated` directly on the image element, WebKit's 3D sampler is forced to maintain point sampling. Concurrently, applying `transform-style: flat;` and `will-change: transform;` on the parent card wrapper flattens the 3D projection plane, keeping pixel art razor-sharp with zero scripts.
