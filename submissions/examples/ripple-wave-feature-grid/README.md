# Sandbox Showcase: CSS Ripple-Wave Feature Grid for Minimalist Tech Layouts

## Overview
A lightweight, pure CSS/HTML feature grid layout designed for minimalist tech landing pages, developer dashboards, and product showcase cards. It combines `@keyframes rippleWave` concentric radial ripple expansions with `transform: scale(1.03)` hover dynamics and glassmorphism to deliver tactile interactive feedback without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive 2-column responsive feature grid.
* `style.css` — Scoped layout modifier specifying grid templates, keyframe ripple waves, scale-lift transforms, border glow effects, and neon color themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for cyan cards |
| `--neon-magenta-glow` | `rgba(255, 0, 85, 0.35)` | Ambient glowing shadow for magenta cards |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.85)` | Glassmorphic surface color for feature cards |
| `--card-speed` | `400ms` | Transition duration for card scale and icon rotation |
| `--ripple-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS Hover State Machine:** Uses CSS `:hover` and `:focus-within` selectors to trigger card scale-lift transforms and ripple keyframe loops.
2. **GPU-Accelerated Ripple Expansion:** An `.alm-feature-card::after` pseudo-element executes `@keyframes rippleWave` to scale a radial gradient from `scale(0.2)` to `scale(2.8)` while fading opacity.
3. **Micro-Interactions:** Icon badges scale (`scale(1.1)`) and rotate slightly (`rotate(-4deg)`) on card hover to enhance interactive feedback.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, `tabindex="0"` on interactive cards, and gracefully disables keyframe ripple animations when `@media (prefers-reduced-motion: reduce)` is enabled.
