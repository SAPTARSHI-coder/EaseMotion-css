# Sandbox Showcase: CSS Morph-Glow Tabs for Cyberpunk Neon Layouts

## Overview
A lightweight, pure CSS/HTML tab navigation component designed for futuristic dashboards, cyberpunk UI themes, and gaming control panels. It combines `transform: translateX()` indicator morphing with backdrop blur filters and radio button state bindings to deliver smooth hardware-accelerated view transitions without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting interactive morphing tabs and content panels.
* `style.css` — Scoped layout modifier specifying indicator morphing, panel scale/translate transitions, and neon color themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for active tab indicator |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.92)` | Glassmorphic surface color for panels |
| `--tab-speed` | `350ms` | Transition duration for tab morphing and panel switches |
| `--tab-ease` | `cubic-bezier(0.25, 1, 0.5, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS State Machine:** A set of hidden `<input type="radio">` elements retains the active tab index state.
2. **Sibling Selector Bindings:** `#tab-1:checked ~ .alm-sandbox-stage .alm-tab-indicator` slides the glowing highlight box across the tab track.
3. **GPU-Accelerated Morphing & Switching:** Uses `transform: translateX()` for the morph indicator and `transform: scale() translate3d()` for content panels to ensure silky-smooth 60 FPS performance.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard controls, ARIA landmark roles (`tablist`, `tab`, `tabpanel`), and gracefully disables indicator sliding when `@media (prefers-reduced-motion: reduce)` is enabled.
