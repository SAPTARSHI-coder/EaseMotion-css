# Sandbox Showcase: Laser Ray Trace Pure CSS Form

## Overview
A lightweight, pure CSS/HTML form component designed for sci-fi terminal interfaces, security entry points, developer control desks, and dark-mode web applications. It combines SVG vector stroke path tracing (`stroke-dasharray`, `stroke-dashoffset`) with `:focus-within` triggers, glowing laser pulses (`@keyframes laserTrace`), and glassmorphism without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive laser ray trace authentication form.
* `style.css` — Scoped layout modifier specifying SVG laser stroke paths, focus trace keyframe passes, laser glows, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--laser-cyan` | `#00f3ff` | Primary cyan laser color |
| `--laser-magenta` | `#ff0055` | Secondary magenta glow color for pulses |
| `--laser-cyan-glow` | `rgba(0, 243, 255, 0.45)` | Ambient glowing shadow for active input wrapper |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for form card |
| `--laser-speed` | `700ms` | Keyframe duration for laser ray trace sweeps |
| `--laser-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **SVG Vector Laser Paths:** Each input field wrapper embeds an inline SVG `<rect>` element styled with `stroke-dasharray: 400` and `stroke-dashoffset: 400`.
2. **GPU-Accelerated Focus Ray Trace:** Focusing an input (`.alm-input-wrapper:focus-within`) fires `@keyframes laserTrace`, sweeping `stroke-dashoffset` to `0` with `will-change: stroke-dashoffset, opacity`.
3. **Pulsing Laser Glow:** Active ray trace lines loop through `@keyframes laserPulseGlow` to generate glowing drop-shadow effects around the active input.
4. **Accessibility Built-In:** Uses explicit `<label for="...">` bindings, supports native keyboard focus navigation with `:focus-visible` rings, `role="region"` semantics, and gracefully keeps laser lines visible without keyframe animations when `@media (prefers-reduced-motion: reduce)` is enabled.
