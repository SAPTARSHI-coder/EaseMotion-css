# Compositor-Only High-Performance Keyframe Animations & Stylelint Integration (#58550)

### 1. What does this do?
Refactors keyframe animations across the framework to use GPU-accelerated compositor-only properties (`transform`, `opacity`, `filter`) and enforces this standard strictly using `stylelint-high-performance-animation`.

### 2. How is it used?
HTML elements use compositor-based animation classes without triggering browser layout recalculations:
```html
<div class="ease-squish-demo">Squish Animation</div>
<div class="ease-glow-demo">Glow Animation</div>
```

### 3. Why is it useful?
Eliminating layout-triggering properties (`width`, `height`, `margin`, `top`, `border-radius`, `box-shadow`) inside keyframes prevents browser reflows and repaints on every frame, eliminating 60fps jank and optimizing mobile battery consumption.
