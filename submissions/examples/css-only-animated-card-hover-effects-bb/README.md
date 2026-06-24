# CSS-Only Animated Card Hover Effects

A collection of 10 distinct card hover effects: lift, scale, glow, border-slide, gradient-overlay, shimmer, rotate, shadow-expand, border-color, and background-shift.

## What does this do?

Provides 10 different hover effect styles for card components. Each effect uses CSS transitions and transforms for smooth animations.

## How is it used?

```html
<div class="hover-card hover-card--lift" tabindex="0">
  <div class="hover-card__title">Card Title</div>
  <div class="hover-card__text">Card description text.</div>
</div>
```

### Available effects

```html
<div class="hover-card hover-card--lift">...</div>
<div class="hover-card hover-card--scale">...</div>
<div class="hover-card hover-card--glow">...</div>
<div class="hover-card hover-card--border-slide">...</div>
<div class="hover-card hover-card--gradient-overlay">...</div>
<div class="hover-card hover-card--shimmer">...</div>
<div class="hover-card hover-card--rotate">...</div>
<div class="hover-card hover-card--shadow-expand">...</div>
<div class="hover-card hover-card--border-color">...</div>
<div class="hover-card hover-card--bg-shift">...</div>
```

## Why is it useful?

- **10 distinct effects** — variety for different design contexts
- **Smooth transitions** — all effects use CSS `transition` for interpolation
- **Accessible** — cards are focusable, `:focus-visible` styles included
- **Reduced motion** — all transitions disabled when `prefers-reduced-motion` is active
- **Production-ready** — suitable for dashboards, portfolios, and product grids
