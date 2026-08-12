# Sandbox Showcase: CSS Zoom-In Drawer for Cyberpunk Neon Layouts

## Overview
A lightweight, pure CSS/HTML slide-out panel component designed for futuristic dashboards, cyberpunk UI themes, and gaming control panels. It combines `transform: scale()` zoom animations with backdrop blur effects and checkbox state bindings to deliver smooth hardware-accelerated drawer transitions without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive cyberpunk dashboard and zoom-in drawer.
* `style.css` — Scoped layout modifier specifying `scale()` and `translate3d()` transforms alongside neon color themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for buttons |
| `--neon-magenta-glow` | `rgba(255, 0, 85, 0.35)` | Ambient glowing shadow for drawer panel |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.85)` | Glassmorphic surface color for drawer |
| `--drawer-speed` | `400ms` | Transition duration for drawer slide/zoom |
| `--drawer-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Smooth decelerating easing curve |

## 🛠️ How It Works

1. **Pure CSS State Machine:** A hidden `<input type="checkbox">` element retains open/closed panel state.
2. **Sibling Selector Bindings:** `.alm-drawer-checkbox:checked ~ .alm-sandbox-stage .alm-zoom-drawer` triggers visual state changes.
3. **GPU-Accelerated Scale/Slide:** Uses `transform: scale(0.85) translate3d(100%, 0, 0)` animating to `scale(1) translate3d(0, 0, 0)` for silky-smooth $60\text{fps}$ performance.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard controls and gracefully disables scaling/sliding when `@media (prefers-reduced-motion: reduce)` is enabled.
