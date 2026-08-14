# Sandbox Showcase: CSS Glitch-Flicker Progress Bar for Minimalist Tech Layouts

## Overview
A lightweight, pure CSS/HTML progress bar component designed for futuristic dashboards, cyberpunk UI themes, and telemetry loading displays. It combines `@keyframes glitchFlicker` digital interference animations with radio button state bindings to deliver smooth progress updates without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive progress bar with state triggers.
* `style.css` — Scoped layout modifier specifying glitch clip-paths, RGB channel splits, progress fills, and neon color themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for progress fill |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.92)` | Glassmorphic surface color for viewport |
| `--progress-speed` | `500ms` | Transition duration for fill bar width updates |
| `--progress-ease` | `cubic-bezier(0.25, 1, 0.5, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS State Machine:** A set of hidden `<input type="radio">` elements retains the active progress percentage state.
2. **Sibling Selector Bindings:** `#progress-50:checked ~ .alm-sandbox-stage .alm-progress-fill` animates progress bar width properties natively.
3. **GPU-Accelerated Glitch Animations:** Uses `clip-path: inset()` and `transform: translate3d()` keyframes on a pseudo-element overlay to simulate digital channel interference without triggering layout reflows.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard controls, `role="progressbar"` semantics, and gracefully disables flickering animations when `@media (prefers-reduced-motion: reduce)` is enabled.
