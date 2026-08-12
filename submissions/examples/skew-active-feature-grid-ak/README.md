# skew-active-feature-grid

### What does this do?
A responsive feature grid for product catalog pages where each card subtly skews, lifts, and gets a shadow on hover/active.

### How is it used?
```html
<div class="grid-skew">
  <div class="grid-skew__card">
    <span class="grid-skew__icon">🚀</span>
    <h3 class="grid-skew__title">Feature Title</h3>
    <p class="grid-skew__text">Short description.</p>
  </div>
</div>
```
Add `is-active` to `.grid-skew__card` to trigger the effect via JS/state instead of relying on `:hover` alone.

### Why is it useful?
Product catalog pages commonly need feature/benefit grids (shipping, security, returns, etc.); the subtle skew + lift on interaction gives cards a tactile, premium feel without heavy JS. Pure CSS transforms/transitions, GPU-friendly. Responsive grid collapses from 3 → 2 → 1 columns, and disables all transitions under `prefers-reduced-motion`.
