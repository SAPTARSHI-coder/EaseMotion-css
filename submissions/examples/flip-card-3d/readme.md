# 3D Flip Card

## 1. What does this do?
A card with front and back faces that flips 180 degrees on hover using 3D CSS transforms. Supports both horizontal (rotateY) and vertical (rotateX) flip.

## 2. How is it used?
Structure a `.flip-card` with a `.flip-card-inner` containing `.flip-card-front` and `.flip-card-back`. Add `.flip-vertical` for vertical flip.
```html
<div class="flip-card flip-vertical">
  <div class="flip-card-inner">
    <div class="flip-card-front">...</div>
    <div class="flip-card-back">...</div>
  </div>
</div>
```

## 3. Why is it useful?
A complete 3D flip card using `preserve-3d` and `backface-visibility`. Both axes are supported via a modifier class. Respects `prefers-reduced-motion` and disables the flip entirely.
