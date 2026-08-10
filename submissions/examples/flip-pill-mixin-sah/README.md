# 3D Flip Pill Status Badge Mixin (`#54700`)

## What does this do?
Creates an interactive dual-sided status badge that smoothly rotates across a 3D perspective plane when hovered to reveal secondary analytics or labels.

## How is it used?
Structure front and back labels inside an `ease-flip-pill` parent element:
```html
<div class="ease-flip-pill">
  <div class="pill-inner">
    <div class="pill-front">Front Status</div>
    <div class="pill-back">Back Metric</div>
  </div>
</div>
```

## Why is it useful?
Solves issue #54700 by maximizing dashboard real estate and making metadata interaction playful and responsive.