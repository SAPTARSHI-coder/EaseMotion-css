# CSS Blur-Entrance Drawer for Gaming Hub Layouts

Closes #56446

### What does this do?
A navigation drawer for gaming hub layouts that enters with a blur-to-sharp animation — starting blurred, scaled down, and transparent, then transitioning to a crisp frosted-glass panel with `backdrop-filter` as it opens.

### How is it used?
```html
<button class="drawer-toggle" id="drawerToggle">☰ Menu</button>

<aside class="gaming-drawer" id="gamingDrawer">
  <div class="gaming-drawer-header">NEXUS<span>PLAY</span></div>
  <ul class="gaming-drawer-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">Games</a></li>
  </ul>
</aside>

<div class="gaming-drawer-overlay" id="gamingOverlay"></div>
```
A small script toggles the `open` class on `.gaming-drawer` and `.gaming-drawer-overlay`; all motion is handled by CSS transitions.

### Why is it useful?
It's a distinctive, modern entrance treatment (blur + scale + fade) built purely with CSS `filter`, `backdrop-filter`, `transform`, and `opacity` transitions — no animation logic in JS — fitting EaseMotion's animation-first philosophy. It's responsive down to mobile widths, dismissible via overlay click, and respects `prefers-reduced-motion`.

### Notes
- The minimal JS only toggles CSS classes; no JS animation logic.
- Accent color (`#a855f7`) is a demo placeholder; can be swapped for CSS custom properties during integration.
