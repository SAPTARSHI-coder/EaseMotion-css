# Expandable Rows

### What does this do?

It shows a table of rows where each one expands to reveal more detail when clicked. It uses the native `details` and `summary` elements, so it works with no JavaScript, the columns stay aligned with the header, and a caret rotates on open.

### How is it used?

```html
<div class="exp-table">
  <div class="exp-headrow"><span>Order</span><span>Customer</span><span>Total</span><span></span></div>
  <details class="exp-row">
    <summary>
      <span>#10842</span><span class="muted">Ada</span><span>$120.00</span>
      <svg class="exp-caret">...</svg>
    </summary>
    <div class="exp-detail"><div class="exp-detail-grid">...</div></div>
  </details>
</div>
```

Each row is a `details` element whose `summary` is a grid that matches the header columns. The detail panel slides open below and the caret flips.

### Why is it useful?

Data tables and order lists often let a row expand to show details. This builds expandable rows with aligned columns and a rotating caret using only the details element and CSS. Rows are keyboard operable and the open animation is removed under reduced motion.
