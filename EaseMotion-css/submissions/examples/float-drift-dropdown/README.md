# Sandbox Showcase: CSS Float-Drift Dropdown for Minimalist Tech Layouts

## Overview
A lightweight, pure CSS/HTML floating menu component designed for developer dashboards, navbar utilities, and action menus. It combines `@keyframes floatDrift` continuous floating physics with focus/hover state reveals and glassmorphism to deliver smooth interactive menu transitions without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive float-drift dropdown.
* `style.css` — Scoped layout modifier specifying floating keyframes, dropdown scale/translate entrance states, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for trigger button |
| `--neon-magenta-glow` | `rgba(255, 0, 85, 0.35)` | Ambient glowing shadow for dropdown menu border |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.92)` | Glassmorphic surface color for menu panel |
| `--dropdown-speed` | `350ms` | Transition duration for dropdown entrance and items |
| `--drift-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS State Machine:** Driven by CSS `:focus-within` and `:hover` selectors on the wrapper container.
2. **Continuous Floating Drift:** `@keyframes floatDrift` continuously modulates `transform: translate3d(0, -6px, 0)` on the trigger button to simulate dynamic floating mechanics.
3. **GPU-Accelerated Menu Entrance:** Animates `opacity: 0` with `transform: translate3d(-50%, -12px, 0) scale(0.95)` to `opacity: 1` and `transform: translate3d(-50%, 0, 0) scale(1)` with `will-change: transform`.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, ARIA menu roles (`role="menu"`, `role="menuitem"`), and gracefully disables floating keyframe animations when `@media (prefers-reduced-motion: reduce)` is enabled.
