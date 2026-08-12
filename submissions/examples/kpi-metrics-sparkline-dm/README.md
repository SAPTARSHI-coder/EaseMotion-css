# Live Metrics KPI Card with Sparkline Pulse Trace

An analytical Key Performance Indicator (KPI) Metric Card component featuring animated counter initialization, SVG trend line sparklines with CSS stroke-draw physics, live beacon pulse status indicators, and interactive hover data point inspection tooltips.

## Features

- 📈 **SVG Sparkline Stroke Animation**: Smooth line-drawing animation utilizing `stroke-dasharray` and `stroke-dashoffset` keyframes on view initialization.
- 📐 **Non-Scaling Vector Stroke**: Sparklines maintain a consistent 2.5px width across all responsive container dimensions using `vector-effect="non-scaling-stroke"`.
- 🔢 **Count-Up Metric Counter**: IntersectionObserver-triggered smooth numerical increment animation on page load or viewport entry.
- 🎯 **Interactive Data Point Hover**: Hovering over the graph reveals a vertical alignment guide line, data point highlight dot, and custom formatted value tooltip.
- 🔴 **Live Pulse Beacon**: Status indicator with animated double pseudo-element ring pulse (`@keyframes beaconRingPulse`).

## File Structure

```text
submissions/examples/kpi-metrics-sparkline-dm/
├── demo.html    # Interactive demo showcasing 3 sample KPI cards
├── index.html   # Main entry demo page
├── style.css    # Responsive grid, sparkline gradients, and pulse keyframe animations
├── script.js    # IntersectionObserver, count-up animation, and SVG hover inspection
└── README.md    # Documentation and customization guide
```

## Quick Start

### 1. HTML Structure

```html
<article class="kpi-card kpi-card--positive">
  <div class="kpi-card-header">
    <span class="kpi-label">Total Revenue</span>
    <div class="beacon-pulse"><span class="beacon-dot"></span></div>
  </div>

  <div class="kpi-body">
    <span class="kpi-metric-value" data-target="128450" data-prefix="$">$0</span>
    <span class="kpi-trend-badge trend-up">+14.2%</span>

    <div class="sparkline-container" data-series="[45, 52, 65, 85, 92, 105]">
      <svg class="sparkline-svg" viewBox="0 0 300 70" preserveAspectRatio="none">
        <path class="sparkline-path" vector-effect="non-scaling-stroke" stroke="#10b981" stroke-width="2.5" fill="none" d="..." />
      </svg>
    </div>
  </div>
</article>
```

### 2. Include CSS & JavaScript

```html
<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script>
```

## CSS Custom Properties

| Card Variant | Theme Colors | Border Accent |
| :--- | :--- | :--- |
| `.kpi-card--positive` | Emerald Green (`#10b981`) | `rgba(16, 185, 129, 0.3)` |
| `.kpi-card--info` | Cyan Blue (`#38bdf8`) | `rgba(56, 189, 248, 0.3)` |
| `.kpi-card--negative` | Rose Red (`#f43f5e`) | `rgba(244, 63, 94, 0.3)` |
