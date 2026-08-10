# Sandbox Showcase: CSS Scale-Hover Feature Grid for Minimalist Tech Layouts

## Overview
A lightweight, pure CSS/HTML feature grid layout designed for minimalist tech landing pages, developer dashboards, and product showcase cards. It combines `transform: scale(1.03)` hover dynamics with ambient glowing shadows and icon micro-rotations to deliver tactile interactive feedback without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive 2-column responsive feature grid.
* `style.css` — Scoped layout modifier specifying grid templates, scale-lift transforms, border glow effects, and neon color themes.

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
| `--card-speed` | `350ms` | Transition duration for card scale and icon rotation |
| `--scale-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS Hover State Machine:** Uses CSS `:hover` and `:focus-within` selectors to trigger card scale transformations.
2. **GPU-Accelerated Scaling:** `transform: scale(1.03) translate3d(0, -5px, 0)` with `will-change: transform` delivers a tactile lift effect on mouse hover without triggering main-thread layout reflows.
3. **Micro-Interactions:** Icon badges scale (`scale(1.1)`) and rotate slightly (`rotate(4deg)`) on card hover to enhance interactive feedback.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, `tabindex="0"` on interactive cards, and gracefully disables scale transitions when `@media (prefers-reduced-motion: reduce)` is enabled.
