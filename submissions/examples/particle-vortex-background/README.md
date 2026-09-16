# Sandbox Showcase: CSS Particle Vortex Background

## Overview
A lightweight, pure CSS/HTML 3D particle vortex background component designed for sci-fi hero headers, gaming HUDs, AI tech platforms, and dark-mode dashboards. It combines CSS 3D perspective planes (`perspective: 800px`) with counter-rotating `@keyframes vortexSwirl` $Z$-axis depth and rotational translations, radial gradient particle field rings, and glassmorphism without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive 3D particle vortex swirl canvas.
* `style.css` — Scoped layout modifier specifying 3D perspective viewports, keyframe vortex swirl rules, multi-layered particle field rings, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color for particle field rings |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color for particle field rings |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for hero card and CTA |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for hero card |
| `--vortex-speed` | `8s` | Keyframe duration for 3D rotational vortex passes |
| `--vortex-ease` | `linear` | Linear timing function for continuous rotational loops |

## 🛠️ How It Works

1. **3D Perspective Viewport:** The container applies `perspective: 800px` with `perspective-origin: 50% 50%` to establish a true 3D spatial field.
2. **GPU-Accelerated 3D Rotation & Translation:** `@keyframes vortexSwirl` animates `transform: rotate(0deg) scale(0.4) translate3d(0, 0, -300px)` to `transform: rotate(360deg) scale(2.2) translate3d(0, 0, 400px)` with `will-change: transform`.
3. **Multi-Layered Counter-Rotating Staggering:** Three stacked particle layers apply counter-rotations (`vortexSwirlReverse`) and staggered animation delays (`0s`, `-3.2s`, `-5.28s`) to simulate dynamic vortex pull and depth perception.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, `role="region"` semantics, and gracefully disables 3D swirling keyframe loops when `@media (prefers-reduced-motion: reduce)` is enabled.
