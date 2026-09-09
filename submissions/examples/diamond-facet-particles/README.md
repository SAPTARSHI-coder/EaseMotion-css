# Sandbox Showcase: Diamond Facet Edge Particle Effect

## Overview
A lightweight, pure CSS/HTML 3D crystalline particle component designed for high-end product showcases, web3 landing pages, luxury brand headers, and dark-mode dashboards. It combines CSS 3D perspective planes (`perspective: 1000px`) with `@keyframes diamondFloat` 3D rotation/translation cycles, geometric diamond clipping (`clip-path: polygon(...)`), multi-stop prismatic gradients, and glassmorphic card framing without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive 3D diamond particle viewport.
* `style.css` — Scoped layout modifier specifying clip-path polygon facets, 3D float keyframes, prismatic gradients, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--diamond-cyan` | `#00f3ff` | Primary cyan accent color for crystal highlights |
| `--diamond-magenta` | `#ff0055` | Secondary magenta glow color for facet shading |
| `--diamond-blue` | `#3b82f6` | Intermediate blue gradient accent |
| `--diamond-cyan-glow` | `rgba(0, 243, 255, 0.4)` | Ambient glowing shadow for crystal shards |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for stage |
| `--diamond-speed` | `6s` | Keyframe duration for 3D spatial float cycles |
| `--facet-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Polygon Facet Geometry:** Uses `clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)` to slice diamond crystal shards natively in CSS.
2. **GPU-Accelerated 3D Float Sequences:** `@keyframes diamondFloat1` animates spatial transforms (`transform: translate3d(...) rotateX(...) rotateY(...)`) with `will-change: transform` to deliver smooth 60 FPS floating physics without triggering layout reflows.
3. **Interactive Prismatic Lock:** Hovering or focusing the viewport container (`.alm-diamond-stage-viewport:hover`) pauses floating keyframe passes and expands the shards forward into an open prismatic formation.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, `role="region"` semantics, visually hidden screen-reader guidance (`.sr-only`), and gracefully halts 3D rotation cycles when `@media (prefers-reduced-motion: reduce)` is enabled.
