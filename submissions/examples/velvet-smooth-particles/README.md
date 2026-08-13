# Sandbox Showcase: Velvet Smooth Transition Pure CSS Particle Effect

## Overview
A lightweight, pure CSS/HTML luxurious particle component designed for high-end portfolio headers, web3 dashboards, creative agency hero sections, and dark-mode web applications. It combines custom cubic-bezier transition curves (`cubic-bezier(0.25, 0.8, 0.25, 1)`) with silky border-radius morphing keyframe passes (`@keyframes velvetDrift1`), multi-layered radial gradient velvet lighting masks, and glassmorphism without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive velvet smooth particle stage.
* `style.css` — Scoped layout modifier specifying velvet lighting masks, morphing keyframe passes, custom easing curves, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--velvet-indigo` | `#4338ca` | Primary indigo background shadow color |
| `--velvet-violet` | `#8b5cf6` | Secondary violet highlight color |
| `--velvet-magenta` | `#d946ef` | Accent magenta color for velvet particle 2 |
| `--velvet-cyan` | `#06b6d4` | Accent cyan color for velvet particle 3 |
| `--velvet-glow` | `rgba(139, 92, 246, 0.35)` | Ambient glowing shadow for stage border |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for stage |
| `--velvet-speed` | `8s` | Keyframe duration for silky morphing passes |
| `--velvet-ease` | `cubic-bezier(0.25, 0.8, 0.25, 1)` | Velvet smooth custom easing curve |

## 🛠️ How It Works

1. **Custom Cubic-Bezier Transitions:** `@keyframes velvetDrift1` applies `cubic-bezier(0.25, 0.8, 0.25, 1)` to generate fluid, organic movement without harsh accelerations.
2. **GPU-Accelerated Morph & Drift:** Animates `border-radius` and spatial transforms (`transform: translate3d(...) scale(...)`) with `will-change: transform` to deliver smooth 60 FPS morphing dynamics without triggering layout reflows.
3. **Interactive Sheen Lock:** Hovering or focusing the viewport container (`.alm-velvet-stage-viewport:hover`) sharpens velvet lighting highlights and expands the particles forward.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard controls, `role="region"` semantics, visually hidden screen-reader guidance (`.sr-only`), and gracefully halts morphing loops when `@media (prefers-reduced-motion: reduce)` is enabled.
