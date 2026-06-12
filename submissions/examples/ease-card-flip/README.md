# 3D Ease Card Flip Component

A lightweight, high-performance, and responsive 3D card-flipping animation utility built using zero-dependency raw CSS. It delivers a fluid 180-degree transition between a front and back face upon hover.

## Mechanics

This utility relies on modern hardware-accelerated CSS 3D properties:

- `perspective`: Establishes the viewport depth plane.
- `transform-style: preserve-3d`: Mandates child elements retain their coordinate systems in 3D space.
- `backface-visibility: hidden`: Conceals the mirrored reverse texture of the alternate face during rotation.

## Structure

```html
<div class="ease-card-flip">
  <div class="ease-card-flip-inner">
    <div class="ease-card-flip-front"></div>
    <div class="ease-card-flip-back"></div>
  </div>
</div>
```
