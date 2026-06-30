# Dashboard Motion Kit

## Overview

Dashboard Motion Kit provides dashboard-specific EaseMotion utilities optimized for SaaS products, admin panels, analytics dashboards, and data-driven interfaces.

The submission includes semantic classes for KPI counters, chart reveals, and coordinated dashboard section entrances.

## Utilities

- `.ease-stat-counter`
- `.ease-chart-reveal`
- `.ease-dashboard-entry`

## How to use it

Add the utility to dashboard cards, chart containers, or widget groups:

```html
<div class="dashboard-card ease-stat-counter">
  <span class="metric">$42,500</span>
  <span class="label">Monthly Revenue</span>
</div>

<section class="chart-panel ease-chart-reveal">
  <h3>Growth trend</h3>
  <div class="chart-shell">...</div>
</section>

<div class="widget-group ease-dashboard-entry">
  <article class="widget">Users</article>
  <article class="widget">Revenue</article>
  <article class="widget">Growth</article>
</div>
```

## Why it fits EaseMotion CSS

Dashboard Motion Kit extends EaseMotion CSS with readable motion utilities that feel at home in data-rich interfaces. Each utility uses opacity and transform to keep animation lightweight, accessible, and compatible with modern browser layouts.

## Examples

### KPI cards
Use `.ease-stat-counter` for revenue metrics, user counts, and performance indicators.

### Revenue dashboards
Use `.ease-chart-reveal` for chart panels, analytics tiles, and report cards.

### Analytics panels
Use `.ease-dashboard-entry` to animate dashboard section load states and widget groups.

### Admin interfaces
Combine the utilities across widgets, tables, and overview sections for a polished admin experience.

### SaaS products
Use the classes to improve first impressions in product dashboards and internal analytics pages.

## Accessibility

The feature honors `prefers-reduced-motion: reduce` by disabling motion and preserving layout structure. Use the utilities for visual polish without sacrificing accessibility.

## Production notes

- Uses CSS custom properties for timing and easing.
- Animations only use `transform` and `opacity` where possible.
- Designed to be lightweight and compatible with existing EaseMotion utilities.

Open `demo.html` directly in a browser to preview the animations.
