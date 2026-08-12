# Sandbox Showcase: Bouncing Spring Pure CSS Button

## Overview
A lightweight, pure CSS/HTML tactile button component designed for high-impact call-to-actions, gaming HUDs, web3 cockpits, and dark-mode dashboards. It mimics mechanical spring compression upon click/keypress (`:active`) followed by an elastic overshoot rebound using custom cubic-bezier timing curves (`cubic-bezier(0.68, -0.6, 0.32, 1.6)`), hardware-accelerated 3D scale transforms, and glassmorphism without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting interactive bouncing spring button variants.
* `style.css` — Scoped layout modifier specifying spring compression curves, 3D scale transforms, glow filters, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--spring-cyan` | `#00f3ff` | Primary cyan accent color |
| `--spring-magenta` | `#ff0055` | Secondary magenta glow color |
| `--spring-cyan-glow` | `rgba(0, 243, 255, 0.4)` | Ambient glowing shadow for primary button |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for button body |
| `--spring-speed` | `600ms` | Transition duration for spring rebound release |
| `--spring-curve` | `cubic-bezier(0.68, -0.6, 0.32, 1.6)` | Mechanical spring overshoot timing curve |

## 🛠️ How It Works

1. **Mechanical Compression Phase:** Pressing the button triggers `:active`, squishing it down (`transform: translate3d(0, 4px, 0) scale3d(0.92, 0.88, 1)`).
2. **Elastic Overshoot Rebound:** Releasing the button triggers the custom `cubic-bezier(0.68, -0.6, 0.32, 1.6)` curve, springing the button slightly past its default size before settling smoothly.
3. **GPU-Accelerated Performance:** Uses `transform: translate3d(...) scale3d(...)` with `will-change: transform` to deliver smooth 60 FPS spring physics without triggering layout reflows.
4. **Accessibility Built-In:** Supports native keyboard interaction (`Space` / `Enter` activate `:active`), includes explicit `:focus-visible` rings, and gracefully disables spring movement when `@media (prefers-reduced-motion: reduce)` is enabled.
