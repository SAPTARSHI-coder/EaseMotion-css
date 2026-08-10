# CSS Ripple-Wave Drawer for Gaming Hub Layouts

Closes #56451

### What does this do?
A slide-in navigation drawer for gaming hub layouts with a wave-shaped clip-path edge that animates in on open, plus a ripple effect on the toggle button when pressed.

### How is it used?
```html
<button class="drawer-toggle" id="drawerToggle">
  <span class="drawer-toggle-ripple"></span>
  ☰ Menu
</button>

<aside class="gaming-drawer" id="gamingDrawer">
  <div class="gaming-drawer-header">NEXUS<span>PLAY</span></div>
  <ul class="gaming-drawer-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">Games</a></li>
  </ul>
</aside>

<div class="gaming-drawer-overlay" id="gamingOverlay"></div>
```
A small script toggles the `open` class on `.gaming-drawer` and `.gaming-drawer-overlay`; all motion is pure CSS transitions/keyframes.

### Why is it useful?
It gives gaming hub navigation a distinctive "wave" identity via an animated `clip-path`, instead of a plain rectangular slide-in drawer, and the button ripple reinforces interactivity — both done with pure CSS transitions and keyframes, no animation JS. It's responsive down to mobile widths, closes via overlay click, and respects `prefers-reduced-motion`.

### Notes
- The minimal JS only toggles CSS classes; no JS animation logic.
- Accent color (`#a855f7`) is a demo placeholder; can be swapped for CSS custom properties during integration.
