# 3D Perspective Tilt Hover Variation

> A smooth, hardware-accelerated, pure CSS hover effect featuring 3D perspective rotation, layered depth parallax, and directional tilt hover zones.

---

## 1. What does this effect do?

The 3D Perspective Tilt effect applies spatial rotation (`rotateX()`, `rotateY()`, `translateZ()`) to interactive elements when hovered or focused, producing a tactile 3D depth tilt illusion that smoothly returns to default orientation when the pointer leaves.

---

## 2. Showcase Components & Variants

1. **Layered Parallax Showcase Cards (`.tilt-card`)**: Cards with child elements (`.layer-z1`, `.layer-z2`, `.layer-z3`) elevated at distinct spatial planes using `translateZ()` to create a genuine 3D parallax effect when tilted.
2. **Multi-Directional Interactive Tilt Matrix (`.matrix-card`)**: Uses a 3x3 grid of predefined CSS hover zones (`.tilt-zone`) with `.matrix-card:has()` selectors to trigger distinct `rotateX()` and `rotateY()` tilt angles and specular light reflections depending on which zone is hovered.

---

## 3. How is it used?

Wrap your target card or element in a container with CSS perspective, then apply the `tilt-card` class:

```html
<!-- Perspective Container -->
<div class="perspective-container">
  <article class="tilt-card theme-purple" tabindex="0" aria-label="Interactive 3D card">
    <div class="card-glow"></div>
    <div class="card-content">
      <span class="card-badge layer-z1">Badge</span>
      <h3 class="card-title layer-z2">Card Title</h3>
      <p class="card-desc layer-z1">Description text with depth offset.</p>
      <button class="card-btn" type="button">Explore</button>
    </div>
  </article>
</div>
```

---

## 4. Performance & Technical Details

- **Pure HTML & Vanilla CSS**: Operates 100% without JavaScript, external libraries, fonts, or CDNs.
- **Optimized Property Transitions**: The core 3D motion relies primarily on GPU-friendly transform properties and opacity-based visual effects, while additional shadow, border, and background transitions enhance the interaction.
- **Layered 3D Depth**: Child elements with `.layer-z1`, `.layer-z2`, and `.layer-z3` elevate at distinct spatial planes using `translateZ()`.
- **Theme Accents**: Supports theme-specific accent variables (`--card-accent`, `--card-accent-dark`, `--glow-color`) for `.theme-purple`, `.theme-cyan`, and `.theme-amber`.

---

## 5. Accessibility, Touch & Reduced Motion

- **Device Capabilities**: The directional matrix hover interaction activates on devices that support hover (`@media (hover: hover)`). Touch devices retain a stable static presentation.
- **Keyboard Navigation**: Interactive cards include `tabindex="0"`, theme-matched `:focus-visible` focus rings, and dedicated button focus states (`.card-btn:focus-visible`) so keyboard users can access the interaction.
- **Reduced Motion Safety**: Includes `@media (prefers-reduced-motion: reduce)` rules that disable 3D rotation, transform transitions, and specular sheen animations for users with motion sensitivity while maintaining clean static visibility.
