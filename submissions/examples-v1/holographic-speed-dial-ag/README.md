# Holographic Speed Dial

### 1. What does this do?

This component provides a premium, responsive, and accessible floating action button menu that expands into a vertical stack of product shortcuts with a subtle holographic iridescence shimmer, smooth stagger transitions, and keyboard/screen-reader support.

### 2. How is it used?

Integrate the speed dial layout in your HTML and load the accompanying stylesheet:

```html
<div class="ease-hsd">
  <div class="ease-hsd-container">
    <!-- Main trigger button -->
    <button
      class="ease-hsd-trigger"
      aria-haspopup="true"
      aria-expanded="false"
      aria-label="Expand actions"
    >
      <span class="ease-hsd-trigger-icon">+</span>
    </button>
    <!-- Secondary action list -->
    <div class="ease-hsd-menu" role="menu">
      <button
        class="ease-hsd-action"
        role="menuitem"
        style="--hsd-delay: 1;"
        aria-label="Wishlist"
      >
        <span class="ease-hsd-tooltip">Wishlist</span>
        <!-- Icon -->
      </button>
      <button
        class="ease-hsd-action"
        role="menuitem"
        style="--hsd-delay: 2;"
        aria-label="Compare"
      >
        <span class="ease-hsd-tooltip">Compare</span>
        <!-- Icon -->
      </button>
    </div>
  </div>
</div>
```

### 3. Why is it useful?

It aligns with EaseMotion CSS's philosophy of high-performance, animation-first, utility-based stylesheets. By using native CSS transitions (like `:focus-within` and `:hover` triggers), GPU-friendly animations, and staggered delays calculated directly in CSS variables, it achieves premium, interactive motion design with zero JavaScript dependencies.

---

## Technical Overview

### Features

- **Sophisticated Holographic Treatment:** Iridescent linear gradient highlights sweeping across glassmorphic layers with mixed-blend overlays.
- **Micro-Animations & Delays:** Springy entry animations (`cubic-bezier(0.34, 1.56, 0.64, 1)`) with cascading staggered delays.
- **Double-Cascade Timing:** Delays are calculated dynamically so they stagger upward when expanding, and downward (in reverse order) when collapsing.
- **Accessible State Management:** Pure CSS `:focus-within` pattern guarantees functional, interactive, and screen-reader compliant state management for keyboard and mobile users.
- **Built-in Accessibility & Reduced Motion:** Full `prefers-reduced-motion` rules disable flashing shimmers and complex translations to ensure comfortable navigation.
- **Native Theme Support:** Adapts dynamically to light/dark themes via CSS custom variables.

### Folder Structure

```
submissions/examples/holographic-speed-dial-ag/
├── demo.html    # Self-contained layout showcase with SVG icons and a theme toggle
├── style.css    # Scoped variables, glassmorphic layout, stagger delay and shimmer code
└── README.md    # Documentation and integration instructions
```

### Customization Guidance

To change the timing, color accents, or dimensions, customize the local scope variables in `style.css`:

- `--hsd-bg`: Background color of the buttons (glass translucency).
- `--hsd-border`: Border color matching the mode's contrast.
- `--hsd-shadow-hover`: Glowing shadows using glowing shadow colors.
- `--hsd-delay`: The CSS variable inline style on action buttons (`style="--hsd-delay: X;"`) dictates its order index in the staggered animation.
