# 3D Tilt Markdown Preview Card (Space Theme)

A markdown document preview card themed around deep space logs, featuring a 3D perspective tilting effect matching mouse movement.

---

## 💡 Quick Overview

### 1. What does this do?

This component renders a structured markdown document card that tilts in 3D perspective when the mouse hovers over different sections using pure CSS hover zones.

### 2. How is it used?

Incorporate the grid hover zones and card layouts in your page markup:

```html
<!-- Outer wrapper setting perspective scope -->
<div class="tilt-perspective-wrap" id="tilt-wrapper">
  <!-- 3x3 Grid Hover Zones -->
  <div class="tilt-zone tilt-zone-1"></div>
  <div class="tilt-zone tilt-zone-2"></div>
  <!-- ... Zones 3 to 8 ... -->
  <div class="tilt-zone tilt-zone-9"></div>

  <!-- Inner Card -->
  <article class="tilt-card" id="tilt-card-body">
    <header class="md-header">
      <h1 class="md-title">Observatory Log</h1>
    </header>
    <section class="md-body">
      <!-- Markdown elements... -->
    </section>
  </article>
</div>
```

Then hook up the cursor spotlight coordinator in your script block to enable smooth tracking:

```javascript
const wrapper = document.getElementById("tilt-wrapper");
const card = document.getElementById("tilt-card-body");
wrapper.addEventListener("mousemove", (e) => {
  const rect = wrapper.getBoundingClientRect();
  const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
  const rotateX = -((e.clientY - rect.top) / rect.height - 0.5) * 20;
  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
});
```

### 3. Why is it useful?

Markdown document viewers are common interfaces inside dashboards. Adding a 3D tilt effect inspired by deep space panels adds visual depth and guides focus, operating without JS layout shifts or heavy physics scripts.

---

## 🎨 Theme & Customization Guide

Override these variables in your root element to adjust styling colors and glowing properties:

```css
:root {
  /* Deep Space palette colors */
  --space-bg: #04040d; /* Base background void color */
  --space-surface: rgba(
    13,
    13,
    33,
    0.6
  ); /* Translucent card surface background */
  --space-border: rgba(99, 102, 241, 0.2); /* Thin card boundary separators */

  /* Luminous Nebula Gradients */
  --space-purple: #c084fc; /* Stellar Purple highlight */
  --space-cyan: #38bdf8; /* Starlight Cyan highlight */
}
```

---

## ♿ Accessibility Specifications

1. **Semantic HTML**: Built using correct ARIA landmark roles: `<article>` for container wrapping, `<blockquote/>` for quotes, and `<time/>` tags for date stamps.
2. **Keyboard Traversal**: Elements inside the card are tab navigable and focus rings display a starlight blue aura.
3. **Motion settings**: Bypasses 3D tilt rotations completely when `@media (prefers-reduced-motion: reduce)` matches, keeping readability stable.
