# GPU Hardware Acceleration & Layer Optimization

## What does this do?

A performance tuning sandbox demonstrating how to resolve layout thrashing and high CPU paint overhead. It compares unoptimized CPU painting (triggering main-thread layout invalidations) against GPU-accelerated compositing layer overrides.

## How is it used?

1. Link the utility stylesheet:
   `<link rel="stylesheet" href="style.css">`
2. Add the `.ease-gpu-layer` class to elements undergoing intensive transformations or opacity transitions to isolate them into their own hardware-accelerated compositor layer:
   `<div class="your-animating-element ease-gpu-layer">Content</div>`

## Why is it useful?

- **GPU Compositing**: Moves rendering operations off the main thread to the GPU using `will-change: transform, opacity`.
- **Zero Layout Thrashing**: Uses hardware-accelerated transforms (`translateZ(0)`) to ensure the browser composites animating elements without triggering full reflows or CPU paint invalidations.
- **Flicker Resolution**: Implements `backface-visibility: hidden` to eliminate flickering artifacts during intensive multi-axis 3D rotation keyframes.

## Tech Stack

- HTML
- CSS (Pure CSS, no JS)

## Preview

Open `demo.html` directly in your browser. Inspect the elements in Chrome DevTools under the "Layers" panel to observe the isolated compositing boundaries.
