# Quantum Particle Loader Ring (GSSoC 2026)

## 1. What does this do?
The **Quantum Particle Loader Ring** component provides a pure CSS counter-rotating dual particle orbital spinner featuring neon aura particle node illumination (`box-shadow`), a pulsing core energy reactor (`@keyframes pulseCore`), and a dynamic shimmer progress track.

## 2. How is it used?
Link the stylesheet in your HTML document:
```html
<link rel="stylesheet" href="style.css">
```
Embed the `.quantum-spinner` structure inside any modal overlay or loading container:
```html
<div class="quantum-spinner">
  <div class="outer-ring">
    <span class="particle p1"></span> ...
  </div>
  <div class="inner-ring">
    <span class="particle p4"></span> ...
  </div>
  <div class="core-reactor"></div>
</div>
```

## 3. Why is it useful?
- **Smooth GPU Compositor Execution**: Rotates and scales solely using CSS `transform` properties (`rotate`, `scale`) for zero-layout-shift performance.
- **Sci-Fi Aesthetic**: Adds high-tech futuristic loading feedback ideal for modern dashboards, AI platforms, and crypto apps.
- **Accessible & Lightweight**: Minimal DOM footprints with fully scalable vector dimensions.
