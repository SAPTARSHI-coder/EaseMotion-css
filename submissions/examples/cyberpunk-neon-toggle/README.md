# Sandbox Showcase: Cyberpunk Neon Toggle Switch

## Overview
A lightweight, pure CSS/HTML toggle switch component designed for dark-mode web applications, settings dashboards, gaming cockpits, and developer control panels. It combines pure CSS checkbox state binding (`:checked ~ .alm-toggle-track`) with hardware-accelerated 3D flip transforms (`transform: translate3d(...) rotateY(180deg)`), neon cyan/magenta glow state transitions, and glassmorphism without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting interactive toggle switch variants.
* `style.css` — Scoped layout modifier specifying checkbox state binding, 3D flip physics, neon glow state transitions, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan glow color for ON state |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color for OFF indicator |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.45)` | Ambient glowing shadow for active track |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for card body |
| `--toggle-speed` | `350ms` | Transition duration for thumb flip physics |
| `--toggle-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS State Engine:** Toggling an invisible `<input type="checkbox">` updates the sibling track via `.alm-toggle-checkbox:checked ~ .alm-toggle-track`.
2. **GPU-Accelerated 3D Flip:** Switching state translates and flips the thumb handle along the Y-axis (`transform: translate3d(34px, 0, 0) rotateY(180deg)`) with `will-change: transform`.
3. **Neon Glow Transitions:** Transitions background gradients, border colors, and box-shadows smoothly between OFF (magenta accent) and ON (cyan illumination) states.
4. **Accessibility Built-In:** Supports native keyboard interaction (`Space` / `Enter` toggle states), includes explicit `:focus-visible` rings, `role="switch"` semantics, and gracefully disables 3D flip physics when `@media (prefers-reduced-motion: reduce)` is enabled.
