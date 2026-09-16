# Sandbox Showcase: Cyberpunk HUD Radar Scanner

## Overview
A lightweight, pure CSS/HTML telemetry component designed for sci-fi landing pages, gaming HUDs, web3 cockpits, and dark-mode dashboards. It combines conic gradient light beams (`conic-gradient(...)`) with $360^\circ$ rotational sweep keyframes (`@keyframes radarSweep`), target lock ping animations, concentric reticle geometry, and glassmorphic card framing without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive radar scanner.
* `style.css` — Scoped layout modifier specifying conic beam gradients, rotational sweep keyframe passes, target pings, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--radar-cyan` | `#00f3ff` | Primary cyan accent color for reticle and beam |
| `--radar-magenta` | `#ff0055` | Secondary magenta glow color for target pings |
| `--radar-emerald` | `#10b981` | Tertiary emerald target ping color |
| `--radar-cyan-glow` | `rgba(0, 243, 255, 0.4)` | Ambient glowing shadow for active radar ring |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for card body |
| `--radar-speed` | `4s` | Keyframe duration for $360^\circ$ rotational sweeps |
| `--radar-ease` | `linear` | Continuous linear timing curve for beam sweep |

## 🛠️ How It Works

1. **Conic Light Cone Beam:** Applies `conic-gradient(from 0deg at 50% 50%, rgba(0, 243, 255, 0.45) 0deg, ...)` to generate a fading phosphor radar beam trail.
2. **GPU-Accelerated Sweep Rotation:** `@keyframes radarSweep` rotates the beam $360^\circ$ continuously with `will-change: transform`.
3. **Pulsing Target Lock Pings:** Target elements (`.alm-radar-target`) animate opacity and scale (`@keyframes targetPing`) to simulate detected contacts on the grid.
4. **Accessibility Built-In:** Supports native keyboard interaction (`tabindex="0"` focusability), explicit `:focus-visible` rings, `role="region"` semantics, and gracefully halts rotation when `@media (prefers-reduced-motion: reduce)` is enabled.
