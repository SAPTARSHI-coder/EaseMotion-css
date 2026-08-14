# Apple-Style Bento Grid Interactive Metrics (GSSoC 2026)

## 1. What does this do?
The **Apple-Style Bento Grid Interactive Metrics** component implements a modern modular bento dashboard layout featuring multi-column card spans, interactive hover spotlight glow overlays (`radial-gradient`), animated metric sparkline frequency bars, and responsive collapse breakpoints.

## 2. How is it used?
Link the stylesheet in your HTML header:
```html
<link rel="stylesheet" href="style.css">
```
Structure your Bento grid layout using CSS grid span utilities:
```html
<div class="bento-grid">
  <article class="bento-card col-span-2 row-span-2">
    <div class="spotlight"></div>
    <div class="metric-big">99.98%</div>
  </article>
</div>
```

## 3. Why is it useful?
- **Modern Apple Dashboard Aesthetics**: Organizes data analytics and system telemetry metrics in clean visual hierarchies.
- **Hardware-Accelerated Hover Effects**: Spotlight radial gradients and card lifts use native CSS transform/opacity compositor layers.
- **Fully Responsive**: Adapts automatically from 4-column desktop grids to single-column mobile viewports.
