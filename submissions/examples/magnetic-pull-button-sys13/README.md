# Sandbox Showcase: Magnetic Cursor Pull Button (`magnetic-pull-button-sys13`)

## Overview
An interactive call-to-action button component designed for futuristic landing pages, developer cockpits, and dark-mode web applications. It uses a JavaScript Euclidean distance proximity engine ($d = \sqrt{\Delta x^2 + \Delta y^2}$) combined with GPU-accelerated CSS `transform` spring physics to pull the button frame and inner label toward the cursor when within a 100px activation zone.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive magnetic button with proximity telemetry readouts.
* `style.css` — Scoped layout modifier specifying spring overshoot curves, translation base states, glassmorphism, and neon cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for magnetized button |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.85)` | Glassmorphic surface color for button |
| `--spring-ease` | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` | Elastic spring return cubic-bezier curve |

## 🛠️ How It Works

1. **Euclidean Distance Math:** Computes distance between the cursor coordinates and the element center using `Math.hypot(deltaX, deltaY)`.
2. **Proximity Magnetization:** When cursor distance falls within the $100\text{px}$ threshold, the button translates proportional to cursor offset (`deltaX * strength`).
3. **Parallax Depth:** The inner text element translates at a higher strength factor than the outer frame (`PULL_STRENGTH_TEXT = 0.55` vs `PULL_STRENGTH_FRAME = 0.35`), creating a 3D parallax depth effect.
4. **Elastic Return:** Exiting the magnetic zone triggers a CSS spring curve (`cubic-bezier(0.175, 0.885, 0.32, 1.275)`), snapping elements back to origin.
5. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation and gracefully disables displacement when `@media (prefers-reduced-motion: reduce)` is enabled.
