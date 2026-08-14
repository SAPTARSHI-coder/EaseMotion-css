# Responsive Badge Documentation

An in-depth guide for integrating and customizing the **Responsive Badge** component in EaseMotion CSS.

---

## Overview

The Responsive Badge is a fluid UI metadata capsule designed using viewport-relative scaling functions (`clamp()`). It dynamically adjusts font size, icon dimensions, padding, and gap spacing to maintain optimal visual balance across mobile devices, tablets, and desktop displays.

---

## Key Features

- **Fluid Clamp Typography & Spacing**: Employs `clamp()` rules for typography (`clamp(0.68rem, 1.8vw, 0.8rem)`) and internal padding to eliminate jarring media query jumps.
- **Text Overflow Protection**: Utilizes `max-width: 100%`, `overflow: hidden`, and `text-overflow: ellipsis` for long strings on small screens.
- **Contextual Variants**: Built-in support for `.ease-badge-primary`, `.ease-badge-accent`, and `.ease-badge-outline`.
- **Accessible & Lightweight**: Marked with `role="status"` and `aria-hidden="true"` for decorative icons and status dots.
- **Reduced Motion Fallback**: Gracefully disables hover lift transforms when `prefers-reduced-motion: reduce` is detected.

---

## File Structure

```text
submissions/docs/responsive-badge/
├── demo.html     # Live interactive showcase page
├── style.css     # Production CSS stylesheet
└── README.md     # Detailed usage guide & API specification