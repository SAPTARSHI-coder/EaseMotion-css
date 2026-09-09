# Sandbox Showcase: CSS Morphing Polygon Background

## Overview
A lightweight, pure CSS/HTML ambient background component designed for sci-fi hero headers, gaming cockpits, AI tech platforms, and web3 dashboards. It combines CSS `clip-path: polygon(...)` shape interpolations with GPU-accelerated rotational and scaling keyframes (`@keyframes polyMorph`), multi-layered low-poly mesh nodes, and glassmorphic telemetry cards without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive morphing polygon mesh background.
* `style.css` — Scoped layout modifier specifying clip-path polygon keyframes, mesh node layer staggering, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color for polygon node 1 |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color for polygon node 2 |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for hero card and CTA |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for hero card |
| `--morph-speed` | `12s` | Keyframe duration for polygon clip-path morphing passes |
| `--morph-ease` | `ease-in-out` | Smooth easing function for organic geometry morphing |

## 🛠️ How It Works

1. **Hardware-Accelerated Clip-Path Interpolation:** `@keyframes polyMorph1` interpolates CSS `clip-path: polygon(...)` coordinate matrices alongside `transform: rotate(...) scale(...)`.
2. **Multi-Layered Staggered Parallax Mesh:** Three distinct low-poly mesh nodes apply staggered animation durations (`12s`, `10.2s`, `14.4s`) and delay offsets (`0s`, `-3s`, `-6s`) to generate fluid, non-repeating geometry passes.
3. **Glassmorphic Hero Overlay:** A foreground card with `backdrop-filter: blur(16px)` provides a high-contrast focal area over the animated background.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, `role="region"` semantics, and gracefully disables polygon morphing loops when `@media (prefers-reduced-motion: reduce)` is enabled.
