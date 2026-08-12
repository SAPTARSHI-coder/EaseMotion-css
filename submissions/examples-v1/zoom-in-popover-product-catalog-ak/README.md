# Zoom-In Product Catalog Popover

## What does this do?
A pure CSS zoom-in animated "Quick View" popover styled for product catalog cards, revealing details beside the card.

## How is it used?
```html
<div class="product-card">
  <img class="product-thumb" src="product.jpg" alt="Product photo">
  <div class="product-info">
    <h4>Product Name</h4>
    <span class="product-price">$00.00</span>
  </div>
  <button class="product-popover-trigger" id="productBtn" aria-expanded="false" aria-describedby="productBox">
    Quick View
  </button>

  <div class="product-popover-box" id="productBox" role="tooltip">
    <h3>Product Name</h3>
    <p>Product description.</p>
    <ul class="product-meta">
      <li>In stock</li>
      <li>Ships in 2–3 days</li>
    </ul>
  </div>
</div>
```
Toggle `is-open` on `.product-popover-box` to trigger a side-anchored zoom-in reveal. Customize via `--product-scale-from`, `--product-duration`, `--product-easing`.

## Why is it useful?
It adds a "Quick View" interaction pattern common in e-commerce/product catalog UIs — CSS-only animation, minimal JS for state toggling, keyboard accessible, and respects `prefers-reduced-motion`, in line with EaseMotion's lightweight animation-first philosophy.