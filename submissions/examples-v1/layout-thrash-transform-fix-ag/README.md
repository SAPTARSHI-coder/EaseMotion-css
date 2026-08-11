# Layout Thrash → Transform Fix

## What does this do?
Replaces animation of layout-triggering CSS properties (`margin`, `padding`, `width`) with GPU-composited `transform: translateY()` and `transform: scale()`, eliminating layout thrashing and repaints on every animation frame.

## How is it used?
```html
<!-- Lift effect: hover raises element upward -->
<div class="lift-card">Hover me</div>

<!-- Grow effect: hover scales element up -->
<div class="grow-card">Hover me</div>
```

## Why is it useful?
Animating layout properties like `margin-top` or `padding` causes the browser to recalculate the entire document layout on every animation frame — the most expensive rendering operation possible. Using `transform: translateY()` and `transform: scale()` instead produces visually identical results with zero layout recalculation, as these run entirely on the GPU compositor thread. This is essential for smooth 60fps animations in EaseMotion CSS.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to see the effect.

## Contribution Notes
- Fixes: #9826
- Class naming was handled by the contributor
- Maintainer will rename to `ease-*` convention before merging
