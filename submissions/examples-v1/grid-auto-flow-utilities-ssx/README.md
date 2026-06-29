# Grid Auto-Flow Utilities (ssx)

## What does this do?

Provides a set of pure-CSS utility classes for controlling how CSS Grid auto-places items using the `grid-auto-flow` property — including row flow, column flow, and the `dense` variants that intelligently back-fill empty grid cells left by larger items.

## How is it used?

Apply a `flow-*` utility class to any CSS Grid container to change how items are auto-placed:

```html
<!-- Default: items fill rows left-to-right, top-to-bottom -->
<div class="grid flow-row">
  <div>1</div><div>2</div><div>3</div>
</div>

<!-- Items fill columns top-to-bottom, left-to-right -->
<div class="grid flow-col">
  <div>1</div><div>2</div><div>3</div>
</div>

<!-- Row flow + dense back-fills gaps left by wider items -->
<div class="grid flow-row-dense">
  <div>1</div>
  <div class="wide">2 (spans 2 cols)</div>
  <div>3</div>
  <div>4</div>
</div>

<!-- Column flow + dense back-fills gaps left by taller items -->
<div class="grid flow-col-dense">
  <div>1</div>
  <div class="tall">2 (spans 2 rows)</div>
  <div>3</div>
</div>
```

Available classes:

- **`flow-row`** — items fill rows (default behavior, explicit utility)
- **`flow-col`** — items fill columns top-to-bottom
- **`flow-row-dense`** — row flow that back-fills empty cells
- **`flow-col-dense`** — column flow that back-fills empty cells

## Why is it useful?

`grid-auto-flow` is one of the most underused but powerful CSS Grid properties. The `dense` variants in particular are perfect for masonry-style layouts, image galleries, dashboard tiles, and any UI where mixed-size items would otherwise leave unsightly empty gaps. These utilities make grid placement intent declarative — instead of memorizing CSS syntax, developers can apply a single utility class and instantly change layout behavior. It aligns perfectly with EaseMotion CSS's philosophy of minimal, expressive, and reusable styling utilities that simplify modern CSS Grid usage.