# CSS Zoom-In Drawer for Gaming Hub Layouts

Closes #56443

### What does this do?
A navigation drawer for gaming hub layouts that zooms in from a scaled-down, transparent state to full size with a springy overshoot, while its nav links pop in with a staggered scale/fade.

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
It gives gaming hub navigation a punchy, game-like feel using a spring-style `cubic-bezier` scale/opacity transition plus staggered link entrances — pure CSS, no animation logic in JS — in line with EaseMotion's animation-first philosophy. It's responsive down to mobile widths, dismissible via overlay click, and respects `prefers-reduced-motion`.

### Notes
- The minimal JS only toggles CSS classes; no JS animation logic.
- Accent color (`#a855f7`) is a demo placeholder; can be swapped for CSS custom properties during integration.
