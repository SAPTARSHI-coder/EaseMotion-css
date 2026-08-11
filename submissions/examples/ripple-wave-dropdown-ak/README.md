# ripple-wave-dropdown

### What does this do?
A glassmorphism dropdown menu whose trigger button emits a ripple-wave effect from the click point, with the panel sliding/fading open below it.

### How is it used?
```html
<div class="dropdown-ripple">
  <button class="dropdown-ripple__trigger">Menu ▾</button>
  <div class="dropdown-ripple__panel">
    <a href="#" class="dropdown-ripple__item">Dashboard</a>
    <a href="#" class="dropdown-ripple__item">Settings</a>
  </div>
</div>
```
Toggle the `is-open` class on `.dropdown-ripple` (via the included script or your own JS) to open/close the panel. The ripple element itself is CSS-animated; JS is only used to position it at the click coordinates and toggle the open state.

### Why is it useful?
Ripple feedback gives dropdown triggers a satisfying tactile response (Material Design-inspired), and pairing it with a frosted glass panel keeps it consistent with glassmorphism UI trends. Core animation (ripple expand/fade, panel slide/fade) is pure CSS keyframes/transitions. Fully responsive (panel repositions on small screens) and disables the ripple animation under `prefers-reduced-motion` while keeping the panel transition lightweight.
