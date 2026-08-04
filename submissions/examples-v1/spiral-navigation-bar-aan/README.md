# Ease Spiral Navigation Bar

## What does this do?
A navigation bar where each link reveals a rotating conic-gradient "spiral" glow behind it on hover, focus, or when active, built with pure CSS and no JavaScript.

## How is it used?
```html
<nav class="ease-spiral-nav" aria-label="Primary">
  <a href="#" class="ease-spiral-nav-link ease-spiral-nav-link--active" aria-current="page">
    <span class="ease-spiral-nav-glow" aria-hidden="true"></span>
    <span class="ease-spiral-nav-label">Home</span>
  </a>
  <a href="#" class="ease-spiral-nav-link">
    <span class="ease-spiral-nav-glow" aria-hidden="true"></span>
    <span class="ease-spiral-nav-label">Accounts</span>
  </a>
</nav>
```
Add `ease-spiral-nav-link--active` and `aria-current="page"` to the current page's link. The `ease-spiral-nav-glow` span is decorative (`aria-hidden="true"`) and only starts rotating on hover, focus, or when its link is active — it stays paused and invisible otherwise, so it costs nothing on idle links.

## Why is it useful?
Navigation bars are one of the most commonly needed UI elements, and this variant gives contributors a polished, reusable spiral-glow interaction inspired by banking-app design patterns — subtle, premium-feeling motion without needing JavaScript. It's keyboard accessible (`:focus-visible` triggers the same glow as hover), responsive (stacks vertically on narrow viewports), and respects `prefers-reduced-motion` by disabling the rotation for users who need reduced motion.
