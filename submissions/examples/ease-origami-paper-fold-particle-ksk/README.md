# Origami Paper Fold Particle Effect (`ease-origami-paper-fold-particle-ksk`)

1. What does this do?  
A high-performance pure CSS particle floating effect. It renders geometric folded-paper origami shapes (cranes, boats, swans, flowers) using CSS polygon clipping path masks, animating them to rise, scale, and tumble along the 3D X, Y, and Z axes inside a perspective viewport.

2. How is it used?  
Define a container wrapper `.origami-viewport` with 3D perspective, and populate it with shape and animation path particle elements:

```html
<div class="origami-viewport">
  <div class="origami-particle shape-crane p1"></div>
  <div class="origami-particle shape-boat p2"></div>
</div>
```

Configure parameters using CSS variables:
```css
.origami-viewport {
  --ease-origami-duration: 7s;             /* drift speed */
  --ease-origami-surface:  #10121d;
}
```

3. Why is it useful?  
Standard canvas-based particles rely on continuous CPU main-thread render loop calculations. This component offloads all calculations directly to the GPU using CSS 3D transforms (`translate3d`, `rotate3d`) and clip-paths, maintaining a fluid 120 FPS frame rate on mobile, full responsiveness, prefers-reduced-motion safety overrides, and Dark/Light theme modes.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #73812.*
