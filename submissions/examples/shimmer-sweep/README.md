# Sandbox Showcase: CSS Shimmer-Sweep Navbar for Minimalist Tech Layouts

## Overview
A lightweight, pure CSS/HTML navigation header component designed for developer dashboards, SaaS applications, and tech landing pages. It combines `@keyframes shimmerSweep` ambient gradient sweeps with glassmorphism and active link indicators to deliver smooth navbar illumination without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive shimmer-sweep navbar.
* `style.css` — Scoped layout modifier specifying linear gradient angles, keyframe shimmer sweeps, active page indicators, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for active link and navbar border |
| `--neon-magenta-glow` | `rgba(255, 0, 85, 0.35)` | Ambient glowing shadow for CTA button |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.92)` | Glassmorphic surface color for navbar |
| `--nav-speed` | `350ms` | Transition duration for link hover and active states |
| `--shimmer-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS Shimmer Overlay:** An `::before` pseudo-element with `linear-gradient(90deg)` creates an angled light beam across the navbar surface.
2. **GPU-Accelerated Shimmer Sweeps:** `@keyframes shimmerSweep` continuously animates `transform: translate3d()` across the pseudo-overlay to achieve 60 FPS ambient light passes without layout reflows.
3. **Active Page Highlights:** Uses standard `[aria-current="page"]` attributes to render active navigation indicators with cyan glows.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, semantic `<nav>` markup, and gracefully disables keyframe shimmer sweeps when `@media (prefers-reduced-motion: reduce)` is enabled.
