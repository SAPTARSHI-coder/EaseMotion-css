# Scale-Hover Accessible Tooltip (`#54302`)

## What does this do?
Provides a tactile spring-damped WAI-ARIA tooltip system whose contextual guidance cards scale responsively without triggering surrounding DOM layout reflows.

## How is it used?
Organize ARIA tooltips inside an `ease-tooltip-scale-hover` tactile container:
```html
<div class="ease-tooltip-scale-hover">
  <div class="scale-tooltip act-sc" id="tip-sc" role="tooltip">...</div>
</div>
```

## Why is it useful?
Solves issue #54302 by bringing satisfying spring physical elasticity into accessible WAI-ARIA contextual guidance tooltips.