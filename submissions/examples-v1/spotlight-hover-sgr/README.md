# Spotlight/Flashlight Hover Effect

### 1. What does this do?
This component creates a dark room overlay on elements that reveals the content underneath within a circular spotlight area tracking the user's cursor.

### 2. How is it used?
Apply the `.spotlight-container` class to any card or container and add a `.spotlight-overlay` element inside:

```html
<div class="spotlight-container">
  <div class="spotlight-overlay"></div>
  <!-- Card Content -->
  <h3>Hover Me</h3>
  <p>Some content here...</p>
</div>
```

**Variants:**
- **Themes**:
  - `.spotlight-soft`: Larger, more diffuse light radius.
  - `.spotlight-color`: Tinted spotlight with brand indigo hues.
  - `.spotlight-text-card`: Specifically styled to hide/reveal secret text with high contrast colors.
- **Grids/Galleries**:
  - Applying `.spotlight-container` on child grid cells (e.g. image items) creates localized spotlight reveals.

**Required Coordinate JavaScript (Vanilla):**
Track mouse coordinates relative to each container and update custom properties:

```javascript
document.querySelectorAll('.spotlight-container').forEach(container => {
  container.addEventListener('mousemove', e => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    container.style.setProperty('--x', `${x}px`);
    container.style.setProperty('--y', `${y}px`);
  });
});
```

### 3. Why is it useful?
It provides an extremely immersive and premium flashlight effect (used on popular platforms like Vercel and Linear) with minimal footprint. By leveraging CSS custom properties (`--x`, `--y`) and hardware-accelerated `radial-gradient` recalculations, it runs smoothly without layout thrashing. It also supports `@media (prefers-reduced-motion: reduce)` overrides by fallback-centering the glow and disabling coordinate tracking.
