# `ease-motion-track` Utility

A pure CSS animation utility for moving DOM elements along complex, non-linear vector paths using the modern CSS Motion Path API.

---

### 1. What does this do?
The `ease-motion-track` utility uses CSS `offset-path` and `offset-distance` to animate any HTML element along a custom geometric bezier trajectory (such as curves, loops, or custom SVG paths). Additionally, `offset-rotate: auto` automatically rotates the element to face the exact directional heading of travel as it moves along the curve.

### 2. How is it used?
Simply link `style.css` and add the `.ease-motion-track` class to your target element:

```html
<link rel="stylesheet" href="style.css">

<!-- Animated DOM element moving along path -->
<div class="paper-plane ease-motion-track">
  🚀
</div>
```

If you wish to visualize the trajectory, you can overlay an SVG `<path>` matching the `offset-path` string in your background:

```html
<div class="track-container">
  <svg class="track-svg">
    <path d="M 10,80 Q 200,10 400,80 T 800,80" stroke="rgba(255, 255, 255, 0.15)" stroke-dasharray="6" fill="none" />
  </svg>
  <div class="flying-icon ease-motion-track"></div>
</div>
```

### 3. Why is it useful?
- **Zero JavaScript Overhead**: Replaces heavy animation libraries like GSAP MotionPathPlugin or Anime.js with native CSS.
- **Hardware-Accelerated Performance**: Offloads path calculations directly to the browser's compositor thread for buttery smooth 60fps animations.
- **Automatic Directional Orientation**: `offset-rotate: auto` eliminates manual rotation math or keyframe angle calculation.
- **Pure & Lightweight**: Adds responsive, vector-based motion with minimal code footprint and graceful CSS `@supports` fallback.
