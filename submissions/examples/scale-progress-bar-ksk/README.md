# Scale Progress Bar (`scale-progress-bar-ksk`)

1. What does this do?  
Displays dark-mode progress bars that animate from `scaleX(0)` to `scaleX(1)` with a springy overshoot effect, a shimmer sweep, and a glowing tip dot that pops in once the fill completes.

2. How is it used?  
Add a `.progress-fill` div inside a `.progress-track`. Set the per-bar width and color via CSS custom properties on a modifier class (e.g. `.bar-purple`):

```css
.bar-purple {
  --bar-width: 85%;
  --bar-delay: 0.2s;
  --bar-color: #6c63ff;
  --bar-gradient: linear-gradient(90deg, #6c63ff, #a78bfa);
}
```

3. Why is it useful?  
Provides an animated skill/stats section component with no JavaScript. Five pre-built colour variants (purple, cyan, pink, green, amber) are ready to use out of the box.

---
*Created for GSSoC-26 — Resolves #41555.*
