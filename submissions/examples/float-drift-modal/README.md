# Sandbox Showcase: CSS Float-Drift Modal for Minimalist Tech Layouts

## Overview
A lightweight, pure CSS/HTML modal overlay component designed for futuristic dashboards, cyberpunk UI themes, and action dialogs. It combines `@keyframes floatDrift` continuous floating physics with backdrop blur filters and checkbox state bindings to deliver tactile floating modal transitions without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive cyberpunk dashboard and float-drift modal.
* `style.css` — Scoped layout modifier specifying floating keyframes, translate/scale transforms, and neon color themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for modal and buttons |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.92)` | Glassmorphic surface color for modal |
| `--modal-speed` | `450ms` | Transition duration for modal entry reveal |
| `--drift-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS State Machine:** A hidden `<input type="checkbox">` element retains open/closed modal state.
2. **Sibling Selector Bindings:** `.alm-modal-checkbox:checked ~ .alm-sandbox-stage .alm-float-modal` triggers visual state changes.
3. **GPU-Accelerated Floating Dynamics:** Uses `transform: translate3d(-50%, -50%, 0)` in `@keyframes floatDrift` to maintain silky-smooth 60 FPS floating motion while open.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard controls, `role="dialog"` semantics, and gracefully disables floating keyframe animations when `@media (prefers-reduced-motion: reduce)` is enabled.
