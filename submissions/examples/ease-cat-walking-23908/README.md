# CSS Walking Cat Animation

## What does this do?

A pure CSS animated cat built from basic shapes (divs with border-radius) that walks in place with moving legs, a wagging tail, blinking eyes, and smooth body translation. No images, SVG, or JavaScript required.

## How is it used?

```html
<div class="ease-cat-walking">
  <div class="ease-cat-head">
    <div class="ease-cat-ear ease-cat-ear-left"></div>
    <div class="ease-cat-ear ease-cat-ear-right"></div>
    <div class="ease-cat-eye ease-cat-eye-left"></div>
    <div class="ease-cat-eye ease-cat-eye-right"></div>
    <div class="ease-cat-nose"></div>
  </div>
  <div class="ease-cat-body"></div>
  <div class="ease-cat-leg ease-cat-leg-fl"></div>
  <div class="ease-cat-leg ease-cat-leg-fr"></div>
  <div class="ease-cat-leg ease-cat-leg-bl"></div>
  <div class="ease-cat-leg ease-cat-leg-br"></div>
  <div class="ease-cat-tail"></div>
</div>
```

Customize via CSS variables:

| Variable | Default | Effect |
|----------|---------|--------|
| `--ease-cat-size` | `80px` | Overall size |
| `--ease-cat-speed` | `1s` | Animation speed |
| `--ease-cat-color` | `#f59e0b` | Cat body color |

## Why is it useful?

Showcases CSS art and complex multi-part animation using only transforms and keyframes. A fun, engaging demo that demonstrates EaseMotion CSS's animation capabilities. Respects `prefers-reduced-motion`.
