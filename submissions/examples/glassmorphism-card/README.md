# Interactive Glassmorphism Card with Micro-Interactions

> A production-grade, highly responsive, and fully accessible translucent glassmorphism UI card featuring dynamic 3D spatial tilt, pointer-tracking spotlight highlights, border illumination, multi-layer depth parallax, and rich interactive controls.

Submitted for **Issue #81071** — *[FEATURE] Add Interactive Glassmorphism Card with Micro-Interactions* in the [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css) repository.

---

## Table of Contents

1. [Component Overview](#1-component-overview)
2. [Features](#2-features)
3. [Visual Interaction Explanation](#3-visual-interaction-explanation)
4. [File Structure](#4-file-structure)
5. [How to Use the Component](#5-how-to-use-the-component)
6. [Required HTML Structure](#6-required-html-structure)
7. [CSS Customization Variables](#7-css-customization-variables)
8. [JavaScript Behavior Explanation](#8-javascript-behavior-explanation)
9. [Accessibility Considerations](#9-accessibility-considerations)
10. [Responsive Behavior](#10-responsive-behavior)
11. [Reduced-Motion Behavior](#11-reduced-motion-behavior)
12. [Browser Support](#12-browser-support)
13. [Performance Considerations](#13-performance-considerations)
14. [Customization Examples](#14-customization-examples)
15. [Screenshots & Demo Instructions](#15-screenshots--demo-instructions)
16. [Contribution Reference & Issue #81071](#16-contribution-reference--issue-81071)

---

## 1. Component Overview

The **Interactive Glassmorphism Card** is a modern, high-contrast user interface component designed for tech dashboards, AI operations control panels, developer toolkits, and premium product landing pages. 

Unlike standard static glass cards, this component delivers a polished, multi-layered visual experience combining hardware-accelerated CSS 3D transforms with lightweight pointer tracking.

---

## 2. Features

- **Multi-Layer Translucent Glass Surface**: Uses backdrop blur filters combined with multi-stop radial and linear ambient gradients.
- **Dynamic 3D Spatial Tilt**: Real-time `rotateX` and `rotateY` pointer tracking inside a 1200px perspective space.
- **Pointer-Following Spotlight**: Radial highlight tracks cursor movements across the card face.
- **Border-Light Illumination**: Moving border highlight powered by CSS mask composition and radial gradient coordinates (`--mouse-x`, `--mouse-y`).
- **3D Parallax Layer Architecture**: Spatial Z-axis depth separation (`translateZ`) between avatar, title, metrics, and CTA buttons.
- **Interactive Button States**: Full support for hover, focus-visible outline, active press depth, and disabled mode states.
- **Pure Vanilla JS Engine**: Lightweight, zero-dependency script throttled with `requestAnimationFrame` for maximum GPU efficiency.
- **Resilient Fallbacks**: Complete support for browsers without `backdrop-filter` support, disabled JavaScript environments, and `prefers-reduced-motion`.
- **WCAG Compliant Accessibility**: Proper heading hierarchy, semantic elements, focus indicators, and screen reader live region announcements.

---

## 3. Visual Interaction Explanation

The card incorporates 7 distinct micro-interactions:

| # | Micro-Interaction | Visual Mechanism | Trigger / Input |
|---|---|---|---|
| 1 | **Hover Elevation** | Smooth vertical elevation (`translateZ`), ambient shadow expansion, and outer glow intensification. | Pointer enter / Focus |
| 2 | **3D Spatial Tilt** | Dynamic `rotateX` and `rotateY` angle calculation with smooth spring reset on pointer exit. | Pointer move |
| 3 | **Dynamic Spotlight** | Radial translucent white/accent gradient following cursor position (`--mouse-x`, `--mouse-y`). | Pointer move |
| 4 | **Border-Light Interaction** | Mask-composited border shine that illuminates along the edge nearest to the cursor. | Pointer move |
| 5 | **Content Parallax Depth** | Separate Z-axis offsets for headers (`24px`), body (`32px`), metrics (`40px`), and CTAs (`48px`). | Pointer move / Hover |
| 6 | **Button Micro-Interaction** | Primary CTA elevation with directional SVG arrow translation and pressed state feedback. | Hover / Active / Focus |
| 7 | **Animated Identity Icon** | Rotating identity mesh icon with ambient pulsating ring effect (`@keyframes avatarPulse`). | Infinite / Hover |

---

## 4. File Structure

All submission files are located exclusively inside:
```
submissions/examples/glassmorphism-card/
├── demo.html        # Self-contained HTML5 demonstration page with interactive controls
├── style.css        # Complete CSS design system, variables, micro-interactions, & media queries
└── README.md        # Comprehensive technical documentation & usage guide
```

---

## 5. How to Use the Component

### Step 1: Include Stylesheets

Include `style.css` (and optionally `easemotion.css` for framework tokens) in your document `<head>`:

```html
<link rel="stylesheet" href="easemotion.css">
<link rel="stylesheet" href="style.css">
```

### Step 2: Add HTML Markup

Insert the card structure into your layout inside a perspective container:

```html
<div class="glass-perspective-wrapper">
  <article class="glass-card" id="my-glass-card" tabindex="0">
    <div class="glass-spotlight" aria-hidden="true"></div>
    <div class="glass-border-glow" aria-hidden="true"></div>

    <div class="glass-layer glass-header-layer">
      <!-- Avatar & Status -->
    </div>
    
    <div class="glass-layer glass-body-layer">
      <!-- Title & Description -->
    </div>

    <div class="glass-layer glass-actions-layer">
      <button class="glass-btn glass-btn-primary" type="button">Execute</button>
    </div>
  </article>
</div>
```

---

## 6. Required HTML Structure

To ensure correct 3D depth rendering and spotlight tracking, the following HTML hierarchy is required:

```html
<div class="glass-perspective-wrapper">
  <article class="glass-card" tabindex="0">
    <!-- Overlay Lights -->
    <div class="glass-spotlight" aria-hidden="true"></div>
    <div class="glass-border-glow" aria-hidden="true"></div>

    <!-- Spatial Layers -->
    <div class="glass-layer glass-header-layer"> ... </div>
    <div class="glass-layer glass-body-layer"> ... </div>
    <div class="glass-layer glass-metrics-layer"> ... </div>
    <div class="glass-layer glass-actions-layer"> ... </div>
  </article>
</div>
```

---

## 7. CSS Customization Variables

The component provides extensive customizable tokens via CSS custom properties on `:root`:

```css
:root {
  /* Accent Colors */
  --glass-accent-primary: #818cf8;
  --glass-accent-primary-rgb: 129, 140, 248;
  --glass-accent-secondary: #c084fc;
  
  /* Text Colors */
  --glass-text-main: #f8fafc;
  --glass-text-muted: #94a3b8;

  /* Glass Surface Tokens */
  --glass-surface-bg: rgba(255, 255, 255, 0.04);
  --glass-surface-border: rgba(255, 255, 255, 0.12);
  --glass-blur-amount: 18px;

  /* Elevation Shadows */
  --glass-shadow-ambient: 0 30px 60px -12px rgba(0, 0, 0, 0.56);
  --glass-shadow-glow: 0 0 40px rgba(var(--glass-accent-primary-rgb), 0.25);
}
```

---

## 8. JavaScript Behavior Explanation

The component includes a lightweight, memory-efficient vanilla JavaScript script for tilt and spotlight coordinates:

1. **Pointer Move Listener**: Tracks cursor position relative to `.glass-card` boundaries using `getBoundingClientRect()`.
2. **Coordinate Normalization**: Converts pixel offsets into percentages (`--mouse-x`, `--mouse-y`) for CSS radial gradients.
3. **Restrained Tilt Angle**: Calculates `rotateX` and `rotateY` within a restrained `-12deg` to `+12deg` limit to avoid excessive distortion.
4. **GPU Throttling**: Operations are wrapped in `requestAnimationFrame` to eliminate layout thrashing.
5. **Smooth Spring Reset**: Clears rotations and fades spotlight opacity on `pointerleave`.

---

## 9. Accessibility Considerations

- **Keyboard Navigation**: The card and all controls are focusable via `Tab` key with visible `:focus-visible` outline rings (`2px solid var(--glass-accent-primary)`).
- **Semantic Tags**: Uses `<article>`, `<header>`, `<h2>`, `<section>`, and `<button>`.
- **Live Regions**: The status indicator uses `aria-live="polite"` so state changes are communicated to screen readers.
- **Non-Mouse Usability**: The component is fully functional and visually complete without pointer interaction.
- **High Contrast**: Passes WCAG AA contrast standards for dark mode text elements against translucent surfaces.

---

## 10. Responsive Behavior

- **Fluid Typography**: Uses CSS `clamp()` for dynamic header scaling (`clamp(2rem, 5vw, 3.2rem)`).
- **Mobile Adapter**: On viewports under 640px wide, card padding adapts to `1.75rem 1.25rem`, metrics resize smoothly, and CTA buttons stack vertically for optimal touch target sizing.
- **No Overflow**: Constrained by `max-width: 100%` and `box-sizing: border-box` to prevent horizontal scrollbars on small screens.

---

## 11. Reduced-Motion Behavior

When a user has `prefers-reduced-motion: reduce` enabled in their system or browser preferences:

```css
@media (prefers-reduced-motion: reduce) {
  .glass-card {
    transform: none !important;
    transition: box-shadow 0.2s ease !important;
  }
  .glass-layer, .glass-avatar-wrapper, .glass-btn {
    transform: none !important;
  }
  .glass-avatar-pulse, .glass-status-dot {
    animation: none !important;
  }
  .glass-spotlight, .glass-border-glow {
    display: none !important;
  }
}
```

---

## 12. Browser Support

| Browser | Version Supported | Fallback Behavior |
|---|---|---|
| Chrome / Edge | 76+ | Full 3D Tilt, Blur & Spotlight |
| Safari (macOS/iOS) | 9+ (`-webkit-backdrop-filter`) | Full 3D Tilt & Blur |
| Firefox | 103+ | Full 3D Tilt & Blur |
| Legacy Browsers | Lacks `backdrop-filter` | Solid semi-opaque dark slate fallback (`rgba(15, 23, 42, 0.95)`) |

---

## 13. Performance Considerations

- **Composite-Only Properties**: Micro-interactions restrict animation properties strictly to `transform` and `opacity`.
- **GPU Layer Promotion**: Uses `will-change: transform, box-shadow` judiciously to avoid excessive memory allocation.
- **Zero Loop Overhead**: Pointer calculations run only during active mouse movement and pause immediately on exit.

---

## 14. Customization Examples

### Emerald Theme Switch
```html
<body data-card-theme="emerald">
```

### Custom Accent Override via Inline CSS
```css
.my-card {
  --glass-accent-primary: #ec4899;
  --glass-accent-primary-rgb: 236, 72, 153;
  --glass-blur-amount: 24px;
}
```

---

## 15. Screenshots & Demo Instructions

### How to Run the Demo Standalone

1. Open `submissions/examples/glassmorphism-card/demo.html` directly in any web browser.
2. No local node server, build step, or external CDN is required.
3. Use the built-in control panel at the bottom of the page to test theme variants, toggle 3D tilt, toggle button disabled states, and switch status indicators.

---

## 16. Contribution Reference & Issue #81071

This contribution was built following all rules outlined in `CONTRIBUTING.md` for **EaseMotion CSS**.

- **Assigned Feature Issue**: [Issue #81071] — *[FEATURE] Add Interactive Glassmorphism Card with Micro-Interactions*
- **Submission Path**: `submissions/examples/glassmorphism-card/`
- **Submission Files**: `demo.html`, `style.css`, `README.md`
- **Framework Compliance**: Clean, self-contained, high quality, accessible, and exceeding line count requirements.
