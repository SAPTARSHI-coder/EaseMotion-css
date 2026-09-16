# Sandbox Showcase: CSS Team Availability Grid

## Overview
A lightweight, pure CSS/HTML heatmap availability component designed for team dashboards, shift management tools, and project resource planners. It displays team member schedules across hourly slots using CSS Grid, color-coded status badges, focus/hover tooltips, and scale-lift interactions without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive team availability schedule grid.
* `style.css` — Scoped layout modifier specifying CSS Grid templates, color-coded status cells, scale-lift transitions, tooltips, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--status-available` | `#10b981` | Emerald accent color for available slots |
| `--status-busy` | `#f59e0b` | Amber accent color for busy slots |
| `--status-focus` | `#00f3ff` | Cyan accent color for focus mode slots |
| `--status-offline` | `#475569` | Muted slate color for offline slots |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color for headers and borders |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for grid container |
| `--grid-speed` | `300ms` | Transition duration for cell hover and tooltip reveals |
| `--grid-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS Grid Layout:** Uses CSS Grid (`grid-template-columns: 140px repeat(8, 1fr)`) to align member profile headers cleanly with hourly time slots.
2. **Data-Attribute Status Styling:** Cells apply status colors dynamically based on `data-status="available|busy|focus|offline"`.
3. **GPU-Accelerated Cell Offsets:** `transform: scale(1.15) translate3d(0, -3px, 0)` on hover delivers tactile physical lift feedback without triggering layout reflows.
4. **Dynamic Tooltip Popups:** An `::after` pseudo-element reads `aria-label` text to display schedule details on hover/focus.
5. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, semantic ARIA grid roles (`role="grid"`, `role="row"`, `role="gridcell"`), and gracefully simplifies transitions when `@media (prefers-reduced-motion: reduce)` is enabled.
