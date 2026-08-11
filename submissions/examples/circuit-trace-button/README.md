# Sandbox Showcase: CSS Circuit Trace Button

## Overview
A lightweight, pure CSS/HTML call-to-action component designed for developer portals, gaming HUDs, AI tech landing pages, and dark-mode dashboards. It combines SVG vector stroke path offset animations (`stroke-dasharray`, `stroke-dashoffset`) with `@keyframes traceSweep`, glowing node filters, and GPU-promoted scale-lift transforms without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive circuit trace button.
* `style.css` — Scoped layout modifier specifying stroke dashoffsets, keyframe trace sweeps, node glow filters, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color for top trace lines |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color for bottom trace lines |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for active button state |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for button |
| `--circuit-speed` | `400ms` | Transition duration for stroke offset sweeps |
| `--circuit-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS Stroke Offset Animation:** Uses `stroke-dasharray: 400` and `stroke-dashoffset: 400` on SVG `<path>` elements to hide traces in the default state.
2. **Hover Sweep Trigger:** Hovering or focusing the button (`.alm-circuit-btn:hover .alm-trace-line`) sets `stroke-dashoffset: 0` and executes `@keyframes traceSweep`.
3. **GPU-Accelerated Scaling:** `transform: scale(1.03) translate3d(0, -2px, 0)` with `will-change: transform, stroke-dashoffset` delivers smooth 60 FPS lift feedback without layout reflows.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, hides decorative SVG from screen readers (`aria-hidden="true"`), and gracefully disables stroke animations when `@media (prefers-reduced-motion: reduce)` is enabled.
