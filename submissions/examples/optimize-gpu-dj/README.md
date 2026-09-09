# Performance Profiler and Animation Paint-Reduction Utilities

## What does this do?
This feature provides performance-optimization utilities (`.em-optimize-gpu` and `.em-will-change`) that promote animated elements to their own composite hardware rendering layers, bypassing main-thread CPU paint cycles for stutter-free 60fps rendering.

## How is it used?
Append the `.em-optimize-gpu` or `.em-will-change` utility classes directly alongside any active continuous animation class on an HTML element:

```html
<div class="em-animated em-spin-infinite em-optimize-gpu">
  <img src="loading-core.svg" alt="Loading...">
</div>
```

Or target upcoming interactions using the browser hint property:

```html
<div class="em-animated em-pulse-infinite em-will-change">
  <div class="pulse-element">Updating Content</div>
</div>
```

## Why is it useful?
Continuous pure CSS animations (such as infinite rotations, multi-axis transforms, or scaling pulses) often cause heavy paint invalidations, triggering layout reflows and high CPU load on the browser's main thread. This leads to visible frame drops, jagged edges, and battery drain, especially on lower-end mobile viewports. 

By applying these utilities, elements are promoted to their own graphics layers on the GPU, restricting recalculations solely to the lightweight compositing stage. It provides simple, intention-driven optimization classes that allow developers to compose high-performance rendering pipelines without changing their components' layout structure.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to inspect the rendering pipelines and compare the compositing states.

## Contribution Notes
- Class naming was handled by the contributor (`.em-optimize-gpu`, `.em-will-change`).
- Maintainer will rename to `ease-*` convention before merging.
