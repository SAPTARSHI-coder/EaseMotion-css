# Developer Activity Heatmap Component

A GitHub-style contribution heatmap that visualizes activity over time using a grid of color-coded cells with multiple intensity levels. Includes month and day labels, staggered pop-in animation, hover scale effect, and a legend.

## Classes

| Class | Description |
|---|---|
| `ease-heatmap` | Container card with border and background |
| `ease-heatmap-header` | Title and subtitle row |
| `ease-heatmap-title` | Section title |
| `ease-heatmap-subtitle` | Time range subtitle |
| `ease-heatmap-table` | Table structure wrapper |
| `ease-heatmap-months` | Month label row |
| `ease-heatmap-body` | Flex row for day labels and grid |
| `ease-heatmap-days` | Day label column |
| `ease-heatmap-grid` | Grid of activity cells |
| `ease-heatmap-cell` | Individual cell with hover scale |
| `ease-heatmap-lvl-0` | No activity (dim) |
| `ease-heatmap-lvl-1` | Low activity |
| `ease-heatmap-lvl-2` | Medium activity |
| `ease-heatmap-lvl-3` | High activity |
| `ease-heatmap-lvl-4` | Highest activity (brightest) |
| `ease-heatmap-legend` | Legend row |
| `ease-heatmap-legend-label` | Less / More labels |

## Usage

```html
<div class="ease-heatmap">
  <div class="ease-heatmap-header">
    <h3 class="ease-heatmap-title">Contribution Activity</h3>
    <span class="ease-heatmap-subtitle">Last 6 months</span>
  </div>

  <div class="ease-heatmap-table">
    <div class="ease-heatmap-months">
      <span></span><span>Jan</span><span>Feb</span><span>Mar</span>
      <span>Apr</span><span>May</span><span>Jun</span>
    </div>

    <div class="ease-heatmap-body">
      <div class="ease-heatmap-days">
        <span>Mon</span><span></span><span>Wed</span><span></span><span>Fri</span><span></span><span>Sun</span>
      </div>

      <div class="ease-heatmap-grid">
        <span class="ease-heatmap-cell ease-heatmap-lvl-0" title="0 contributions"></span>
        <span class="ease-heatmap-cell ease-heatmap-lvl-2" title="5 contributions"></span>
        <span class="ease-heatmap-cell ease-heatmap-lvl-4" title="15 contributions"></span>
        <!-- ... -->
      </div>
    </div>
  </div>

  <div class="ease-heatmap-legend">
    <span class="ease-heatmap-legend-label">Less</span>
    <span class="ease-heatmap-cell ease-heatmap-lvl-0"></span>
    <span class="ease-heatmap-cell ease-heatmap-lvl-1"></span>
    <span class="ease-heatmap-cell ease-heatmap-lvl-2"></span>
    <span class="ease-heatmap-cell ease-heatmap-lvl-3"></span>
    <span class="ease-heatmap-cell ease-heatmap-lvl-4"></span>
    <span class="ease-heatmap-legend-label">More</span>
  </div>
</div>
```

## Why it fits EaseMotion CSS

Pure CSS heatmap with staggered pop-in cell animation, smooth hover scale effect, and color-coded intensity levels using design tokens. Responsive grid layout. Respects `prefers-reduced-motion`.
