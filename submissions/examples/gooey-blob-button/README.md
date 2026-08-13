# CSS-Only Liquified "Gooey" Blob Button Component

An organic, fluid liquid button component powered by pure CSS animations and SVG matrix blending filters (`feGaussianBlur` + `feColorMatrix`).

## Overview

The `.ease-gooey-button` component creates a tactile liquid effect where small floating sub-bubbles detach, stretch, and merge smoothly with the main button body when hovered or activated.

- **Zero JavaScript**: Pure CSS transform transitions combined with inline SVG threshold matrix filtering.
- **High Performance**: Uses GPU-accelerated 2D/3D transformations (`scale`, `translate3d`).
- **Accessible & Progressive**: Includes graceful non-SVG `@supports` fallbacks and `@media (prefers-reduced-motion)` overrides.
- **Theme Variants**: Supports default primary, success (emerald slime), danger (lava red), warning (amber), and cyber neon styling.

---

## Quick Start HTML Markup

```html
<!-- Hidden Inline SVG Gooey Filter (Include once in your document) -->
<svg class="ease-gooey-filter-svg" aria-hidden="true">
  <defs>
    <filter id="ease-goo-filter">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
      <feColorMatrix
        in="blur"
        mode="matrix"
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
        result="goo"
      />
      <feComposite in="SourceGraphic" in2="goo" operator="atop" />
    </filter>
  </defs>
</svg>

<!-- Gooey Blob Button Component -->
<div class="ease-gooey-wrapper">
  <button class="ease-gooey-button">
    <span>Liquid Motion</span>
  </button>
  <span class="ease-gooey-blob ease-gooey-blob-1"></span>
  <span class="ease-gooey-blob ease-gooey-blob-2"></span>
  <span class="ease-gooey-blob ease-gooey-blob-3"></span>
  <span class="ease-gooey-blob ease-gooey-blob-4"></span>
</div>
```

---

## Variant Classes

- `.ease-gooey-button-success` — Emerald liquid slime variant
- `.ease-gooey-button-danger` — Fiery red lava variant
- `.ease-gooey-button-warning` — Amber honey liquid variant
- `.ease-gooey-button-neon` — Cyberpunk cyan glowing fluid variant

---

## Accessibility & Reduced Motion

For users with motion sensitivity, `@media (prefers-reduced-motion: reduce)` automatically disables the fluid blob detachment and scale transforms. For browsers without SVG filter blending, standard blurred glow fallbacks are applied seamlessly.
