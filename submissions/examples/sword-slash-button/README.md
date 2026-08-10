# Sandbox Showcase: CSS Sword Slash Button

## Overview
A lightweight, pure CSS/HTML call-to-action component designed for gaming HUDs, anime/action-themed landing pages, esports portals, and cyberpunk cockpits. It uses CSS pseudo-element light blade facets triggered on `:active` click states with high-speed $45^\circ$ diagonal translation keyframe sweeps (`@keyframes swordSlashSweep`), text impact flashes, and glassmorphism without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive sword slash button.
* `style.css` — Scoped layout modifier specifying diagonal light blade facets, slash keyframe sweeps, active click state triggers, text impact shifts, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color for button border and blade start |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color for blade trail and text impact |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for button |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for button |
| `--slash-speed` | `300ms` | Transition duration for diagonal blade slash sweeps |
| `--slash-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS Click State Trigger:** Uses the native CSS `:active` pseudo-class to trigger blade sweep keyframes when the button is pressed/clicked.
2. **Diagonal Pseudo-Element Light Blade:** An `::after` pseudo-element styled with a multi-stop linear gradient is rotated $45^\circ$ (`rotate(45deg)`).
3. **GPU-Accelerated Blade Translation:** `@keyframes swordSlashSweep` translates the blade across the button (`translate3d(-120%, -120%, 0)` $\rightarrow$ `translate3d(120%, 120%, 0)`) with `will-change: transform, opacity` to deliver smooth 60 FPS slash feedback.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, semantic button markup, and gracefully disables diagonal blade animations when `@media (prefers-reduced-motion: reduce)` is enabled.
