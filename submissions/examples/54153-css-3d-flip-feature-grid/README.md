# CSS 3D-Flip Feature Grid for Responsive Dashboard Layouts

## Overview

The **CSS 3D-Flip Feature Grid** is a modern, pure HTML5/CSS3 component designed for dashboard interfaces. It leverages the browser's 3D rendering pipeline to construct interactive, flipping panels. These panels support horizontal (Y-axis), vertical (X-axis), and diagonal rotations on hover or focus state.

This showcase is engineered to integrate seamlessly into dashboard designs. It is designed to act as a responsive container for features, micro-metrics, configurations, and quick actions, while maintaining a lightweight footprint with **zero external JavaScript**.

---

## Features

- **3D Rotations**: Supports multi-axis flips (`.flip-horizontal`, `.flip-vertical`, and `.flip-diagonal`) utilizing CSS perspective and 3D transforms.
- **Responsive Layout**: Fluidly scales across wide desktop viewports, normal desktop screens, tablets, and mobile devices using CSS Grid and media queries.
- **Staggered Entrance**: Grid panels slide and fade in on page load with staggered CSS transition delays for a premium experience.
- **Fully Accessible**:
  - **Keyboard Support**: Uses `:focus-within` to automatically flip the card and allow tabbing into buttons or links located on the back face of the card.
  - **Reduced Motion Support**: Features a comprehensive `prefers-reduced-motion: reduce` media query that disables all 3D transforms and transitions, switching to an instant opacity toggle fallback.
  - **Semantic HTML5**: Written using `<article>`, `<section>`, `<aside>`, and descriptive `aria-label` tags for enhanced screen reader output.
- **Rich Aesthetics**: Tailored with custom color gradients, sub-pixel text rendering optimizations to prevent aliasing, and backdrop filters for glassmorphism vibes.

---

## How to Use

1. Copy the `style.css` stylesheet into your project or reference it in your HTML.
2. Structure your HTML document using the following template:

```html
<!-- Outer Grid Container -->
<section class="feature-grid" aria-label="Feature Grid">
  <!-- A 3D-Flip Card -->
  <article
    class="feature-card theme-blue flip-horizontal"
    tabindex="0"
    aria-label="Performance, flip card for details"
  >
    <div class="card-inner">
      <!-- Front Face (Brief specs, metrics, and icons) -->
      <div class="card-front">
        <div class="card-meta">
          <div class="card-icon" aria-hidden="true">&#9883;</div>
          <span class="card-badge">Active</span>
        </div>
        <div class="card-content">
          <h3>Monitor</h3>
          <p>Short feature description goes here.</p>
        </div>
        <div class="card-stats">
          <div class="stat-header">
            <span class="stat-label">Value</span>
            <span class="stat-value">94%</span>
          </div>
          <div class="progress-bar" aria-hidden="true">
            <div class="progress-fill" style="width: 94%;"></div>
          </div>
        </div>
      </div>

      <!-- Back Face (Detailed settings and buttons) -->
      <div class="card-back">
        <div class="back-header">
          <span aria-hidden="true">&#9883;</span>
          <h4>Specs Details</h4>
        </div>
        <ul class="back-details-list">
          <li class="back-details-item">
            <span class="detail-name"
              ><span class="detail-dot"></span>Spec Label</span
            >
            <span class="detail-val">Spec Value</span>
          </li>
        </ul>
        <a href="#" class="back-action-btn">Action Button</a>
      </div>
    </div>
  </article>
</section>
```

---

## CSS Modifiers

### 1. Flip Rotations (Classes applied to `.feature-card`)

- `.flip-horizontal` — Rotates 180 degrees horizontally around the Y-axis.
- `.flip-vertical` — Rotates 180 degrees vertically around the X-axis.
- `.flip-diagonal` — Rotates 180 degrees diagonally around a 3D vector.

### 2. Accent Color Themes (Classes applied to `.feature-card`)

- `.theme-blue` — Blue theme branding.
- `.theme-purple` — Purple theme branding.
- `.theme-pink` — Pink theme branding.
- `.theme-emerald` — Emerald theme branding.
- `.theme-orange` — Orange theme branding.
- `.theme-cyan` — Cyan theme branding.

### 3. Grid Layout Modifiers (Classes applied to `.feature-card`)

- `.grid-span-2` — Causes the card to span two columns in the grid layout on larger screens (min-width: 1200px) to introduce visual hierarchy.

---

## Custom CSS Properties

You can customize the grid, card sizes, transitions, and coloring by overriding these variables defined on `:root`:

| Property            | Default Value                       | Description                                               |
| ------------------- | ----------------------------------- | --------------------------------------------------------- |
| `--bg-dashboard`    | `#0b0f19`                           | Main background color of the dashboard workspace.         |
| `--bg-sidebar`      | `#111827`                           | Background color of the navigation sidebar.               |
| `--bg-card-front`   | `rgba(17, 24, 39, 0.7)`             | Front face translucent card background.                   |
| `--bg-card-back`    | `rgba(17, 24, 39, 0.95)`            | Back face dense card background.                          |
| `--perspective-val` | `1200px`                            | Strength of the 3D perspective depth effect.              |
| `--flip-duration`   | `0.7s`                              | Time taken for the card to execute a 180-degree rotation. |
| `--flip-easing`     | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Bezier curve governing rotation speed.                    |
| `--hover-lift`      | `-8px`                              | Vertical shift on hover.                                  |

---

## Performance Optimizations

1. **Composite Layering**: Rotations and translations operate solely on CSS properties `transform` and `opacity`. This ensures that animations run on the GPU via composite layers instead of triggering expensive layout reflows.
2. **Backface Hiding**: `backface-visibility: hidden` and `will-change: transform` are declared to alert the browser's layout engine to optimize textures for rapid 3D flipping transitions.
3. **Sub-pixel Fixes**: We apply `translateZ(1px)` and `-webkit-font-smoothing: antialiased` to nested card contents. This prevents the jittery text resizing or blurring commonly encountered in webkit browsers during active 3D transforms.
