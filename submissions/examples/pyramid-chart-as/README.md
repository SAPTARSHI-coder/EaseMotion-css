# Pyramid Chart

### What does this do?

It shows a pyramid chart of hierarchy levels. Stacked trapezoid bands widen toward the base, each a named level in its own color, next to a legend giving the share of each level. It reads as a classic learning or hierarchy pyramid.

### How is it used?

```html
<div class="py-stack">
  <span class="py-level l1">Create</span>
  <span class="py-level l5">Remember</span>
</div>
```

Each level sets its width with a `--w` custom property, from a narrow apex to a full width base, and a `clip-path` angles the sides so the bands read as trapezoids. The stack centers the bands so they form a symmetric pyramid.

### Why is it useful?

Pyramid charts show layered hierarchies and proportions from top to bottom, common in learning models, org levels, and needs hierarchies. This renders one with pure CSS widths and clip paths, no charting library.
