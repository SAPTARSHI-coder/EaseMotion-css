# Sandbox Showcase: CSS 3D Flip Hero

## Overview
A lightweight, pure CSS/HTML landing section header component designed for developer portfolios, AI tech products, web3 platforms, and dark-mode dashboards. It combines `perspective: 1000px` with `@keyframes flip3dEntrance` 3D $X$-axis rotation sequences, staggered delay offsets (`animation-delay`), and glowing CTA buttons to deliver an organic page reveal without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive hero section layout with staggered 3D flip entrance sequences.
* `style.css` — Scoped layout modifier specifying 3D perspective viewports, rotateX flip keyframes, neon CTA micro-interactions, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for primary CTA |
| `--neon-magenta-glow` | `rgba(255, 0, 85, 0.35)` | Ambient glowing shadow for secondary CTA |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--hero-speed` | `800ms` | Keyframe duration for 3D flip entrance transitions |
| `--flip-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS 3D Flip Entrance:** `@keyframes flip3dEntrance` animates `opacity: 0` with `transform: translate3d(0, 40px, -100px) rotateX(-70deg)` to `opacity: 1` and `transform: translate3d(0, 0, 0) rotateX(0deg)`.
2. **Sequential Delay Offsets:** CSS `:nth-child()` selectors apply incremental `animation-delay` offsets (100ms, 250ms, 400ms, 550ms, 700ms) to create a cascading entrance hierarchy.
3. **GPU-Accelerated Performance:** Uses `perspective: 1000px` on the stage container with `will-change: transform` to ensure silky-smooth 60 FPS transitions without triggering main-thread layout reflows.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard controls, semantic header landmarks, and gracefully bypasses 3D flip animations when `@media (prefers-reduced-motion: reduce)` is enabled.
