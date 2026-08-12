# Sandbox Showcase: CSS Elastic-Slide Modal for Cyberpunk Neon Layouts

## Overview
A lightweight, pure CSS/HTML modal overlay component designed for futuristic dashboards, cyberpunk UI themes, and gaming dialogs. It combines `cubic-bezier(0.68, -0.55, 0.265, 1.55)` spring physics animations with backdrop blur filters and checkbox state bindings to deliver tactile elastic slide transitions without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive cyberpunk dashboard and elastic slide modal.
* `style.css` — Scoped layout modifier specifying spring curve animations, translate/scale transforms, and neon color themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for modal and buttons |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.92)` | Glassmorphic surface color for modal |
| `--modal-speed` | `500ms` | Transition duration for modal elastic slide |
| `--elastic-ease` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Spring overshoot easing curve |

## 🛠️ How It Works

1. **Pure CSS State Machine:** A hidden `<input type="checkbox">` element retains open/closed modal state.
2. **Sibling Selector Bindings:** `.alm-modal-checkbox:checked ~ .alm-sandbox-stage .alm-elastic-modal` triggers visual state changes.
3. **GPU-Accelerated Elastic Physics:** Uses `transform: translate3d(-50%, -120%, 0) scale(0.85)` animating to `translate3d(-50%, -50%, 0) scale(1)` with spring cubic-bezier easing for silky-smooth 60 FPS performance.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard controls and gracefully disables elastic scaling when `@media (prefers-reduced-motion: reduce)` is enabled.
