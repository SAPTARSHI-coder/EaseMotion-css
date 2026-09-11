# 3D Flip Card Component

## What does this do?
This component provides a smooth 180-degree 3D card flip animation on mouse hover using pure CSS.

## How is it used?
Link `style.css` in your HTML document and wrap card content inside `.flip-card-front` and `.flip-card-back`:

```html
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <p class="title">FLIP CARD</p>
      <p>Hover Me</p>
    </div>
    <div class="flip-card-back">
      <p class="title">BACK</p>
      <p>Leave Me</p>
    </div>
  </div>
</div>
```

## Why is it useful?
It provides a lightweight, GPU-accelerated 3D card flip effect using CSS `perspective`, `transform-style: preserve-3d`, and `backface-visibility: hidden` with zero JavaScript overhead.

## Credit
Inspired by Uiverse.io card design by joe-watson-sbf.
