# Glowing Badge Documentation

An in-depth guide for integrating and customizing the **Glowing Badge** component in EaseMotion CSS.

---

## Overview

The Glowing Badge component provides compact status indicators featuring ambient neon box-shadow diffusion, an animated pulsing status dot, and custom contextual color variants (Success, Warning, Danger).

---

## Key Features

- **Pure CSS Pulse**: Uses `@keyframes ease-pulse-dot` for smooth continuous dot scaling and opacity transitions.
- **Contextual Variants**: Out-of-the-box support for `.ease-badge-success`, `.ease-badge-warning`, and `.ease-badge-danger`.
- **Accessible Design**: Annotated with `role="status"` and `aria-hidden="true"` on decorative dot indicators.
- **Reduced Motion Support**: Bypasses dot pulsing keyframe loops when `prefers-reduced-motion: reduce` is enabled.

---

## File Structure

```text
submissions/docs/glowing-badge/
├── demo.html     # Live interactive showcase page
├── style.css     # Production CSS stylesheet
└── README.md     # Detailed usage guide & API specification