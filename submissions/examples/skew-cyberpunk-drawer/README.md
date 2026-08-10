# Sandbox Showcase: CSS Skew-Active Drawer for Cyberpunk Neon Layouts

## Overview
A lightweight, pure CSS/HTML slide-out panel component designed for futuristic dashboards, cyberpunk UI themes, and gaming control panels. It combines `transform: skewX()` dynamic shear animations with backdrop blur effects and checkbox state bindings to deliver smooth hardware-accelerated drawer transitions without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive cyberpunk dashboard and skew-active drawer.
* `style.css` — Scoped layout modifier specifying `skewX()` and `translate3d()` transforms alongside neon color themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for buttons |
| `--neon-magenta-glow` | `rgba(255, 0, 85, 0.35)` | Ambient glowing shadow for drawer panel |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for drawer |
| `--drawer-speed` | `450ms` | Transition duration for drawer slide/skew |
| `--drawer-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | Smooth decelerating easing curve |

## 🛠️ How It Works

1. **Pure CSS State Machine:** A hidden `<input type="checkbox">` element retains open/closed panel state.
2. **Sibling Selector Bindings:** `.alm-drawer-checkbox:checked ~ .alm-sandbox-stage .alm-skew-drawer` triggers visual state changes.
3. **GPU-Accelerated Skew/Slide:** Uses `transform: skewX(-6deg) translate3d(100%, 0, 0)` animating to `skewX(0deg) translate3d(0, 0, 0)` for silky-smooth 60 FPS performance.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard controls and gracefully disables skewing/sliding when `@media (prefers-reduced-motion: reduce)` is enabled.
