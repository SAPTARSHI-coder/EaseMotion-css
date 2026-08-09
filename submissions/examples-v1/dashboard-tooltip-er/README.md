# Dashboard Horizontal Roll Tooltip

Pure CSS tooltip with a smooth horizontal roll-in animation, styled for responsive dashboard interfaces.

## What it is

A CSS-only tooltip component that slides in horizontally when the user hovers or focuses a trigger element. Designed for dashboard contexts: KPI cards, chart legends, data tables, and metric detail triggers.

Two animation directions:
- **Roll Left** — tooltip appears to the left, sliding in from the right
- **Roll Right** — tooltip appears to the right, sliding in from the left

## How it works

The tooltip uses CSS `translateX()` animations triggered by `:hover` and `:focus-visible` pseudo-classes. No JavaScript is used.

```css
/* Trigger focus/hover reveals tooltip */
.kpi-card__info:hover ~ .tooltip--roll-right {
    animation: ease-kf-roll-in-right 0.3s cubic-bezier(.4,0,.2,1) forwards;
}
```

Key techniques:
- `translateX()` for horizontal slide motion
- `ease-kf-roll-in-left` / `ease-kf-roll-in-right` keyframes for directional entry
- `aria-describedby` links trigger to tooltip content
- `role="tooltip"` for screen reader semantics
- CSS custom properties for full theme control

## Why it matters

Dashboard users need contextual information without navigating away. Horizontal roll tooltips provide a non-intrusive way to surface data details, calculation methods, and metric definitions directly at the point of interest.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Full dashboard demo with KPI cards, chart, and data table |
| `style.css` | All tooltip styles, dashboard layout, and animations |

## Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ez-tooltip-roll-distance` | `20px` | Horizontal travel distance |
| `--ez-tooltip-duration` | `0.3s` | Animation duration |
| `--ez-tooltip-easing` | `cubic-bezier(.4,0,.2,1)` | Timing function |
| `--ez-tooltip-bg` | `#1e293b` | Background color |
| `--ez-tooltip-color` | `#f1f5f9` | Text color |
| `--ez-tooltip-accent` | `#38bdf8` | Accent highlight color |

## Keyframes

- `ease-kf-roll-in-left` — slides in from right (+20px → 0)
- `ease-kf-roll-in-right` — slides in from left (-20px → 0)

## Issue

Closes #46264