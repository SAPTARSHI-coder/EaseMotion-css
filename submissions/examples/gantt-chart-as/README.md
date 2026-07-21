# Gantt Chart

### What does this do?

It shows a project Gantt chart. Each task is a row with a name and a colored bar placed on a six column week grid. The bar's start column and length come from `--s` (start week) and `--n` (number of weeks) custom properties, so scheduling a task is just two numbers.

### How is it used?

```html
<div class="gc-row">
  <span class="gc-name">Build</span>
  <span class="gc-track">
    <span class="gc-bar p3" style="--s: 3; --n: 3;">3w</span>
  </span>
</div>
```

The track is a `repeat(6, 1fr)` grid with striped gridlines, and each bar uses `grid-column: var(--s) / span var(--n)` to sit on the right weeks. Phase classes `p1` through `p5` set the bar colors.

### Why is it useful?

Project planners and roadmaps use Gantt charts to show task timing and overlap. This renders one purely with CSS grid placement driven by two custom properties, with no script or table library.
