# Sandbox Showcase: CSS Shadow Box Playground

## Overview
A lightweight, pure CSS/HTML visual playground component designed for developer tools, design systems, and component showcases. It enables live real-time previewing and CSS code inspection across multi-layered ambient glow, elevation depth, dual cyberpunk split, and inset shadow profiles without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive shadow box playground canvas.
* `style.css` — Scoped layout modifier specifying stacked `box-shadow` profiles, radio state bindings, code readouts, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for cyan profile |
| `--neon-magenta-glow` | `rgba(255, 0, 85, 0.35)` | Ambient glowing shadow for dual split profile |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for target box |
| `--box-speed` | `450ms` | Transition duration for box-shadow profile morphing |
| `--box-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS State Machine:** Driven by hidden `<input type="radio">` elements and sibling selectors (`#profile-dual:checked ~ .alm-sandbox-stage .alm-target-box`).
2. **Multi-Layer Shadow Interpolation:** Smoothly transitions complex stacked CSS `box-shadow` rules (`box-shadow: -15px 0 30px cyan, 15px 0 30px magenta`) with `will-change: box-shadow`.
3. **Dynamic Code Readouts:** CSS sibling selectors toggle matching `<code>` block displays based on the active radio state.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, `role="region"` semantics, and gracefully simplifies transitions when `@media (prefers-reduced-motion: reduce)` is enabled.
