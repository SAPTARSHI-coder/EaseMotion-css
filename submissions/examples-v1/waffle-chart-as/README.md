# Waffle Chart

### What does this do?

It shows a waffle chart, a ten by ten grid of cells where a number of cells are filled to show a percentage, with a big value and a label beside it.

### How is it used?

```html
<div class="waffle-card">
  <div class="waffle" role="img" aria-label="68 percent complete">
    <span class="wf-cell on"></span>
    <!-- 100 cells; add the on class to the first N for N percent -->
  </div>
  <div class="wf-info"><div class="wf-value">68%</div><div class="wf-label">Goal reached</div></div>
</div>
```

The waffle is a `repeat(10, 1fr)` grid of 100 cells. Add the `on` class to the first N cells for N percent. Add `is-good` on the waffle to switch the fill to green.

### Why is it useful?

Waffle charts show a single percentage as a friendly grid of squares. This renders a hundred cell waffle chart with a filled count driven by a class, plus a big value label, using only CSS with no scripts.
