# Sandbox Showcase: CSS Glitch-Flicker Hero Section for Minimalist Tech Layouts

## Overview
A lightweight, pure CSS/HTML landing section header component designed for developer portfolios, cyberpunk tech products, and gaming landing pages. It combines pseudo-element overlays, `@keyframes` `clip-path` slicing, and scanline effects to produce authentic digital channel interference on main typography without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive glitch hero section layout.
* `style.css` — Scoped layout modifier specifying clip-path keyframe slicing, scanlines, neon CTA micro-interactions, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for primary CTA |
| `--neon-magenta-glow` | `rgba(255, 0, 85, 0.35)` | Ambient glowing shadow for secondary CTA |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--hero-speed` | `350ms` | Transition duration for CTA hover interactions |
| `--glitch-ease` | `cubic-bezier(0.25, 1, 0.5, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS Pseudo-Slicing:** Uses `::before` and `::after` pseudo-elements mirroring the `data-text` attribute of the title element.
2. **GPU-Accelerated Slicing Keyframes:** `@keyframes glitchClipPrimary` and `@keyframes glitchClipSecondary` rapidly alter `clip-path: polygon()` and `transform: translate3d()` to generate digital channel interference.
3. **Scanline Overlays:** A background gradient layer simulates classic CRT scanlines without interfering with user text selection.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard controls, semantic header landmarks, and gracefully disables glitch animation loops when `@media (prefers-reduced-motion: reduce)` is enabled.
