# Zoom-In Progress Bar for Product Catalog Layouts

Progress bars that scale up with a spring easing when they fill, designed for product catalog dashboards.

## What does this do?

Displays inventory/stock progress bars that enter with a `scaleX(0 → 1)` zoom animation triggered when the card scrolls into view, using Intersection Observer for performance.

## How is it used?

```html
<article class="product-card">
  <div class="product-card__head">
    <span class="product-card__icon">👟</span>
    <div>
      <h3 class="product-card__name">Running Shoes</h3>
      <span class="product-card__sku">SKU-4821</span>
    </div>
  </div>
  <div class="product-card__bar-wrap">
    <div class="product-card__bar" style="--zp-target: 92%"></div>
  </div>
  <span class="product-card__status product-card__status--ok">In Stock</span>
</article>
```

## Why is it useful?

Product catalogs need clear visual indicators of stock levels. The zoom-in animation draws attention to each bar as it enters the viewport, making inventory status immediately obvious without being distracting.

## CSS Custom Properties

| Property           | Description        | Default   |
| ------------------ | ------------------ | --------- |
| `--zp-fill`        | Default fill color | `#3b82f6` |
| `--zp-fill-warn`   | Low stock color    | `#f59e0b` |
| `--zp-fill-danger` | Critical color     | `#ef4444` |
| `--zp-fill-ok`     | Full stock color   | `#22c55e` |
| `--zp-track`       | Track background   | `#eef0f4` |

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
