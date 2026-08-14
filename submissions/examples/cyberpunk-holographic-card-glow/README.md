# Cyberpunk Holographic Card Glow

## 1. What does this do?
This contribution provides a self-contained, high-performance Cyberpunk Holographic Card UI component built using pure CSS3. It features interactive 3D perspective tilt shifts on mouse hover/focus, an iridescent sweep glare overlay, ambient neon border glow reflections, and scanline texture overlays.

## 2. How is it used?
Include `style.css` in your HTML document and structure your card markup using `.holo-card` container wrapping `.holo-card-inner`.

```html
<link rel="stylesheet" href="style.css">

<article class="holo-card" tabindex="0">
  <div class="holo-card-inner">
    <div class="scanlines"></div>
    <div class="glare"></div>
    <div class="card-header">
      <span class="badge">SEC-9</span>
    </div>
    <h2 class="card-title">NETRUNNER // V3</h2>
    <p class="card-desc">Advanced cybernetic neural interface card.</p>
  </div>
</article>
```

## 3. Why is it useful?
It brings modern aesthetic depth and dynamic interactive micro-feedback to web applications without relying on heavy JavaScript WebGL libraries or external canvas runtimes. It strictly obeys accessibility standard keyboard focus (`:focus-visible`) and GPU layer optimization.
