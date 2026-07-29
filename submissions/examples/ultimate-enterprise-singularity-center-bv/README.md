# Ultimate Enterprise Singularity Center

## What does this do?
Provides an enterprise dashboard layout with stat cards, system health monitoring, activity feed, resource usage progress bars, and key metrics overview — using EaseMotion CSS tokens for colours, spacing, radii, and shadows.

## How is it used?
Add `.esc-dash` as the grid container. Place `.esc-card` elements with column classes (`.esc-col-3`, `.esc-col-4`, `.esc-col-6`, `.esc-col-12`) for responsive sizing. Use `.esc-status`, `.esc-activity`, `.esc-progress`, and `.esc-metric-row` for sub-components.

```html
<div class="esc-dash">
  <div class="esc-card esc-col-3">
    <span class="esc-card-label">Revenue</span>
    <div class="esc-card-value">$2.4M</div>
  </div>
  <div class="esc-card esc-col-4">
    <div class="esc-card-title">System Health</div>
    <div class="esc-status">...</div>
  </div>
</div>
```

## Why is it useful?
Enterprise dashboards require consistent, responsive card layouts that work across screen sizes. This system provides a 12-column grid with reusable panel components for monitoring, activity, and metrics — all themed via EaseMotion tokens and supporting dark mode and reduced motion.
