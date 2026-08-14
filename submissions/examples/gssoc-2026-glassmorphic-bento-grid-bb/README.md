# Glassmorphic Interactive Bento Grid Showcase

A modern Apple/SaaS style Bento Grid layout component built using CSS Grid, frosted glassmorphism backdrop filters, and responsive tile span scaling.

## 1. What does this do?
This component provides a high-density, visually captivating dashboard grid (Bento style) with non-uniform card sizes, subtle glow hover effects, and CSS flex sparkline indicators.

## 2. How is it used?
Apply `.bento-grid` layout to a container element and define `.bento-card` tiles using grid spans like `.bento-hero` or `.bento-wide`:

```html
<div class="bento-grid">
  <div class="bento-card bento-hero">...</div>
  <div class="bento-card">...</div>
  <div class="bento-card bento-wide">...</div>
</div>
```

## 3. Why is it useful?
- **Modern Grid Layout**: Native CSS Grid columns automatically collapse down to single column on mobile devices.
- **Glassmorphism Aesthetics**: Utilizes high-performance CSS `backdrop-filter: blur()` and layered border lighting.
- **Production Ready**: Ideal for SaaS landing page feature grids, analytics dashboards, and portfolio highlights.
