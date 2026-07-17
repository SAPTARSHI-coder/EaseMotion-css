# Treemap

### What does this do?

It shows a treemap: a rectangle split into tiles whose sizes reflect their share of the whole. A large tile dominates, with medium and small tiles filling the rest, each labeled with a category and value. The layout is a CSS grid using named template areas.

### How is it used?

```html
<div class="tm-grid">
  <div class="tm-tile a"><span class="tm-name">Videos</span><span class="tm-val">128 GB</span></div>
  <div class="tm-tile b"><span class="tm-name">Photos</span><span class="tm-val">76 GB</span></div>
</div>
```

The `tm-grid` defines a six by four grid and assigns each tile a rectangular region with `grid-template-areas`. Changing a tile's area span resizes it, so the map reflows to match the data proportions.

### Why is it useful?

Treemaps show how parts make up a whole when there are many categories, common for storage, budgets, and portfolios. This builds one with pure CSS grid areas, with no layout script or charting library.
