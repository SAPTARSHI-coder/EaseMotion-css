# Grid auto-fit Animation Fix

## What does this do?
Fixes CSS grid column collapse when animation classes are applied to `auto-fit` grid children, by isolating animation to an inner wrapper element so the grid layout is never disturbed.

## How is it used?
```html
<div class="grid-container">
  <div class="grid-item" style="--i:0">
    <div class="grid-item__inner">Card content</div>
  </div>
</div>
```

## Why is it useful?
When `transform` or `animation` is applied directly to a grid child inside an `auto-fit` layout, the browser may miscalculate intrinsic column widths during animation, causing columns to collapse or jump. By keeping the grid item as a plain layout container and animating only the inner div, EaseMotion CSS can safely apply entrance and hover effects without breaking the grid.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to see the effect.

## Contribution Notes
- Fixes: #9824
- Class naming was handled by the contributor
- Maintainer will rename to `ease-*` convention before merging
