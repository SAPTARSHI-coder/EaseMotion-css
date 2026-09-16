# Sandbox Showcase: CSS-only Zoom Map

## Overview
A lightweight, pure CSS/HTML geolocation map preview component designed for tech dashboards, real-estate portals, travel platforms, and event landing pages. It combines `transform: scale()` focal zoom reveals with radio-button state management, interactive map pins, and glassmorphism without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive vector zoom map.
* `style.css` — Scoped layout modifier specifying focal zoom scale transforms, pin pulse keyframes, radio state bindings, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color for Core Gamma pin |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for standard pins |
| `--neon-magenta-glow` | `rgba(255, 0, 85, 0.35)` | Ambient glowing shadow for Core Gamma pin |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for stage |
| `--map-speed` | `550ms` | Transition duration for map zoom and translation passes |
| `--map-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS Focal Zoom State Machine:** Driven by hidden `<input type="radio">` elements and sibling selectors (`#region-alpha:checked ~ .alm-sandbox-stage .alm-map-plane`).
2. **GPU-Accelerated Focal Zooms:** Scales and translates the background map plane (`transform: scale(1.65) translate3d(18%, 15%, 0)`) with `will-change: transform` to zoom smoothly onto target sectors.
3. **Interactive Map Pins:** Clicking pins (`<label for="region-alpha">`) updates the active radio controller directly from the map surface.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, `role="region"` semantics, and gracefully disables zoom transformations when `@media (prefers-reduced-motion: reduce)` is enabled.
