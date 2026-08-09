# Sandbox Showcase: CSS Bounce-Pulse Tabs for Cyberpunk Neon Layouts

## Overview
A lightweight, pure CSS/HTML tab navigation component designed for futuristic dashboards, cyberpunk UI themes, and gaming control panels. It combines `cubic-bezier(0.68, -0.55, 0.265, 1.55)` spring physics sliding, `@keyframes` neon pulsing, and radio button state bindings to deliver smooth hardware-accelerated view transitions without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting interactive bounce-pulse tabs and content panels.
* `style.css` — Scoped layout modifier specifying spring bounce sliding, keyframe pulsing, and neon color themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for active indicator |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.92)` | Glassmorphic surface color for panels |
| `--tab-speed` | `450ms` | Transition duration for tab sliding and panel switches |
| `--bounce-ease` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Spring overshoot cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS State Machine:** A set of hidden `<input type="radio">` elements retains the active tab index state.
2. **Sibling Selector Bindings:** `#tab-1:checked ~ .alm-sandbox-stage .alm-tab-indicator` slides the glowing highlight box with elastic spring physics across the tab track.
3. **GPU-Accelerated Bounce & Pulse:** Combines `transform: translateX()` elastic sliding with `@keyframes neonPulse` ambient glowing for silky-smooth 60 FPS performance.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard controls, ARIA landmark roles (`tablist`, `tab`, `tabpanel`), and gracefully disables indicator sliding/pulsing when `@media (prefers-reduced-motion: reduce)` is enabled.
