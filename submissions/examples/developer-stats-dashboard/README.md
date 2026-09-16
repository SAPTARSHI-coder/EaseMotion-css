# Developer Stats Dashboard Widget

A compact dashboard widget for displaying developer and project metrics such as commits, pull requests, issues resolved, repositories, stars earned, and deployment statistics. The widget presents metrics in a clean card-based grid layout with animated entrance and hover effects.

## Classes

| Class | Description |
|---|---|
| `ease-dev-stats` | Grid container for stat cards |
| `ease-stat-card` | Individual stat card with entrance animation and hover lift |
| `ease-stat-value` | Numeric value with subtle glow pulse |
| `ease-stat-label` | Descriptive label for the metric |
| `ease-stat-card-primary` | Primary (purple) color variant |
| `ease-stat-card-success` | Success (green) color variant |
| `ease-stat-card-info` | Info (blue) color variant |
| `ease-stat-card-warning` | Warning (amber) color variant |

## Usage

```html
<div class="ease-dev-stats">
  <div class="ease-stat-card ease-stat-card-primary">
    <span class="ease-stat-value">128</span>
    <span class="ease-stat-label">Commits</span>
  </div>
  <div class="ease-stat-card ease-stat-card-success">
    <span class="ease-stat-value">42</span>
    <span class="ease-stat-label">Pull Requests</span>
  </div>
  <div class="ease-stat-card ease-stat-card-info">
    <span class="ease-stat-value">18</span>
    <span class="ease-stat-label">Repositories</span>
  </div>
  <div class="ease-stat-card ease-stat-card-warning">
    <span class="ease-stat-value">356</span>
    <span class="ease-stat-label">Stars</span>
  </div>
</div>
```

## Why it fits EaseMotion CSS

Pure CSS dashboard pattern with staggered entrance animations, hover lift effects, and a subtle glow pulse on values. Uses design tokens for colors and spacing. Respects `prefers-reduced-motion`. Zero JavaScript required.
