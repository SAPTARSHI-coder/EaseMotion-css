# CSS High Contrast Toggle

A pure CSS UI component providing an accessible, animated toggle switch that dynamically applies a high-contrast theme to UI elements without requiring JavaScript.

---

## Overview

Accessibility (a11y) is essential for modern web applications. This component provides users with low vision, light sensitivity, or situational visibility constraints (such as bright outdoor sunlight) a seamless mechanism to switch into a high-visibility, WCAG-compliant color scheme.

The interaction—including sliding track animations, focus rings, and theme application—is achieved entirely with standard CSS pseudo-classes (`:checked`, `:focus-visible`) and the subsequent sibling combinator (`~`).

---

## Key Features

- **Pure CSS (Zero JavaScript):** Lightweight, hardware-accelerated animations running on the browser's compositor layer.
- **Full Accessibility (a11y):**
  - Uses `role="switch"` and `aria-label` for screen reader announcements.
  - Custom `:focus-visible` ring indicators for full keyboard navigation (Tab and Spacebar activation).
- **High-Contrast Theme:** Switches to high-ratio contrast colors (`#ffff00` high-visibility yellow on `#000000` pitch black).
- **Smooth Animations:** Cubic-bezier transitions for smooth slider action and background color morphing.
- **Self-Contained & Responsive:** Works out of the box on mobile, tablet, and desktop viewports.

---

## File Structure

```text
submissions/examples/_high-contrast-toggle/
├── demo.html    # Standalone demo page
├── style.css    # Core styling and animation rules
└── README.md    # Documentation and usage guide
```
