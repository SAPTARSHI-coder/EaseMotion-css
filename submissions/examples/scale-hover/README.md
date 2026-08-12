# Sandbox Showcase: CSS Scale-Hover Toast for Minimalist Tech Layouts

## Overview
A lightweight, pure CSS/HTML status alert component designed for developer dashboards, system logs, and notification overlays. It combines `transform: translate3d()` entry reveals with interactive `scale(1.03)` hover dynamics, checkbox state controllers, and glassmorphism to deliver notification toasts without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting interactive scale-hover toast notifications.
* `style.css` — Scoped layout modifier specifying hover scale transitions, checkbox state bindings, glassmorphism, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for cyan toasts |
| `--neon-magenta-glow` | `rgba(255, 0, 85, 0.35)` | Ambient glowing shadow for magenta toasts |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.92)` | Glassmorphic surface color for toast cards |
| `--toast-speed` | `400ms` | Transition duration for toast entry reveals |
| `--scale-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS State Controller:** Driven by hidden `<input type="checkbox">` elements and sibling selectors (`#toastCyanToggle:checked ~ .alm-sandbox-stage ...`).
2. **GPU-Accelerated Entrance:** Animates `opacity: 0` with `transform: translate3d(0, 20px, 0) scale(0.92)` to `opacity: 1` and `transform: translate3d(0, 0, 0) scale(1)`.
3. **Interactive Scale Response:** Hovering an active toast scales it to `scale(1.03)` with enhanced glowing shadows for tactile feedback.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard controls, `role="alert"` semantics, and gracefully disables scaling animations when `@media (prefers-reduced-motion: reduce)` is enabled.
