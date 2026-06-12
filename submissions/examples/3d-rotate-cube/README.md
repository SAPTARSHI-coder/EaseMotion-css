# 3D Rotating Cube

## 1. What does this do?

Shows a 3D cube rotating in space using CSS `perspective`, `transform-style: preserve-3d`, and animated `rotateX`/`rotateY` transforms.

## 2. How is it used?

Add a `.scene` container with a `.cube` child containing six `.cube-face` elements with classes `.front`, `.back`, `.right`, `.left`, `.top`, `.bottom`.

```html
<div class="scene">
  <div class="cube">
    <div class="cube-face front">Front</div>
    ...
  </div>
</div>
```

## 3. Why is it useful?

Demonstrates CSS 3D transforms and `preserve-3d` in a self-contained demo. All six faces are individually styled and colored. Respects `prefers-reduced-motion` and shows a static angled view when motion is reduced.
