# Sandbox Showcase: Metallic Sheen Pure CSS Form

## Overview
A lightweight, pure CSS/HTML form component designed for security access panels, web3 authentication, developer control desks, and dark-mode dashboards. It combines brushed titanium input fields (`#0d1117`) with focus-triggered metallic sheen reflection passes (`@keyframes metallicSheen`), hardware-accelerated background sweeps (`background-position: -200% 0` $\rightarrow$ `200% 0`), and glassmorphism without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive metallic sheen authentication form.
* `style.css` — Scoped layout modifier specifying brushed titanium inputs, focus sheen keyframe passes, metallic bevel borders, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--metallic-steel` | `#8a99a8` | Primary polished steel accent color for borders |
| `--metallic-cyan` | `#00f3ff` | Secondary cyan glow color for input focus states |
| `--metallic-cyan-glow` | `rgba(0, 243, 255, 0.4)` | Ambient glowing shadow for active input wrapper |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(13, 17, 23, 0.88)` | Glassmorphic surface color for form card |
| `--sheen-speed` | `1.2s` | Keyframe duration for metallic reflection sweeps |
| `--sheen-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Brushed Metallic Bevel Construction:** Input fields use a linear gradient backplate with `border: 1px solid rgba(138, 153, 168, 0.3)` to emulate polished steel borders.
2. **GPU-Accelerated Reflection Sheen:** Focusing an input (`.alm-input-wrapper:focus-within`) fires `@keyframes metallicSheen` across a pseudo-element (`::before`), sweeping a light reflection gradient smoothly across the field.
3. **Tactile Button Sheen:** Hovering or clicking the submit button triggers matching metallic sheen passes over dark titanium surfaces.
4. **Accessibility Built-In:** Uses explicit `<label for="...">` element bindings, supports native keyboard focus navigation with `:focus-visible` rings, `role="region"` semantics, and gracefully halts sheen sweeps when `@media (prefers-reduced-motion: reduce)` is enabled.
