# Morphing SVG Path Button

### 1. What does this do?
This component creates highly detailed, liquid-smooth icon transitions between common UI button states (Play/Pause, Hamburger/Close, Plus/Minus, Search/Close, and Like Hearts) driven completely by pure CSS custom properties and transitions.

### 2. How is it used?
Apply the `.morph-btn` class to a button and structure the SVG elements accordingly:

```html
<!-- Play to Pause Morph example -->
<button class="morph-btn morph-play-pause">
  <svg viewBox="0 0 24 24">
    <path class="path-left" d="M 6,5 L 12,8.5 L 12,15.5 L 6,19 Z"></path>
    <path class="path-right" d="M 12,8.5 L 18,12 L 18,12 L 12,15.5 Z"></path>
  </svg>
</button>
```

Toggle the active state using a simple JavaScript class toggle helper:

```javascript
document.querySelectorAll('.morph-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('is-active');
  });
});
```

**Variants:**
- **Morph Configurations**:
  - `.morph-play-pause`: Morphs play triangle into two pause bars.
  - `.morph-menu-close`: Morphs hamburger menu bars into a close cross.
  - `.morph-plus-minus`: Morphs plus cross symbol into a minus bar.
  - `.morph-search-close`: Morphs search magnifier into a close cross.
  - `.morph-heart`: Triggers an outline-to-fill spring scale pop.

**Custom Properties:**
- `--morph-duration`: Animation transition cycle timing (default: `0.4s`).
- `--morph-easing`: Custom easing function (default: `cubic-bezier(0.4, 0, 0.2, 1)`).
- `--icon-color`: Primary stroke/fill color of the inactive icon.
- `--icon-active-color`: Accent color of the morphed active state.

### 3. Why is it useful?
It provides state-of-the-art micro-interactions natively in CSS without relying on heavy external animation engines (like GSAP or Lottie). By combining modern CSS transforms, transitions, and the new SVG path `d` attribute interpolation, performance is offloaded entirely to the browser rendering layer. It also respects user preferences by checking `prefers-reduced-motion` media queries and instantly snapping icons to their active geometries.
