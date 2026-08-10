# Infinite Animation CPU Performance Fix

## What does this do?
Demonstrates the correct pattern for running multiple simultaneous infinite CSS animations without causing high CPU usage or frame drops, using `will-change: transform` and `contain: layout style` to enable GPU compositing.

## How is it used?
```html
<div class="pulse-ring">Pulse</div>
<div class="float-card">Float</div>
<div class="shimmer-bar"></div>
```

## Why is it useful?
Chaining multiple `animation: ... infinite` declarations without GPU-compositing hints forces the browser to repaint and recalculate layout on every frame, causing CPU spikes and dropped frames. By adding `will-change: transform, opacity` and `contain: layout style`, the browser promotes elements to a dedicated GPU layer, making animations silky smooth even on lower-end devices. This directly addresses EaseMotion CSS issue #9822.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to see the effect.

## Contribution Notes
- Fixes: #9822
- Class naming was handled by the contributor
- Maintainer will rename to `ease-*` convention before merging
