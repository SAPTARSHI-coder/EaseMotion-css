# Contribution Graph

### What does this do?

It shows a year of activity as a contribution graph, the commit calendar made familiar by code hosting sites. Fifty two week columns of seven day cells are shaded by activity level from empty to bright green, with month labels across the top, day labels down the side, and a Less to More legend.

### How is it used?

```html
<div class="cg-grid">
  <i class="c l0"></i><i class="c l2"></i><i class="c l4"></i>
</div>
```

The grid uses `grid-auto-flow: column` with seven rows, so each added cell fills down a week then starts the next column. Each cell carries a level class `l0` through `l4` that sets its green shade.

### Why is it useful?

Activity calendars summarize habits and streaks over a long period at a glance, useful for commits, workouts, or study logs. This renders one purely with a CSS grid and level classes, with no script or chart library.
