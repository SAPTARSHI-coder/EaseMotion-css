# Sandbox Showcase: Glassmorphism Blur Pure CSS Background Animation

## Overview
A lightweight, pure CSS/HTML background component designed for high-impact landing page headers, web3 dashboards, gaming cockpits, and dark-mode web applications. It combines `backdrop-filter: blur(20px) saturate(180%)` frosted glass backplates with GPU-accelerated drifting neon orb passes (`@keyframes orbDrift1`), glassmorphic card overlays, and dark-mode styling without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive glassmorphism blur background animation.
* `style.css` — Scoped layout modifier specifying frosted glass backplates, background fluid orb drift keyframes, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--glass-cyan` | `#00f3ff` | Primary cyan accent color for background orb 1 |
| `--glass-magenta` | `#ff0055` | Secondary magenta glow color for background orb 2 |
| `--glass-violet` | `#a855f7` | Tertiary violet accent color for background orb 3 |
| `--glass-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for open card |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--glass-surface` | `rgba(15, 23, 42, 0.65)` | Glassmorphic surface color for card backplate |
| `--orb-speed` | `14s` | Keyframe duration for drifting orb loops |
| `--glass-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Frosted Glass Backplate:** Applies `backdrop-filter: blur(20px) saturate(180%)` over a semi-transparent surface (`rgba(15, 23, 42, 0.65)`) to create light refraction.
2. **GPU-Accelerated Drifting Orbs:** Background elements (`.alm-mesh-orb`) apply radial gradients and animate `translate3d(...)` and `scale(...)` with `will-change: transform`.
3. **Interactive Depth Scaling:** Hovering or focusing the card container (`.alm-glass-card:hover`) lifts the glass surface (`transform: translate3d(0, -4px, 0) scale(1.015)`) and intensifies ambient glows.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, `role="region"` semantics, visually hidden screen-reader guidance (`.sr-only`), and gracefully halts background orb loops when `@media (prefers-reduced-motion: reduce)` is enabled.
