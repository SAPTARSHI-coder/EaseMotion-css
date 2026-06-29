# ease-zoom-in GPU Acceleration Fix

## What does this do?
Adds `will-change: transform, opacity` to the `zoom-in` animation class, promoting the animated element to a dedicated GPU compositing layer before the animation starts, eliminating jitter on lower-end devices.

## How is it used?
```html
<!-- Entry zoom animation — GPU accelerated -->
<div class="zoom-in">Zooms in smoothly</div>

<!-- Staggered zoom for lists — uses CSS custom property for delay -->
<div class="zoom-in-stagger" style="--i:0">Item 1</div>
<div class="zoom-in-stagger" style="--i:1">Item 2</div>

<!-- Hover zoom — also GPU composited -->
<div class="zoom-in-hover">Hover to zoom</div>
```

## Why is it useful?
Without `will-change: transform`, the browser must composite the element on-demand each frame, causing jitter on slower GPUs. Adding `will-change: transform, opacity` before the animation starts pre-allocates a GPU layer, making the scale transition buttery smooth. The `will-change` is reset to `auto` after animation completes to avoid unnecessary GPU memory usage.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to see the effect.

## Contribution Notes
- Fixes: #9828
- Class naming was handled by the contributor
- Maintainer will rename to `ease-*` convention before merging
