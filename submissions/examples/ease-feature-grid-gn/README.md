# ease-feature-grid — CSS Feature Grid Component

1. **What does this add?** A responsive CSS feature grid with animated hover cards, icon containers, titles, descriptions, and optional "learn more" links. Supports color variants (default/success/warning/danger), 2/3/4-column layouts via modifier classes, and icon lift+rotate animation on hover.
2. **How is it used?**
```html
<div class="ease-feature-grid">
  <div class="ease-feature-card">
    <div class="ease-feature-icon">⚡</div>
    <h3 class="ease-feature-title">Lightning Fast</h3>
    <p class="ease-feature-desc">Zero-dependency animations that run in the browser.</p>
    <a href="#" class="ease-feature-link">Learn more →</a>
  </div>

  <!-- Color variants -->
  <div class="ease-feature-card ease-feature-card-success">...</div>
  <div class="ease-feature-card ease-feature-card-warning">...</div>
  <div class="ease-feature-card ease-feature-card-danger">...</div>
</div>

<!-- Column count variants -->
<div class="ease-feature-grid ease-feature-grid-2">...</div>
<div class="ease-feature-grid ease-feature-grid-4">...</div>
```
3. **Why is it useful?** Feature grids are one of the most common landing-page patterns (used by Vercel, Linear, Stripe, and virtually every SaaS product). This component combines EaseMotion CSS's existing hover/transform utilities with a composable card structure, keeping class names human-readable and fully token-driven. Includes `prefers-reduced-motion` support to disable hover animations per accessibility guidelines.