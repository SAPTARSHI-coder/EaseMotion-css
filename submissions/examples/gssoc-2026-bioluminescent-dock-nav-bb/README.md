# Bioluminescent Floating Dock Navigation

A GPU-accelerated bioluminescent floating navigation dock with magnetic item magnification, glow pulse highlights, and accessible tooltips.

## 1. What does this do?
This component renders a sleek, floating navigation dock with cyan-emerald bioluminescent lighting effects, backdrop blur glassmorphism, spring physics on hover/focus, and active item glowing indicators.

## 2. How is it used?
Link `style.css` and use the `.biolum-dock` wrapper around navigation links:

```html
<link rel="stylesheet" href="style.css">

<nav class="biolum-dock" aria-label="Main Navigation">
  <a href="#home" class="dock-item active" aria-label="Home">
    <svg class="dock-icon">...</svg>
    <span class="dock-tooltip">Home</span>
  </a>
</nav>
```

## 3. Why is it useful?
It provides desktop and mobile Web3, gaming, and SaaS interfaces with a responsive, high-end floating navigation experience with complete keyboard navigation accessibility and zero JavaScript overhead.
