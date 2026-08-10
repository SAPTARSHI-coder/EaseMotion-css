# Sandbox Showcase: CSS Pixel Dissolve Button

## Overview
A lightweight, pure CSS/HTML call-to-action component designed for retro-futuristic gaming cockpits, cyberpunk HUDs, web3 interfaces, and developer dashboards. It uses CSS pseudo-element pixel grid matrices (`clip-path: polygon(...)`) triggered on `:active` click states with radial dispersion keyframe passes (`@keyframes pixelDisperse`) and glassmorphism without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive pixel dissolve button.
* `style.css` — Scoped layout modifier specifying clip-path pixel matrices, disperse keyframes, active click state triggers, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color for pixel matrix |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color for dispersing pixels |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for button |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for button |
| `--pixel-speed` | `450ms` | Transition duration for pixel dispersion keyframe passes |
| `--pixel-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS Click State Trigger:** Uses the native CSS `:active` pseudo-class to trigger pixel dispersion keyframes when the button is clicked/pressed.
2. **Clip-Path Pixel Quadrants:** Pseudo-elements (`::before`, `::after`) are sliced into pixel matrix quadrants using `clip-path: polygon(...)`.
3. **GPU-Accelerated Dispersion:** `@keyframes pixelDisperseTopLeft` translates pixel facets (`translate3d(-35px, -30px, 0) scale(0)`) with `will-change: transform, opacity` to deliver smooth 60 FPS dissolve feedback.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, semantic button markup, and gracefully disables pixel dispersion animations when `@media (prefers-reduced-motion: reduce)` is enabled.
