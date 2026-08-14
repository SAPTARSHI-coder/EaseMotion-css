# CSS Data Table with Container Queries & :has() Filtering

## What does this do?

A production-quality, CSS-only responsive data table that adapts between a traditional table and card layout using Container Queries, filters rows with CSS `:has()`, and respects all accessibility preferences — zero JavaScript required.

## How is it used?

```html
<!-- Copy the style.css file and use this HTML structure -->
<div class="table-container">
  <table class="data-table">
    <caption class="table-caption">Orders table</caption>
    <thead>
      <tr>
        <th scope="col">Order #</th>
        <th scope="col">Customer</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Order #">#ORD-8921</td>
        <td data-label="Customer">Alice Kim</td>
        <td data-label="Status">
          <span class="status-badge status-shipped">Shipped</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### Filter chips (no JavaScript)
```html
<label class="filter-chip">
  <input type="radio" name="status-filter" value="shipped">
  <span>Shipped</span>
</label>
```

The `:has()` selector automatically shows/hides rows based on the selected filter chip.

## Why is it useful?

Data tables are one of the most common UI patterns but notoriously hard to make responsive. This submission demonstrates:

- **Container Queries** — the table transforms to a labeled card layout when its container shrinks below 600px, not when the viewport does. This means you can embed this table in a sidebar, modal, or multi-column layout and it adapts to its own space.
- **CSS `:has()` filtering** — filter chips use radio inputs and `:has()` selectors to toggle row visibility purely in CSS.
- **Sticky headers** — column headers remain fixed during scroll for easy reference.
- **Full accessibility** — dark mode (`prefers-color-scheme`), high contrast (`prefers-contrast`), Windows High Contrast (`forced-colors`), reduced motion (`prefers-reduced-motion`), and print styles are all handled.
- **Semantic HTML** — `<table>`, `<thead>`, `<tbody>`, `<th scope="col">`, `<caption>`, and ARIA attributes throughout.

This fits EaseMotion's philosophy: descriptive, readable code that developers can understand at a glance — no cryptic utility classes, no JavaScript build step, just modern CSS.
