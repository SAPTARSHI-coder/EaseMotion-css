# CSS Zoom-In Card Grid for Gaming Hub Layouts

Closes #56458

### What does this do?
A responsive card grid for gaming hub layouts where each card's thumbnail zooms in smoothly on hover/focus, accompanied by a subtle glow border and content lift.

### How is it used?
```html
<div class="gaming-grid">
  <div class="gaming-card">
    <div class="gaming-card-thumb" style="background: linear-gradient(135deg, #a855f7, #4c1d95);"></div>
    <div class="gaming-card-body">
      <h3>Neon Strike</h3>
      <p>FPS &middot; 4.8 ★</p>
    </div>
  </div>
</div>
```

### Why is it useful?
It's a common game/tournament browsing pattern that uses only pure CSS `transform: scale()` and `box-shadow` transitions — no JavaScript — to give strong, GPU-accelerated hover feedback. The grid is fully responsive across desktop, tablet, and mobile, includes `:focus-within` for keyboard accessibility, and falls back to a static state under `prefers-reduced-motion`.

### Notes
- Accent color (`#a855f7`) and thumbnail gradients are demo placeholders; can be swapped for CSS custom properties during integration.
- Fully pure CSS/HTML, no external JS frameworks.
