# Sandbox Showcase: CSS Underwater Caustics

## Overview
A lightweight, pure CSS/HTML underwater ambient light component designed for marine landing page heroes, aquatic tech dashboards, gaming cockpits, and dark-mode web applications. It combines multi-layered CSS radial gradient caustic maps with GPU-accelerated rotational and scale keyframes (`@keyframes causticRipple`), screen blend modes, and glassmorphism without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive underwater caustics canvas.
* `style.css` — Scoped layout modifier specifying radial gradient light maps, ripple keyframe passes, aquatic color themes, and glassmorphic card overlays.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color for caustic light ripples |
| `--aqua-teal` | `#00ffd5` | Secondary aqua teal glow color for caustics |
| `--deep-ocean-bg` | `#021526` | Stage container deep ocean background color |
| `--cyber-card-bg` | `rgba(2, 21, 38, 0.88)` | Glassmorphic surface color for hero card |
| `--caustic-speed` | `14s` | Keyframe duration for aquatic caustic light ripples |
| `--caustic-ease` | `ease-in-out` | Easing function for natural fluid wave movement |

## 🛠️ How It Works

1. **Hardware-Accelerated Caustic Ripple:** `@keyframes causticRipple` rotates and translates multi-stop radial gradient facets (`transform: rotate(360deg) scale(1) translate3d(...)`).
2. **Multi-Layered Staggered Parallax:** Three distinct caustic light layers apply counter-rotations (`causticRippleReverse`) and staggered animation delays (`0s`, `-7s`, `-10.5s`) to simulate deep aquatic light refraction.
3. **Glassmorphic Hero Overlay:** A foreground card with `backdrop-filter: blur(16px)` provides a high-contrast focal area over the animated aquatic background.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, `role="region"` semantics, and gracefully disables caustic ripple loops when `@media (prefers-reduced-motion: reduce)` is enabled.
