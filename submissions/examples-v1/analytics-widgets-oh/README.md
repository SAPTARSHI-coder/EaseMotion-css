# Component: Analytics Widgets Showcase

This submission implements the Analytics Widgets Showcase for GSSoC issue **#42654**.

## Description

A colorful analytics widgets showcase demonstrating KPI dashboard cards with modern gradients, responsive layouts, and business metrics.

## Features

- **4 KPI Cards**: Revenue, Users, Orders, Avg Time
- **Gradient Backgrounds**: Green, Blue, Purple, Orange
- **Chart Components**: Bar chart and donut chart
- **Status Cards**: Live status indicators with pulse animation
- **Responsive Grid**: Adapts to different screen sizes
- **Hover Effects**: Cards lift on hover
- **Fade-In Animations**: Elements animate on load
- **Pure HTML & CSS**: No JavaScript required

## Components

### KPI Cards
```html
<div class="kpi-card gradient-green">
  <span class="kpi-label">Total Revenue</span>
  <span class="kpi-value">$84,254</span>
  <span class="kpi-change positive">+12.5%</span>
</div>
```

### Chart Card
```html
<div class="chart-card">
  <h3>Revenue Overview</h3>
  <div class="chart-placeholder">
    <div class="chart-bar" style="--height: 60%"></div>
    <div class="chart-bar" style="--height: 80%"></div>
  </div>
</div>
```

### Donut Chart
```html
<div class="donut-chart"></div>
<div class="donut-legend">
  <span class="legend-item"><span class="dot green"></span>Direct 45%</span>
</div>
```

### Status Card
```html
<div class="status-card">
  <div class="status-header">
    <span class="status-dot green"></span>
    <span>Active Sessions</span>
  </div>
  <span class="status-value">1,429</span>
</div>
```

## Gradients

| Class | Colors |
|-------|--------|
| `.gradient-green` | #22c55e → #10b981 |
| `.gradient-blue` | #3b82f6 → #6366f1 |
| `.gradient-purple` | #8b5cf6 → #a855f7 |
| `.gradient-orange` | #f97316 → #fb923c |

## Animations

- `cardFadeIn` - KPI cards fade in sequentially
- `barGrow` - Bar chart grows from bottom
- `donutSpin` - Donut chart spins into place
- `statusPulse` - Status dots pulse continuously

## Acceptance Criteria

- ✅ Responsive dashboard layout
- ✅ Colorful KPI cards with gradients
- ✅ Gradient backgrounds
- ✅ Dashboard statistics
- ✅ Modern card hover effects
- ✅ Pure HTML & CSS
- ✅ Standalone browser-compatible demo
- ✅ No external frameworks
