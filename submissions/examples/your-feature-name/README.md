# Sandbox Showcase: CSS 3D-Flip Stepper for Minimalist Tech Layouts

## Overview
A lightweight, pure CSS/HTML 3D-flip stepper component designed for tech dashboards, setup wizards, and multi-stage workflows. It combines `perspective` transformations and radio-button state bindings to deliver smooth, tactile 3D card flipping transitions without requiring JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a 3-step interactive wizard using radio input state drivers.
* `style.css` — Scoped layout modifier asset layer specifying `perspective: 1200px`, `preserve-3d`, and hardware-accelerated step transitions.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--stepper-primary` | `#6c63ff` | Accent brand color for active nodes and primary buttons |
| `--stepper-primary-glow` | `rgba(108, 99, 255, 0.35)` | Ambient glowing shadow for active step indicators |
| `--stepper-bg` | `#050814` | Stage container background color |
| `--stepper-card-bg` | `#0f172a` | Surface color for individual 3D flip cards |
| `--stepper-border` | `rgba(255, 255, 255, 0.08)` | Glassmorphic border stroke color |
| `--stepper-speed` | `500ms` | Transition duration for 3D rotations and fill lines |
| `--stepper-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Physics-based spring easing curve |

## 🛠️ How It Works

1. **Pure CSS State Machine:** Hidden `<input type="radio">` tags placed before the main stage element hold the active step state.
2. **Sibling Selection:** CSS general sibling selectors (`#step-1:checked ~ .alm-sandbox-stage ...`) trigger layout transitions for card visibility, node highlights, and progress fill line widths.
3. **Hardware-Accelerated 3D Transforms:** Each card utilizes `transform-style: preserve-3d;` and `backface-visibility: hidden;`. Flipping is driven via GPU-friendly `rotateX()` and `translateZ()` properties to ensure 60 FPS transitions.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` outline rings for keyboard navigation and gracefully disables 3D rotations when `@media (prefers-reduced-motion: reduce)` is enabled.
