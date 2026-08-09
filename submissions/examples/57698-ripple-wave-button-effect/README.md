# Ripple Wave Button Effect

## Overview

The **Ripple Wave Button Effect** is an animation-first micro-interaction designed for dashboard buttons, payment actions, toggle grids, and interactive user interfaces. It creates an expanding circular wave that scales smoothly across the button surface upon hover or focus states.

This effect is built using **pure HTML and CSS** with Zero JavaScript. It relies on GPU-accelerated attributes to guarantee sub-pixel anti-aliasing and a high-performance rendering cycle.

---

## Features

- **Performance Optimized**: The ripple animation operates solely on CSS `transform` and `opacity` properties, allowing the browser to offload computations to the GPU via composite layers. This avoids expensive layout reflows and repaints.
- **LEGIBILITY FIRST**: The button text and icons reside inside isolated wrappers with high `z-index` parameters. This ensures that the typography remains readable while the ripple expands underneath.
- **Multiple Ripple Types**: Supports center scale expansion (`.ripple-center`), corner-origin sweeps (`.ripple-top-left`), and dual ring echo waves (`.ripple-ring`).
- **Flexible Styling Themes**: Comes preconfigured with Primary, Outlined, Glassmorphic, Gradient, and Neon themes.
- **Accessibility Friendly**:
  - Triggers the visual ripple scale transition on focus states (`:focus-within` and `:focus-visible`) to provide the exact same premium visual feedback for keyboard/screen-reader users.
  - Detects the `prefers-reduced-motion: reduce` media query, disabling the scale transition and replacing it with an instant background color opacity toggle to prevent motion sickness.

---

## How to Use

1. Link or copy the `style.css` stylesheet in your project.
2. Structure your HTML buttons using the following template:

```html
<!-- Primary Button with Blue Theme and Center Ripple -->
<button class="ripple-btn btn-primary theme-blue" aria-label="Confirm Action">
  <span class="btn-label">Confirm Action</span>
  <span class="btn-icon" aria-hidden="true">&#10003;</span>
  <span class="ripple-layer ripple-center"></span>
</button>
```

---

## CSS Modifiers

### 1. Button Themes (Classes applied to `.ripple-btn`)

- `.btn-primary` — Solid dark button with translucent colored ripple.
- `.btn-glass` — Glassmorphic translucent button with glowing gradient ripple.
- `.btn-outlined` — Bordered button where the ripple fills the solid background color on hover.
- `.btn-neon` — High contrast neon outline button; ripple inverts text color on hover.
- `.btn-gradient` — Button using multi-color linear gradients matched with custom radial waves.

### 2. Accent Color Themes (Classes applied to `.ripple-btn`)

- `.theme-blue` — Blue theme styling.
- `.theme-purple` — Purple theme styling.
- `.theme-pink` — Pink theme styling.
- `.theme-emerald` — Emerald theme styling.
- `.theme-amber` — Amber theme styling.

### 3. Ripple Origin / Types (Classes applied to `.ripple-layer`)

- `.ripple-center` — Scales from the absolute center of the button container.
- `.ripple-top-left` — Sweeps outward from the top-left corner.
- `.ripple-ring` — Triggers a double-ring expanding outline wave.

---

## Custom CSS Properties

You can customize the button sizes, border radiuses, speed, and coloring by modifying these variables defined on `:root`:

| Property              | Default Value                      | Description                                  |
| --------------------- | ---------------------------------- | -------------------------------------------- |
| `--font-body`         | `'Plus Jakarta Sans', sans-serif`  | Primary font family for button labels.       |
| `--transition-speed`  | `0.5s`                             | Duration of the ripple expansion transition. |
| `--transition-timing` | `cubic-bezier(0.25, 0.8, 0.25, 1)` | Easing curve for the expand sweep.           |
| `--color-blue`        | `#3b82f6`                          | Brand hex code for the blue theme.           |
| `--color-purple`      | `#8b5cf6`                          | Brand hex code for the purple theme.         |
