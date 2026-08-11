# Sandbox Showcase: CSS Elastic-Slide Stepper for Minimalist Tech Layouts

## Overview
A lightweight, pure CSS/HTML multi-step workflow component designed for minimalist tech dashboards, setup wizards, and multi-stage configuration panels. It combines `cubic-bezier(0.68, -0.55, 0.265, 1.55)` spring physics slide transitions with radio button state bindings to deliver tactile step navigation without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive multi-step wizard.
* `style.css` — Scoped layout modifier specifying spring cubic-bezier curves, hardware-accelerated transforms, step indicators, and neon color themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for active nodes and buttons |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.92)` | Glassmorphic surface color for step cards |
| `--stepper-speed` | `500ms` | Transition duration for slide transitions and progress fill |
| `--elastic-ease` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Spring overshoot cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS State Machine:** A set of hidden `<input type="radio">` elements retains the active step index state.
2. **Sibling Selector Bindings:** `#step-2:checked ~ .alm-sandbox-stage .alm-step-card[data-step="2"]` slides the active step card into view while animating progress line widths.
3. **GPU-Accelerated Elastic Sliding:** Uses `transform: translate3d()` with spring overshoot cubic-bezier easing to achieve 60 FPS slide transitions without triggering main-thread layout reflows.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard controls, semantic navigation structures, and gracefully simplifies transitions when `@media (prefers-reduced-motion: reduce)` is enabled.
