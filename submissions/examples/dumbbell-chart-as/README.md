# Dumbbell Chart

### What does this do?

It shows a dumbbell chart comparing two values per category. Each row has a start dot and an end dot joined by a connecting bar, so the gap between the two years is easy to read across categories. A legend names the two series.

### How is it used?

```html
<span class="db-track" style="--a: 30%; --b: 62%;">
  <span class="db-line"></span>
  <span class="db-dot start"></span>
  <span class="db-dot end"></span>
</span>
```

Each track takes a start `--a` and end `--b` percentage. The `db-line` spans from `--a` for `calc(var(--b) - var(--a))`, and the two dots sit at `--a` and `--b`, so one pair of values positions the whole dumbbell.

### Why is it useful?

Dumbbell charts show change between two points across many categories more clearly than paired bars, common in before and after comparisons. This renders one with pure CSS from two custom properties per row, no charting library.
