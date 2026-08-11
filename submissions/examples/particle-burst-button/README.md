# Sandbox Showcase: Particle Burst Pure CSS Button

## Overview
A lightweight, pure CSS/HTML action button component designed for high-impact call-to-actions, gaming HUDs, web3 cockpits, and dark-mode dashboards. It detonates a radial cluster of multi-colored particle sparks upon click/keypress (`:active`) using pseudo-element radial arrays, hardware-accelerated 3D scale transforms (`@keyframes particleDetonate`), and glassmorphism without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting interactive particle burst button variants.
* `style.css` — Scoped layout modifier specifying radial particle arrays, detonation keyframe passes, glow filters, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--burst-cyan` | `#00f3ff` | Primary cyan accent color |
| `--burst-magenta` | `#ff0055` | Secondary magenta glow color |
| `--burst-emerald` | `#10b981` | Tertiary emerald spark accent |
| `--burst-cyan-glow` | `rgba(0, 243, 255, 0.4)` | Ambient glowing shadow for primary button |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for button body |
| `--burst-speed` | `500ms` | Keyframe duration for radial particle detonation |
| `--burst-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Radial Pseudo-Element Particle Array:** `::before` and `::after` pseudo-elements house multi-stop radial gradient spark patterns positioned around the button perimeter.
2. **GPU-Accelerated Detonation:** Clicking the button triggers `:active`, firing `@keyframes particleDetonate` (`transform: scale(0.2)` $\rightarrow$ `scale(1.6)`) with `will-change: transform, opacity`.
3. **Hardware-Accelerated Performance:** Uses GPU-promoted transforms to deliver smooth 60 FPS particle explosion feedback without triggering layout reflows.
4. **Accessibility Built-In:** Supports native keyboard interaction (`Space` / `Enter` activate `:active`), includes explicit `:focus-visible` rings, and gracefully disables particle detonation when `@media (prefers-reduced-motion: reduce)` is enabled.
