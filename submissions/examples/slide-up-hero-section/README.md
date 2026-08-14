# Sandbox Showcase: CSS Slide-Up Hero Section for Minimalist Tech Layouts

## Overview
A lightweight, pure CSS/HTML landing section header component designed for developer portfolios, AI tech products, and dark-mode dashboards. It combines `@keyframes slideUpEntrance` bottom-up translation sequences, staggered delay offsets (`animation-delay`), and glowing CTA buttons to deliver an organic page reveal without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive hero section layout with staggered slide entrance sequences.
* `style.css` — Scoped layout modifier specifying staggered keyframe slide transitions, neon CTA micro-interactions, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for primary CTA |
| `--neon-magenta-glow` | `rgba(255, 0, 85, 0.35)` | Ambient glowing shadow for secondary CTA |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--hero-speed` | `700ms` | Keyframe duration for slide entrance transitions |
| `--slide-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS Staggered Entrance:** `@keyframes slideUpEntrance` animates `opacity: 0` with `transform: translate3d(0, 32px, 0)` to `opacity: 1` and `transform: translate3d(0, 0, 0)`.
2. **Sequential Delay Offsets:** CSS `:nth-child()` selectors apply incremental `animation-delay` offsets (100ms, 250ms, 400ms, 550ms, 700ms) to create a cascading entrance hierarchy.
3. **GPU-Accelerated Performance:** Uses `transform: translate3d()` with `will-change: transform` to ensure silky-smooth 60 FPS transitions without triggering main-thread layout reflows.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard controls, semantic header landmarks, and gracefully bypasses slide animations when `@media (prefers-reduced-motion: reduce)` is enabled.
