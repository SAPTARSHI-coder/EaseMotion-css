# CSS-Only Sticky Table Headers

Tables with sticky headers that stay visible when scrolling through long datasets.

## What does this do?

Provides a scrollable table container where the header row remains fixed at the top while the body scrolls. Includes striped rows, hover effects, priority indicators, and a scroll fade indicator.

## How is it used?

```html
<div class="sticky-table-container">
  <table class="sticky-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Item 1</td>
        <td>Active</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Priority indicators

```html
<span class="sticky-table__priority sticky-table__priority--high">High</span>
<span class="sticky-table__priority sticky-table__priority--medium">Medium</span>
<span class="sticky-table__priority sticky-table__priority--low">Low</span>
```

### Variants

```html
<table class="sticky-table sticky-table--compact">...</table>
<table class="sticky-table sticky-table--bordered">...</table>
```

## Why is it useful?

- **Sticky headers** — header stays visible while scrolling long tables
- **Scrollable container** — `max-height` with `overflow-y: auto`
- **Scroll indicator** — gradient fade at bottom edge
- **Dark mode** — respects `prefers-color-scheme: dark`
- **Reduced motion** — transitions disabled when `prefers-reduced-motion` is active
- **Production-ready** — suitable for dashboards, data tables, and admin panels
