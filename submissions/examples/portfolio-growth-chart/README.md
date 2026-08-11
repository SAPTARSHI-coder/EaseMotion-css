# Sandbox Showcase: CSS Portfolio Growth Chart

## Overview
A lightweight, pure CSS/HTML financial growth line chart component designed for fintech cockpits, crypto trading desks, and portfolio dashboards. It combines SVG vector stroke path drawing (`stroke-dasharray`, `stroke-dashoffset`) with `@keyframes chartFillSweep` clip-path area fill reveals, interactive data nodes, and glassmorphic telemetry cards without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive portfolio growth chart canvas.
* `style.css` — Scoped layout modifier specifying SVG path stroke offsets, clip-path area fill keyframes, data node tooltips, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-emerald` | `#10b981` | Primary emerald trend color for chart line and nodes |
| `--neon-cyan` | `#00f3ff` | Secondary cyan accent color for headers and tags |
| `--neon-emerald-glow` | `rgba(16, 185, 129, 0.35)` | Ambient glowing shadow for chart line and nodes |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for chart viewport |
| `--chart-speed` | `1.8s` | Keyframe duration for stroke path drawing and fill reveals |
| `--chart-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS Stroke Path Draw:** `@keyframes chartLineDraw` animates `stroke-dashoffset: 1000` to `0` along the SVG `<path>` element.
2. **GPU-Accelerated Gradient Area Fill:** `@keyframes chartFillSweep` animates `clip-path: polygon(...)` across the background gradient fill without causing layout reflows.
3. **Interactive Plot Nodes:** Individual data points (`.alm-data-node`) feature `tabindex="0"` keyboard focusability and display tooltips (`aria-label`) on hover/focus.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, `role="region"` semantics, accessible metric summaries, and gracefully disables stroke animations when `@media (prefers-reduced-motion: reduce)` is enabled.
