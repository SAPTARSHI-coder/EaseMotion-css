# Animated Modal Documentation

An in-depth guide for integrating and customizing the **Animated Modal** component in EaseMotion CSS.

---

## Overview

The Animated Modal is a pure CSS overlay dialog window that operates using CSS `:target` pseudo-classes. When activated, it seamlessly transitions from `opacity: 0` to `opacity: 1` while scaling the dialog window (`scale(0.92)` to `scale(1)`) with a blurred background backdrop.

---

## Key Features

- **Pure CSS State Activation**: Toggles open and closed states using native HTML anchor tags (`href="#ease-animated-modal"`) and the CSS `:target` selector—no JavaScript required.
- **Glassmorphism Backdrop**: Uses `backdrop-filter: blur(8px)` and a translucent dark background for overlay focus.
- **Spring Scale Motion**: Window enters using `transform: scale(1) translateY(0)` with a custom cubic-bezier timing curve.
- **Accessible & Semantic**: Marked with `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and explicit focus indicators.
- **Reduced Motion Fallback**: Automatically bypasses scale transforms and backdrop keyframes when `prefers-reduced-motion: reduce` is enabled.

---

## File Structure

```text
submissions/docs/animated-modal/
├── demo.html     # Live interactive showcase page
├── style.css     # Production CSS stylesheet
└── README.md     # Detailed usage guide & API specification