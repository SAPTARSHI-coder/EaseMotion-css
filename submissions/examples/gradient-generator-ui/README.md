# Sandbox Showcase: CSS Gradient Generator UI

## Overview
A lightweight, pure CSS/HTML visual gradient customizer component designed for developer tools, design systems, theme options, and web development playgrounds. It enables live real-time previewing and CSS code inspection across multi-stop linear gradient presets and angle direction controls without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive CSS gradient generator UI.
* `style.css` — Scoped layout modifier specifying linear gradient preset rules, angle state combinations, radio controllers, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color |
| `--neon-emerald` | `#10b981` | Emerald accent color for Matrix preset |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for controls |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color |
| `--gen-speed` | `450ms` | Transition duration for background gradient morphing |
| `--gen-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS Combinatorial State Machine:** Driven by hidden `<input type="radio">` elements and combined sibling selectors (`#preset-cyber:checked ~ #angle-45:checked ~ .alm-sandbox-stage ...`).
2. **Smooth Gradient Rendering:** Transitions linear gradients (`background-image: linear-gradient(...)`) with `will-change: background-image` for $60\text{fps}$ visual morphing.
3. **Dynamic CSS Code Readouts:** Sibling selectors toggle matching `<code>` block displays showing exact CSS syntax for the selected angle and preset combination.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, `role="region"` semantics, and gracefully simplifies transitions when `@media (prefers-reduced-motion: reduce)` is enabled.
