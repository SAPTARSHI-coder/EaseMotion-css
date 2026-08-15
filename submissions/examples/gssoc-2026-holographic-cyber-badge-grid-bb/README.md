# Holographic Cyber Badge Grid (GSSoC 2026)

## 1. What does this do?
The **Holographic Cyber Badge Grid** component creates interactive 3D parallax achievement cards with dynamic conic foil gradients, scanline overlays, and multi-color reactive neon ambient reflections upon hover.

## 2. How is it used?
Link the style sheet into your document:
```html
<link rel="stylesheet" href="style.css">
```
Create badge cards wrapped inside `.holo-card` containers with `.card-inner`, `.holo-foil`, and `.scanlines` elements:
```html
<article class="holo-card gold">
  <div class="card-inner">
    <div class="holo-foil"></div>
    <div class="scanlines"></div>
    <div class="card-content">...</div>
  </div>
</article>
```

## 3. Why is it useful?
- **Immersive Visual Depth**: Leverages CSS 3D perspective transforms (`rotateX`, `rotateY`, `translateZ`) without external WebGL or 3D engine overhead.
- **Hardware Accelerated**: Runs smoothly at 60 FPS utilizing native compositor properties.
- **Themeable**: Offers built-in gold, cyan, and magenta glow variants for gamified achievements and developer profiles.
