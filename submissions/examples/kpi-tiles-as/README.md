# KPI Stat Tiles

### What does this do?

It shows dashboard stat tiles with an icon, a value, a label, and an up or down trend badge, entering with a staggered fade and lifting on hover.

### How is it used?

```html
<div class="kpi">
  <span class="kpi-icon" aria-hidden="true">...</span>
  <span class="kpi-value">$48.2k</span>
  <span class="kpi-label">Revenue</span>
  <span class="kpi-trend up">+12%</span>
</div>
```

Use `kpi-trend up` for a positive change or `kpi-trend down` for a negative one to set the color. Icons are inline SVG, so there are no images to load.

### Why is it useful?

KPI tiles summarise metrics at the top of dashboards. This reveals tiles with a staggered entrance and styles the up and down trend badges, using only CSS. Under `prefers-reduced-motion: reduce` the tiles appear without the entrance animation.
