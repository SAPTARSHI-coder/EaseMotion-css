# Sandbox Showcase: CSS Split Navigation

## Overview
A lightweight, pure CSS/HTML curtain navigation component designed for landing pages, portfolio headers, and cyberpunk dashboards. It uses a checkbox state controller (`:checked ~`) to separate the screen into two halves that slide apart in opposing directions (`translateX(-100%)` / `translateX(100%)`) on open, revealing underlying navigation links and glassmorphic telemetry cards without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive split navigation overlay.
* `style.css` — Scoped layout modifier specifying split panel translate transforms, staggered link delays, checkbox state bindings, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color for left curtain border and links |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color for right curtain border |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for trigger button |
| `--neon-magenta-glow` | `rgba(255, 0, 85, 0.35)` | Ambient glowing shadow for active state button |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.92)` | Glassmorphic surface color for split curtains |
| `--split-speed` | `550ms` | Transition duration for curtain split separation |
| `--split-ease` | `cubic-bezier(0.77, 0, 0.175, 1)` | Acceleration/deceleration cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS State Machine:** A hidden `<input type="checkbox">` element retains open/closed navigation state.
2. **GPU-Accelerated Split Separation:** `.alm-split-checkbox:checked ~ .alm-sandbox-stage .alm-split-panel-left` translates left (`translateX(-100%)`) while `.alm-split-panel-right` translates right (`translateX(100%)`) with `will-change: transform`.
3. **Staggered Menu Link Reveals:** Menu items apply incremental `transition-delay` offsets (200ms, 300ms, 400ms, 500ms) to cascade smoothly into view as the split curtain parts.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, semantic `<nav>` markup, and gracefully disables split translation physics when `@media (prefers-reduced-motion: reduce)` is enabled.
