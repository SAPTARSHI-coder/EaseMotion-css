# Sandbox Showcase: CSS Vertical Milestone Timeline for Minimalist Tech Layouts

## Overview
A lightweight, pure CSS/HTML timeline roadmap component designed for product journey displays, company history logs, and project milestone cards. It combines pseudo-element spine lines (`::before`), glowing node indicator dots, frosted glass surfacing (`backdrop-filter: blur(12px)`), and GPU-accelerated horizontal card translations on hover without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive vertical milestone timeline.
* `style.css` — Scoped layout modifier specifying connecting spine lines, node glow markers, card offset transforms, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color for active nodes |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for standard nodes |
| `--neon-magenta-glow` | `rgba(255, 0, 85, 0.35)` | Ambient glowing shadow for active nodes |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.85)` | Glassmorphic surface color for milestone cards |
| `--timeline-speed` | `350ms` | Transition duration for card translation and node scaling |
| `--timeline-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS Connecting Spine:** An `.alm-timeline-track::before` pseudo-element draws a continuous vertical line linking all milestone items.
2. **Glowing Node Markers:** `.alm-timeline-item::before` pseudo-elements render glowing circular node indicators directly on the spine line.
3. **GPU-Accelerated Card Offsets:** Hovering a milestone card triggers `transform: translate3d(8px, 0, 0)` with `will-change: transform` to deliver a smooth 60 FPS horizontal offset response.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, semantic list structures (`role="list"`), and gracefully disables hover offset translation when `@media (prefers-reduced-motion: reduce)` is enabled.
