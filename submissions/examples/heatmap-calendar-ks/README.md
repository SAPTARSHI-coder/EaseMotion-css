# Activity Heatmap Calendar

A pure CSS GitHub-style contribution heatmap calendar that visualizes daily activity data across an entire year using a grid of color-coded cells.

## What does this do?

Displays 365 days of activity data as a color-coded grid calendar (53 weeks × 7 days), with month labels, day-of-week labels, a color intensity legend, activity statistics, and hover tooltips — all without JavaScript.

## How is it used?

```html
<div class="heatmap" role="img" aria-label="Activity heatmap showing 365 days of contributions">
  <div class="heatmap-body">
    <div class="heatmap-scroll" role="grid" aria-label="Activity calendar grid" tabindex="0">
      <div class="heatmap-grid">
        <span class="cell level-2" role="gridcell" tabindex="0"
              aria-label="Mon Jan 15: 5 activities"
              data-tooltip="Jan 15 — 5 activities"></span>
        <!-- Repeat for all 365+ cells -->
      </div>
    </div>
  </div>
</div>
```

Each cell accepts one of five activity levels:

| Class | Meaning |
|-------|---------|
| `level-0` | No activity |
| `level-1` | Low activity (1–3) |
| `level-2` | Medium activity (4–7) |
| `level-3` | High activity (8–12) |
| `level-4` | Very high activity (13+) |

## Why is it useful?

Activity heatmaps are a proven, highly visual way to display time-series data at a glance. This implementation is useful for:

- **GitHub-style contribution trackers** in portfolios and developer profiles
- **Habit trackers** and streak visualizations in health/fitness apps
- **Analytics dashboards** showing user engagement or daily metrics
- **Project management** tools tracking commit or task frequency
- **Any application** needing to display 365-day activity patterns

Fits EaseMotion's philosophy by providing a visually impressive, genuinely reusable component that showcases advanced CSS Grid layout patterns, pure-CSS tooltips, and comprehensive accessibility features — all without a single line of JavaScript.
