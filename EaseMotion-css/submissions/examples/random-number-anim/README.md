# Sandbox Showcase: CSS Random Number Anim

## Overview
A lightweight, pure CSS/HTML numeric slot generator component designed for web3 crypto tickers, gaming HUDs, security code generators, and telemetry dashboards. It demonstrates modern CSS counter properties (`counter-reset`, `counter-increment`), `@property <integer>` animation interpolation, pseudo-element string rendering (`content: counter(...)`), and checkbox state controllers without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive random number slot generator.
* `style.css` — Scoped layout modifier specifying `@property` integer definitions, keyframe counter-reset sequences, slot card framing, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color for digits 1 & 2 |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color for digits 3 & 4 |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for slot card |
| `--neon-magenta-glow` | `rgba(255, 0, 85, 0.35)` | Ambient glowing shadow for digits 3 & 4 |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for slot card |
| `--roll-speed-1` | `1.8s` | Roll duration for digit slot 1 |
| `--roll-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **CSS Registered Integer Properties:** Defines registered custom properties (`@property --num-val-1 { syntax: "<integer>"; }`) to enable smooth numeric keyframe interpolation.
2. **Keyframe Value Passes:** `@keyframes rollDigit1` transitions integer values from `0` through `7`, `3`, `9` to `8`.
3. **Pseudo-Element String Counter Output:** `.alm-digit-1` applies `counter-reset: num1 var(--num-val-1)` and renders numbers via `content: counter(num1)`.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, live region announcements (`aria-live="polite"`), and gracefully disables numeric rolling when `@media (prefers-reduced-motion: reduce)` is enabled.
