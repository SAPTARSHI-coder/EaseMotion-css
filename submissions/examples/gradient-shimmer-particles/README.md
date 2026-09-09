# Sandbox Showcase: Gradient Shimmer Pure CSS Particle Effect

## Overview
A lightweight, pure CSS/HTML luminous particle component designed for high-impact landing page headers, web3 dashboards, creative agency hero sections, and dark-mode web applications. It combines linear gradient shimmer passes (`background-position: -200% 0` $\rightarrow$ `200% 0`) with 3D spatial float physics (`@keyframes particleFloat1`), ambient neon glow shadows, and glassmorphic card framing without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive gradient shimmer particle stage.
* `style.css` — Scoped layout modifier specifying gradient shimmer passes, float keyframes, glow filters, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color for orb shimmer |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color for orb shimmer |
| `--neon-emerald` | `#10b981` | Tertiary emerald accent color |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.4)` | Ambient glowing shadow for primary orb |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for stage |
| `--shimmer-speed` | `3.5s` | Keyframe duration for gradient light shimmer passes |
| `--float-speed` | `5.5s` | Keyframe duration for 3D spatial drift loops |

## 🛠️ How It Works

1. **Pure CSS Gradient Shimmer Pass:** `@keyframes shimmerPass` animates `background-position` across multi-stop linear gradients (`background-size: 250% 250%`).
2. **GPU-Accelerated 3D Drift:** `@keyframes particleFloat1` animates spatial transforms (`transform: translate3d(...) scale(...)`) with `will-change: transform` to deliver smooth 60 FPS floating physics without triggering layout reflows.
3. **Interactive Hover Lock:** Hovering or focusing the viewport container (`.alm-shimmer-stage-viewport:hover`) expands particles forward and intensifies ambient glowing shadows.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, `role="region"` semantics, visually hidden screen-reader text (`.sr-only`), and gracefully halts floating loops when `@media (prefers-reduced-motion: reduce)` is enabled.
