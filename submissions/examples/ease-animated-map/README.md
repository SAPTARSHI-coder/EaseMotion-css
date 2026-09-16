# Ease Animated Map Background

A pure CSS animated world map background featuring pulsing radar city nodes, glowing flight path trails, and aircraft flying along curved trajectories.

## 1. What does this do?

This component provides a dark, futuristic world map background complete with pulsing radar city nodes (New York, London, Tokyo) and aircraft traveling along curved global flight paths with animated trail indicators.

## 2. How is it used?

It leverages the modern **CSS Motion Path Module** via `offset-path: path(...)` to bind DOM elements (the aircraft icons) directly to SVG path coordinates. Inside `@keyframes ease-fly-aircraft`, the animation modulates `offset-distance` from `0%` to `100%`. Using `offset-rotate: auto`, the browser automatically computes and aligns the rotation of the aircraft as it navigates the curvature of the trajectory. Glowing flight path trails are animated asynchronously using `stroke-dasharray` and `stroke-dashoffset` manipulation.

```css
.ease-aircraft-1 {
  offset-path: path("M 250 200 Q 400 50 550 150");
  animation: ease-fly-aircraft 6s ease-in-out infinite;
}
```

## 3. Why is it useful?

Historically, animating DOM or vector elements along complex Bézier curves required heavy JavaScript libraries (e.g., GSAP MotionPathPlugin, HTML5 Canvas frame loops, or RequestAnimationFrame scripts). By moving the path calculation and interpolation directly to CSS Motion Path and keyframes, the rendering engine offloads execution to the CSS compositor. This delivers perfectly smooth 60fps path-based animations with zero main-thread JavaScript execution overhead.
