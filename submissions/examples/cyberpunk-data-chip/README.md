# Sandbox Showcase: CSS Cyberpunk Data Chip

## Overview
A lightweight, pure CSS/HTML futuristic data chip component designed for gaming HUDs, web3 interfaces, and developer dashboards. It combines cut-corner notch styling, connector pin visuals, `@keyframes pulseGlow` ambient lighting, and radio-button state management to cycle telemetry views without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive cyberpunk data chip unit.
* `style.css` — Scoped layout modifier specifying cut-corner pseudo-elements, connector pin grids, scale-lift transforms, and neon cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color for cipher state |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for cyan cards |
| `--neon-magenta-glow` | `rgba(255, 0, 85, 0.35)` | Ambient glowing shadow for magenta cards |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for chip card |
| `--chip-speed` | `400ms` | Transition duration for card scale and view swaps |
| `--chip-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS State Machine:** A set of hidden `<input type="radio">` elements retains the active data mode state (Telemetry, Cipher, Specs).
2. **Sibling Selector Bindings:** `#mode-cipher:checked ~ .alm-sandbox-stage .alm-chip-card` shifts accent border colors to neon magenta and toggles visible telemetry panels.
3. **GPU-Accelerated Scaling:** `transform: scale(1.02) translate3d(0, -6px, 0)` on hover delivers tactile physical lift feedback without triggering main-thread layout reflows.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, `role="region"` semantics, and gracefully disables scale transitions when `@media (prefers-reduced-motion: reduce)` is enabled.
