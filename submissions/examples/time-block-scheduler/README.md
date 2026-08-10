# Sandbox Showcase: CSS Time Block Scheduler

## Overview
A lightweight, pure CSS/HTML daily scheduler component designed for productivity dashboards, calendar planners, and task management views. It combines category filtering using radio inputs (`:checked ~`), color-coded category badges, and GPU-accelerated card hover/focus slide-lift interactions without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive daily time block scheduler.
* `style.css` — Scoped layout modifier specifying time block grids, radio filter rules, category color themes, and dark cyberpunk aesthetics.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color for Focus blocks |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color for Sync blocks |
| `--neon-emerald` | `#10b981` | Emerald accent color for Rest blocks |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for Focus cards |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for schedule cards |
| `--block-speed` | `350ms` | Transition duration for card hover and filter passes |
| `--block-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS Filtering Engine:** Uses hidden `<input type="radio">` state controllers and sibling selectors (`#filter-focus:checked ~ .alm-sandbox-stage .alm-time-block:not([data-category="focus"]) { display: none; }`) to filter scheduled time blocks cleanly.
2. **GPU-Accelerated Card Offsets:** `transform: translate3d(6px, 0, 0) scale(1.01)` on hover delivers tactile physical slide feedback without triggering layout reflows.
3. **Category Color Variants:** Custom data attributes (`data-category="focus|sync|rest"`) dynamically style time labels, badges, and glow borders.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, `role="region"` semantics, and gracefully disables slide transitions when `@media (prefers-reduced-motion: reduce)` is enabled.
