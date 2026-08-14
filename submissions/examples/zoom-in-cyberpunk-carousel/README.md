# Sandbox Showcase: CSS Zoom-In Carousel for Cyberpunk Neon Layouts

## Overview
A lightweight, pure CSS/HTML slideshow component designed for futuristic dashboards, cyberpunk UI themes, and media showcase cards. It combines `transform: scale(0.88)` zoom transitions, backdrop blur filters, and radio button state controllers to deliver smooth hardware-accelerated slide transitions without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive cyberpunk slideshow carousel.
* `style.css` — Scoped layout modifier specifying scale zoom animations, arrow/pagination state controls, and neon color themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for controls |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.92)` | Glassmorphic surface color for slides |
| `--carousel-speed` | `450ms` | Transition duration for slide zoom and opacity |
| `--zoom-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Smooth decelerating easing curve |

## 🛠️ How It Works

1. **Pure CSS State Machine:** A set of hidden `<input type="radio">` elements retains the active slide index state.
2. **Dynamic Controls Binding:** CSS sibling selectors (`#slide-1:checked ~ .alm-sandbox-stage ...`) show/hide directional arrows and highlight active pagination dots.
3. **GPU-Accelerated Zooming:** Uses `transform: scale(0.88)` morphing to `scale(1)` with `will-change: transform` to deliver 60 FPS performance without triggering layout reflows.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard controls and gracefully disables scaling transitions when `@media (prefers-reduced-motion: reduce)` is enabled.
