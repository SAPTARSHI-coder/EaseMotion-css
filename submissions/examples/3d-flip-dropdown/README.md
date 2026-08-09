# Sandbox Showcase: CSS 3D-Flip Dropdown for Minimalist Tech Layouts

## Overview
A lightweight, pure CSS/HTML action menu component designed for developer dashboards, action toolbars, and navbar utilities. It combines CSS `perspective: 1000px` with 3D `rotateX()` flip reveals, focus/hover state controllers, and glassmorphism to deliver smooth 3D menu transitions without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive 3D-flip dropdown.
* `style.css` — Scoped layout modifier specifying 3D perspective planes, rotateX flip transforms, hardware acceleration, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for trigger button |
| `--neon-magenta-glow` | `rgba(255, 0, 85, 0.35)` | Ambient glowing shadow for dropdown menu border |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.92)` | Glassmorphic surface color for menu panel |
| `--dropdown-speed` | `400ms` | Transition duration for 3D flip dropdown reveals |
| `--flip-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS Focus State Machine:** Driven by CSS `:focus-within` and `:hover` selectors on the wrapper container.
2. **GPU-Accelerated 3D Rotation:** Animates `opacity: 0` with `transform: translate3d(-50%, 0, 0) rotateX(-90deg)` to `opacity: 1` and `transform: translate3d(-50%, 0, 0) rotateX(0deg)` with `transform-origin: top center`.
3. **Interactive Micro-Feedback:** Individual menu items slide right (`translate3d(6px, 0, 0)`) on hover with responsive glow highlights.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, ARIA menu roles (`role="menu"`, `role="menuitem"`), and gracefully disables 3D rotations when `@media (prefers-reduced-motion: reduce)` is enabled.
