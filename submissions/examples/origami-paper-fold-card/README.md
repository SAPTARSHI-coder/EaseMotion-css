# Sandbox Showcase: Origami Paper Fold Pure CSS Card

## Overview
A lightweight, pure CSS/HTML card component designed for creative agency portfolios, web3 dashboards, product feature cards, and dark-mode web applications. It combines CSS $3\text{D}$ perspective planes (`perspective: 1000px`) with polygon clipping (`clip-path: polygon(...)`), hardware-accelerated rotational transforms (`transform: rotate3d(...)`), glassmorphic backplates, and dark cyberpunk styling without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive origami paper fold card.
* `style.css` — Scoped layout modifier specifying clip-path polygon paper flaps, $3\text{D}$ fold transforms, glow filters, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--origami-cyan` | `#00f3ff` | Primary cyan accent color for badges and fold flap |
| `--origami-magenta` | `#ff0055` | Secondary magenta glow color for interior fold |
| `--origami-cyan-glow` | `rgba(0, 243, 255, 0.4)` | Ambient glowing shadow for open card |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for card body |
| `--fold-speed` | `450ms` | Transition duration for $3\text{D}$ paper fold animations |
| `--fold-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Polygon Paper Facet Geometry:** Corner fold flaps apply `clip-path: polygon(0 0, 100% 100%, 0 100%)` to shape realistic paper triangle facets.
2. **GPU-Accelerated $3\text{D}$ Flap Rotation:** Hovering or focusing the card (`.alm-origami-card:hover`) tilts the card along $3\text{D}$ axes (`transform: rotateX(...) rotateY(...)`) while lifting and scaling the corner flap.
3. **Glassmorphic Backplate:** Places text content inside a frosted glass layer (`backdrop-filter: blur(16px)`) positioned over the paper structure.
4. **Accessibility Built-In:** Supports native keyboard interaction (`tabindex="0"` focusability), includes explicit `:focus-visible` rings, `role="region"` semantics, visually hidden screen-reader guidance (`.sr-only`), and gracefully halts $3\text{D}$ paper movement when `@media (prefers-reduced-motion: reduce)` is enabled.
