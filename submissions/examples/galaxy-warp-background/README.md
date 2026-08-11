# Sandbox Showcase: CSS Galaxy Warp Background

## Overview
A lightweight, pure CSS/HTML 3D hyperspace background component designed for sci-fi hero headers, gaming HUDs, web3 interfaces, and dark-mode dashboards. It combines CSS 3D perspective planes (`perspective: 600px`) with multi-layered `@keyframes warpSpeed` $Z$-axis depth translations, radial gradient particle starfields, and glassmorphism without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive 3D galaxy warp speed canvas.
* `style.css` — Scoped layout modifier specifying 3D perspective viewports, keyframe warp speed rules, multi-layered starfields, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color for star particles |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color for star particles |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for hero card and CTA |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for hero card |
| `--warp-speed` | `2.5s` | Keyframe duration for 3D $Z$-axis warp passes |
| `--warp-ease` | `cubic-bezier(0.5, 0, 0.75, 0)` | Accelerating cubic-bezier easing curve for hyperspace feel |

## 🛠️ How It Works

1. **3D Perspective Viewport:** The container applies `perspective: 600px` with `perspective-origin: 50% 50%` to establish a true 3D spatial field.
2. **GPU-Accelerated $Z$-Axis Translation:** `@keyframes warpSpeed` animates `transform: translate3d(0, 0, -400px) scale(0.2)` to `transform: translate3d(0, 0, 600px) scale(2.8)` with `will-change: transform`.
3. **Multi-Layered Parallax Staggering:** Three stacked starfield layers apply staggered animation delays (`0s`, `-0.83s`, `-1.65s`) and varying background sizes to create infinite hyperspace depth.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, `role="region"` semantics, and gracefully disables 3D warp animations when `@media (prefers-reduced-motion: reduce)` is enabled.
