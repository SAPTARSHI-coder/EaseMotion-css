# Sandbox Showcase: Aurora Glow Pure CSS Particle Effect

## Overview
A lightweight, pure CSS/HTML atmospheric polar light component designed for creative agency headers, web3 dashboards, game intro sequences, and dark-mode web applications. It combines multi-layered radial gradient aurora ribbon meshes with GPU-accelerated rotational and scaling keyframes (`@keyframes auroraWave1`), atmospheric star particle twinkling, screen blend modes, and glassmorphism without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive aurora glow particle viewport.
* `style.css` — Scoped layout modifier specifying aurora ribbon meshes, wave keyframes, star twinkling passes, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--aurora-cyan` | `#00f3ff` | Primary cyan accent color for light ribbons |
| `--aurora-emerald` | `#10b981` | Secondary emerald accent color for polar lights |
| `--aurora-purple` | `#a855f7` | Tertiary purple accent color for ribbon contrast |
| `--aurora-emerald-glow` | `rgba(16, 185, 129, 0.4)` | Ambient glowing shadow for stage border |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for stage |
| `--aurora-speed` | `12s` | Keyframe duration for 3D aurora wave rotations |
| `--aurora-ease` | `ease-in-out` | Smooth easing curve for natural fluid wave motion |

## 🛠️ How It Works

1. **Hardware-Accelerated Aurora Wave Motion:** `@keyframes auroraWave1` animates multi-stop radial gradient meshes (`transform: rotate(360deg) translate3d(...) scale(...)`) with `will-change: transform, opacity`.
2. **Multi-Layered Staggered Parallax:** Three distinct aurora light ribbons apply counter-rotations (`auroraWave2`) and staggered animation delays (`0s`, `-3s`, `-6s`) to simulate atmospheric depth.
3. **Interactive Light Focus:** Hovering or focusing the viewport container (`.alm-aurora-stage-viewport:hover`) sharpens ribbon contrast and intensifies star twinkling highlights.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard controls, `role="region"` semantics, visually hidden screen-reader guidance (`.sr-only`), and gracefully halts wave rotations when `@media (prefers-reduced-motion: reduce)` is enabled.
