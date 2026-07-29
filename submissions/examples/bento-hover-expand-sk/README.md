# Bento Grid Hover-Expansion with `:has()`

## What does this do?
A CSS Grid bento layout where hovering any cell highlights it with a glowing border while dimming all siblings — using `:has()` to select the parent and its non-hovered children. Hovering also reveals extra content within each cell via a smooth height transition.

## How is it used?

```html
<div class="bento">
  <!-- 2-column, 2-row hero cell -->
  <div class="bento__cell bento__cell--col2 bento__cell--row2">
    <span class="bento__tag">Featured</span>
    <h2 class="bento__title">Title</h2>
    <p class="bento__body">Description visible always.</p>
    <div class="bento__extra">Extra content revealed on hover.</div>
  </div>

  <!-- Metric card with accent color -->
  <div class="bento__cell bento__cell--green">
    <div class="bento__metric">$48K</div>
    <div class="bento__metric-label">Revenue</div>
    <div class="bento__extra">↑ 12% vs last month</div>
  </div>
</div>
```

Span helpers: `.bento__cell--col2/3/4`, `.bento__cell--row2/3`.
Accent colors: `.bento__cell--green`, `--pink`, `--cyan`, `--amber`.

## Why is it useful?
The sibling-dimming effect requires selecting a parent based on a hovered child — exactly what `:has()` enables. The grid is responsive (4 → 2 → 1 columns), extra content uses `max-height` transition, and hover border uses `box-shadow` for GPU compositing. Respects `prefers-reduced-motion`.
