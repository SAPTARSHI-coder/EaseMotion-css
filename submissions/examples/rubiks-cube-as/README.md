# Rubik's Cube

### What does this do?

It shows a solved Rubik's cube rendered in real 3D and spinning slowly, so each of its six colored faces rotates into view in turn. Every face is a proper three by three grid of tiles on a black body. Under reduced motion the cube stops at a fixed angle that still shows three faces.

### How is it used?

```html
<div class="scene">
  <div class="cube">
    <div class="face front"><span></span>...</div>
    <div class="face top"><span></span>...</div>
  </div>
</div>
```

The `scene` sets a `perspective` and the `cube` uses `transform-style: preserve-3d`. Each of the six faces is a nine-cell grid pushed out to a side of the cube with a `rotate` plus `translateZ(75px)`, half the cube width. The `spin` animation rotates the whole cube around its vertical axis at a fixed tilt so all faces pass the camera.

### Why is it useful?

Puzzle, gaming, and playful loading screens use a cube. This builds a true 3D Rubik's cube with pure CSS transforms, no images or JavaScript, with a reduced motion fallback.
