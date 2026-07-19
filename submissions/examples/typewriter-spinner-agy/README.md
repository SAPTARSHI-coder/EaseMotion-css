# Neumorphic Typewriter Spinner Component

A loading status spinner styled like retro typewriter keys, featuring physics-based keypress wave transitions inside a soft neumorphic workspace deck.

---

## 💡 Quick Overview

### 1. What does this do?

This component renders a loading spinner array containing typewriter-like letter blocks spelling "L-O-A-D-I-N-G-..." that press down sequentially in a wave pattern using pure CSS transitions.

### 2. How is it used?

Incorporate the state-controlling checkbox and loader layout inside your dashboard:

```html
<!-- 1. Pure CSS State Checkbox -->
<input
  type="checkbox"
  id="loader-active-toggle"
  class="spinner-state-checkbox"
  checked
/>

<!-- 2. Typewriter Keys Loader -->
<div
  class="typewriter-loader"
  role="status"
  aria-live="polite"
  aria-label="Loading contents"
>
  <div class="type-key">L</div>
  <div class="type-key">O</div>
  <div class="type-key">A</div>
  <div class="type-key">D</div>
  <div class="type-key">I</div>
  <div class="type-key">N</div>
  <div class="type-key">G</div>
</div>

<!-- 3. Toggle Control Switches -->
<div class="typist-controls">
  <label for="loader-active-toggle" class="typist-btn">Start Typing</label>
</div>
```

### 3. Why is it useful?

Loading spinners are primary transition visual elements inside dashboards and portfolios. This component implements soft neumorphic extrusion borders that shift to inset bevel shadows sequentially, imitating typing actions without layout reflows or scripts.

---

## 🎨 Theme & Customization Guide

Override these variables in your root element to adjust styling colors and transition delays:

```css
:root {
  /* Neumorphic soft colors */
  --neu-bg: #e0e8f6; /* Base dashboard background */
  --neu-surface: #e0e8f6; /* Button and key faces color */
  --neu-light: #ffffff; /* Soft light reflection highlight */
  --neu-shadow: #b8c4d9; /* Soft dark bevel drop shadow */
  --neu-accent: #3b82f6; /* Glowing selection key label color */

  /* Timing Configuration */
  --ease-elastic-duration: 1.5s; /* Speed of the complete wave cycle loop */
}
```

### Custom Staggered Intervals

Staggered delay intervals can be customized in the children lists to speed up or slow down the typewriter wave action:

```css
.spinner-state-checkbox:checked ~ .typewriter-loader .type-key:nth-child(1) {
  animation-delay: 0s;
}
.spinner-state-checkbox:checked ~ .typewriter-loader .type-key:nth-child(2) {
  animation-delay: 0.12s;
}
.spinner-state-checkbox:checked ~ .typewriter-loader .type-key:nth-child(3) {
  animation-delay: 0.24s;
}
.spinner-state-checkbox:checked ~ .typewriter-loader .type-key:nth-child(4) {
  animation-delay: 0.36s;
}
```

### Dark Mode Integration

Neumorphism relies heavily on precise shadow contrast. The component automatically adjusts for dark mode themes using:

1. Media queries searching for user-selected settings (`@media (prefers-color-scheme: dark)`).
2. Data attributes configuration tags (`[data-theme="dark"]`).

---

## 📖 CSS Class Reference

| Selector Class       | Visual / Layout Purpose                                            |
| :------------------- | :----------------------------------------------------------------- |
| `.typist-wrap`       | Main dashboard outer deck containing soft shadows.                 |
| `.typewriter-loader` | Inset neumorphic container representing the keyboard deck.         |
| `.type-key`          | Circular extruded keys that react to sequential wave animations.   |
| `.typist-btn`        | Interactive button switches styling active/inactive inset shadows. |

---

## ♿ Accessibility Specifications

1. **Focus Controls**: Highlight focus rings style themselves in dashed blue outlines for keyboard accessibility.
2. **Keyboard Traversal**: Start/Stop labels are mapped to checkbox triggers via Space and Enter click listeners.
3. **Motion settings**: Completely disables keypress transitions when `@media (prefers-reduced-motion: reduce)` matches, keeping readability stable.
