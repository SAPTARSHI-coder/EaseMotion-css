# Sandbox Showcase: Solar Flare Radial Glassmorphism UI

## Overview
A lightweight, pure CSS/HTML glassmorphism dashboard card component designed for high-impact landing pages, web3 cockpits, gaming HUDs, and dark-mode dashboards. It combines `backdrop-filter: blur(16px)` frosted glass backplates with multi-layered radial gradient solar flares (`radial-gradient(circle at center, ...)`), GPU-accelerated rotation/scale cycles (`@keyframes solarPulse`), and glassmorphism without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive solar flare glassmorphic dashboard card.
* `style.css` — Scoped layout modifier specifying glass frosted backplates, radial flare light corona keyframes, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--solar-gold` | `#ffaa00` | Primary solar gold accent color |
| `--solar-orange` | `#ff4500` | Secondary plasma orange flare glow color |
| `--solar-cyan` | `#00f3ff` | Tertiary cyan accent color |
| `--solar-gold-glow` | `rgba(255, 170, 0, 0.45)` | Ambient glowing shadow for open card |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--glass-bg` | `rgba(15, 23, 42, 0.72)` | Glassmorphic surface color for card backplate |
| `--flare-speed` | `8s` | Keyframe duration for radial flare pulse cycles |
| `--flare-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Frosted Glass Backplate:** Applies `backdrop-filter: blur(16px)` over a semi-transparent surface (`rgba(15, 23, 42, 0.72)`) to create light refraction.
2. **GPU-Accelerated Radial Solar Corona:** An absolute `.alm-solar-flare-aura` element applies `radial-gradient(...)` and animates `rotate()` and `scale()` with `will-change: transform, opacity`.
3. **Interactive Depth Scaling:** Hovering or focusing the card container (`.alm-solar-glass-card:hover`) lifts the glass surface (`transform: translate3d(0, -4px, 0) scale(1.015)`) and intensifies ambient solar glows.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, `role="region"` semantics, visually hidden screen-reader guidance (`.sr-only`), and gracefully halts solar flare passes when `@media (prefers-reduced-motion: reduce)` is enabled.
