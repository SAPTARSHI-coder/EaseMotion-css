# Sandbox Showcase: CSS Gravity Well Button

## Overview
A lightweight, pure CSS/HTML call-to-action component designed for futuristic landing pages, cyberpunk control cockpits, and developer dashboards. It uses the relational `:has()` CSS selector (`.alm-gravity-system:has(.alm-gravity-btn:hover)`) to pull surrounding orbital node elements inward toward the primary CTA button when the user hovers or focuses on the button without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive gravity well button system.
* `style.css` — Scoped layout modifier specifying orbital node positions, `:has()` relational selectors, translate3d transforms, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color for pulled nodes |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for gravity button |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for system envelope |
| `--gravity-speed` | `400ms` | Transition duration for gravitational node translation |
| `--gravity-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Relational Inward Pull (`:has()`):** Uses `.alm-gravity-system:has(.alm-gravity-btn:hover) .alm-node-top-left` to detect button hover/focus on parent container level.
2. **GPU-Accelerated Node Displacement:** Surrounding node elements apply `transform: translate3d(45px, 35px, 0) scale(0.9)` with `will-change: transform` to pull inward cleanly without layout reflows.
3. **Interactive Micro-Feedback:** Button scales up (`scale(1.05)`) with an intensified neon glow when activated.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, `role="region"` semantics, and gracefully disables node movement when `@media (prefers-reduced-motion: reduce)` is enabled.
