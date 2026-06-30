# CSS E-commerce Card

## What does this do?

Product card component for e-commerce with image placeholder, category label, product title, star rating, price display (with sale/original), badge (sale/new/featured), and add-to-cart button in a responsive grid.

## How is it used?

```html
<div class="ec-card">
  <div class="ec-badge ec-badge-sale">Sale</div>
  <div class="ec-image"><img src="product.jpg" alt="Product" /></div>
  <div class="ec-body">
    <div class="ec-category">Category</div>
    <h3>Product</h3>
    <div class="ec-rating"><span class="ec-star ec-star-filled">★</span></div>
    <div class="ec-price"><span class="ec-current">$49.99</span></div>
    <button class="ec-btn">Add to Cart</button>
  </div>
</div>
```

## Why is it useful?

Complete product card UI without JavaScript for e-commerce displays. Badge indicators for sales and new items. Star rating system. Sale/original price comparison. Hover lift effect. Responsive grid layout. Perfect for product catalogs, store fronts, and marketplace listings.
