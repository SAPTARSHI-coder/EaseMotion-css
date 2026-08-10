# Pure CSS Gradient Text Shimmer (`ease-text-shimmer`)

An ultra-performant, 100% CSS-only animated text effect featuring a continuous gradient light sweep. Ideal for premium landing pages, call-to-actions, and main headings inspired by modern SaaS interfaces such as Stripe, Vercel, and Linear.

---

## Feature Overview

The Gradient Text Shimmer (`ease-text-shimmer`) component brings responsive text layouts to life with hardware-accelerated linear gradients. By clipping a background gradient to text bounds and shifting it infinitely, it mimics physical light reflections sweeping across polished typographic glyphs. The implementation requires zero JavaScript dependencies and scales across standard viewports using fluid typography rules.

---

## Component Features

- **Pure CSS Execution**: No JavaScript dependencies or inline script blocks.
- **Hardware-Accelerated**: Employs highly optimized linear gradient repositioning with `will-change: background-position` declarations to prevent rendering repaints.
- **CSS Variable Customization**: Exposes modular element-level variables for speed, highlight positions, and custom color profiles.
- **Fluid Typography**: Sized using responsive `clamp()` calculations to prevent structural overlapping or line breaks on mobile viewports.
- **Modern Contrast Theme**: Tuned contrast ratios matching dark landing page sections.

---

## Folder Structure

```text
submissions/examples/ease-text-shimmer/
├── demo.html        # Responsive dark-theme hero & usage layout
├── style.css        # Core typography, gradient clip, and keyframe definitions
└── README.md        # Comprehensive integration guidelines & highlights
```

---

## Usage Instructions

To implement the gradient text shimmer in your interface:

1. Copy the markup in the **HTML Example** block.
2. Link the core `style.css` stylesheet or adapt its parameters into your system rules.
3. Configure your parent wrapper to display a dark background color to make the high-contrast white highlight pop.

---

## HTML Example

```html
<!-- Showcase Shimmer Header -->
<h1 class="ease-text-shimmer">
  Next-Gen Design Interfaces
</h1>
```

---

## CSS Highlights

### Custom Properties & Gradient Clipping
Exposes customizable design variables with full vendor prefix clipping rules:

```css
.ease-text-shimmer {
  --shimmer-color-1: #3b82f6;       /* Start/End primary tone */
  --shimmer-color-2: #8b5cf6;       /* Mid color tone */
  --shimmer-color-highlight: #ffffff; /* High contrast shine color */
  --shimmer-duration: 4.5s;

  background: linear-gradient(
    110deg,
    var(--shimmer-color-1) 0%,
    var(--shimmer-color-2) 25%,
    var(--shimmer-color-highlight) 45%,
    var(--shimmer-color-highlight) 55%,
    var(--shimmer-color-2) 75%,
    var(--shimmer-color-1) 100%
  );
  background-size: 200% auto;
  
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  animation: easeShimmer var(--shimmer-duration) linear infinite;
  will-change: background-position;
}
```

### Seamless Shimmer Loop Keyframes
Shifts the double-width gradient by exactly 200% width to create a continuous, gapless sweep animation:

```css
@keyframes easeShimmer {
  0% {
    background-position: 200% center;
  }
  100% {
    background-position: 0% center;
  }
}
```

---

## Why It Fits EaseMotion CSS

EaseMotion CSS focuses on lightweight, performant, and visual-first CSS enhancements that developers frequently build from scratch. High-contrast typography shine animations are staple requirements for modern web applications, making this zero-dependency token a perfect candidate for the reusable ease library.

---

## Browser Support

| Browser | Supported | Key Features |
| :--- | :--- | :--- |
| **Google Chrome** | Yes (76+) | `background-clip: text`, `will-change` |
| **Mozilla Firefox** | Yes (70+) | `background-clip: text`, `will-change` |
| **Apple Safari** | Yes (13+) | `-webkit-background-clip` prefix |
| **Microsoft Edge** | Yes (79+) | `background-clip: text`, `will-change` |

---

## Screenshots

*Place screenshot assets or live mockups illustrating the light-sweep typography on dark sections here.*

---

## Contribution Notes

- **Namespace Scope**: All components utilize the `ease-` naming prefix to prevent class name collision.
- **Scalability Principle**: Use responsive `clamp()` bounds for font styling.
- **Hardware Optimization**: Avoid using heavy keyframe properties that force CPU layout calculations. Stick to compositor-friendly transformations.
