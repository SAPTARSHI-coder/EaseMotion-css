# Sandbox Showcase: CSS Blur-Entrance Hero Section for Minimalist Tech Layouts

## Overview
A lightweight, pure CSS/HTML landing section header component designed for developer portfolios, SaaS tech products, and modern web applications. It combines `@keyframes blurEntrance` depth transitions, ambient radial glowing backdrops, and glowing CTA buttons to deliver an elegant focal reveal effect on page load without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive hero section layout with blur entrance reveals.
* `style.css` — Scoped layout modifier specifying keyframe blur entrance transitions, ambient radial glows, neon CTA micro-interactions, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for primary CTA |
| `--neon-magenta-glow` | `rgba(255, 0, 85, 0.35)` | Ambient glowing shadow for secondary CTA |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--hero-speed` | `800ms` | Keyframe duration for blur entrance reveal |
| `--blur-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS Blur Reveal:** `@keyframes blurEntrance` transitions `filter: blur(14px)` and `opacity: 0` into `filter: blur(0px)` and `opacity: 1`.
2. **GPU-Accelerated Scale/Translate:** Combines `transform: scale(0.94) translate3d(0, 24px, 0)` morphing to `scale(1) translate3d(0, 0, 0)` with `will-change: transform` to deliver smooth 60 FPS page load reveals.
3. **Ambient Radial Background:** A backdrop pseudo-layer provides atmospheric lighting that highlights hero typography.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard controls, semantic header landmarks, and gracefully disables keyframe blur animations when `@media (prefers-reduced-motion: reduce)` is enabled.
