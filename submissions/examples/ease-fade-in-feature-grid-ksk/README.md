# Fade-In Feature Grid (`ease-fade-in-feature-grid-ksk`)

1. What does this do?  
An animated layout component designed for Minimalist Tech Portals. Feature cards fade in and slide up sequentially (`transform: translateY(16px)` → `translateY(0)`) using staggered animation-delays on initial page load, and elevate dynamically under user cursor hover.

2. How is it used?  
Structure cards inside `.feature-grid` using `.feature-card`. The staggered reveal triggers automatically:

```html
<div class="feature-grid">
  <div class="feature-card">
    <span class="card-icon">⚡</span>
    <h3 class="card-title">Title</h3>
    <p class="card-desc">Description text...</p>
  </div>
</div>
```

Configure parameters using CSS variables:
```css
.feature-grid {
  --ease-grid-duration:   0.45s;           /* entry animation duration */
  --ease-grid-easing:     cubic-bezier(0.25, 1, 0.5, 1);
  --ease-grid-bg:         #07080d;
}
```

3. Why is it useful?  
Provides clean, structured tech info layouts. Replaces static grids with an organic, performant load animation while maintaining full mobile viewport responsiveness, prefers-reduced-motion safety overrides, and Dark/Light theme modes.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #64624.*
