# Sandbox Showcase: CSS Card Magazine Grid

## Overview
A lightweight, pure CSS/HTML editorial magazine grid component designed for news portals, blogs, and feature showcases. It combines an asymmetrical $2\times2$ lead story layout with `transform: scale(1.02)` scale-lift dynamics, glassmorphism, and responsive column collapsing without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive editorial magazine grid.
* `style.css` — Scoped layout modifier specifying CSS Grid templates, grid-span rules, scale-lift transforms, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color for hero stories |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color for featured stories |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for cyan cards |
| `--neon-magenta-glow` | `rgba(255, 0, 85, 0.35)` | Ambient glowing shadow for magenta cards |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for magazine cards |
| `--mag-speed` | `400ms` | Transition duration for card scale and hover sweeps |
| `--mag-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS Asymmetrical Layout:** Uses CSS Grid with `grid-column: span 2` and `grid-row: span 2` to highlight the primary lead article.
2. **GPU-Accelerated Scaling:** `transform: scale(1.02) translate3d(0, -6px, 0)` with `will-change: transform` delivers tactile physical lift feedback on mouse hover or focus without triggering layout reflows.
3. **Responsive Editorial Collapse:** Automatically collapses multi-column spans into a single stacked layout on viewports under $720\text{px}$.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, `role="region"` semantics, and gracefully disables scale transitions when `@media (prefers-reduced-motion: reduce)` is enabled.
