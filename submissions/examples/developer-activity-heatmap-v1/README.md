# Developer Activity Heatmap

A GitHub-inspired activity heatmap component for displaying developer contributions and engagement metrics.

## Features

- Contribution-style grid with 5 activity levels (level-0 through level-4)
- GitHub-accurate green colour palette
- Hover interactions with scale and glow effects
- Legend footer with Less → More indicator
- Fade-in entrance animation
- Responsive design
- `prefers-reduced-motion` support
- Pure HTML + CSS — no JavaScript

## Files

- `demo.html` — standalone demo with a 42-cell heatmap (6 weeks × 7 days)
- `style.css` — complete styling

## Usage

1. Copy `demo.html` and `style.css` into your project.
2. Open `demo.html` directly in a browser — no build step or server required.

```html
<div class="heatmap-card">
  <div class="heatmap-header">
    <h3 class="heatmap-title">Developer Activity</h3>
    <span class="heatmap-range">Last 30 Days</span>
  </div>
  <div class="heatmap-grid">
    <span class="cell level-0"></span>
    <span class="cell level-3"></span>
    <!-- … more cells … -->
  </div>
  <div class="heatmap-footer">
    <span class="heatmap-label">Less</span>
    <div class="heatmap-legend">
      <span class="cell level-0"></span>
      <span class="cell level-1"></span>
      <span class="cell level-2"></span>
      <span class="cell level-3"></span>
      <span class="cell level-4"></span>
    </div>
    <span class="heatmap-label">More</span>
  </div>
</div>
```

## Use Cases

- Developer portfolios
- Coding dashboards
- Git analytics tools
- SaaS productivity apps

## Why it fits EaseMotion CSS

- **Reusable component** — self-contained with the `heatmap-` class prefix
- **Animation-first** — fade-in entrance and hover scale + glow transitions
- **Human-readable classes** — `heatmap-grid`, `cell`, `level-3` are self-documenting
- **Developer-focused aesthetic** — mirrors the familiar GitHub contribution graph
