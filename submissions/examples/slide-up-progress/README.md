# Sandbox Showcase: CSS Slide-Up Progress Bar for Minimalist Tech Layouts

## Overview
A lightweight, pure CSS/HTML vertical progress bar component designed for minimalist tech dashboards, telemetry tank displays, and data cards. It combines `transform: scaleY()` bottom-up scaling with radio button state bindings to deliver smooth vertical progress fills without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive vertical progress bar with state triggers.
* `style.css` — Scoped layout modifier specifying scaleY transforms, ambient glow keyframes, progress tracks, and neon color themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for progress fill |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.92)` | Glassmorphic surface color for viewport |
| `--progress-speed` | `500ms` | Transition duration for vertical scaleY updates |
| `--progress-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS State Machine:** A set of hidden `<input type="radio">` elements retains the active progress percentage state.
2. **Sibling Selector Bindings:** `#progress-75:checked ~ .alm-sandbox-stage .alm-progress-fill` animates `transform: scaleY(0.75)` vertically from the bottom up.
3. **GPU-Accelerated Scaling:** Uses `transform: scaleY()` with `transform-origin: bottom` and `will-change: transform` to deliver silky-smooth 60 FPS vertical scaling without triggering main-thread layout reflows.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard controls, `role="progressbar"` semantics, and gracefully simplifies transitions when `@media (prefers-reduced-motion: reduce)` is enabled.
