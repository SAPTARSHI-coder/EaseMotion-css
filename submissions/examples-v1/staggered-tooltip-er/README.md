# Staggered Entrance Tooltip – Dashboard Analytics

Pure CSS tooltip with a smooth staggered entrance animation, styled for dashboard analytics interfaces.

## What it is

A CSS-only tooltip component where multiple tooltips in a group animate in sequentially with configurable delays. Designed for analytics dashboards: KPI cards, chart legends, funnel steps, and data tables.

Each tooltip uses a `--stagger-index` custom property to calculate its animation delay, creating a cascading entrance effect.

## How it works

The tooltip uses CSS `translateY()` + `scale()` animations with `animation-delay` calculated from the stagger index. No JavaScript is used.

```css
/* Each tooltip gets a delay based on its index */
.tooltip--stagger {
    animation-delay: calc(var(--stagger-index) * var(--ez-tooltip-stagger-delay));
}

/* On hover/focus, staggered entrance */
.kpi__info:hover ~ .tooltip--stagger {
    animation: ease-kf-stagger-in 0.28s ease-out forwards;
    animation-delay: calc(var(--stagger-index) * 60ms);
}
```

Key techniques:
- `--stagger-index` on each tooltip element controls delay position
- `calc(var(--stagger-index) * var(--ez-tooltip-stagger-delay))` for timing
- `ease-kf-stagger-in` keyframe with `translateY()` + `scale()` for entrance
- `aria-describedby` links trigger to tooltip content
- `role="tooltip"` for screen reader semantics

## Why it matters

Analytics dashboards often display groups of related metrics. Staggered tooltips provide a polished, professional feel when revealing related data points — showing context in a deliberate, readable sequence rather than all at once.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Full analytics dashboard with KPIs, donut chart, funnel, and table |
| `style.css` | All tooltip styles, dashboard layout, and stagger animations |

## Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ez-tooltip-stagger-delay` | `60ms` | Delay per stagger index |
| `--ez-tooltip-duration` | `0.28s` | Animation duration |
| `--ez-tooltip-scale` | `0.85` | Initial scale for entrance |
| `--ez-tooltip-bg` | `#1e293b` | Background color |
| `--ez-tooltip-color` | `#f1f5f9` | Text color |
| `--ez-tooltip-accent` | `#38bdf8` | Accent highlight color |

## Keyframes

- `ease-kf-stagger-in` — scale from 0.85 to 1.0 with translateY and fade-in
- `ease-kf-stagger-out` — reverse animation for hide

## Issue

Closes #46269