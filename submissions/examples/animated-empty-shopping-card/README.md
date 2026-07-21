# ease-empty-cart

An attractive, animated empty shopping cart state with a floating illustration, continue shopping CTA, and a suggested products section — a modern, beginner-friendly e-commerce empty-state example.

## Features

- Floating cart icon with a slow rotating dashed ring accent
- Gradient CTA button with animated hover sweep
- Suggested products grid with hover lift
- Clean, centered empty-state layout
- Fully responsive (2-column product grid on small screens)

## Usage

1. Link `style.css` in your HTML `<head>`.
2. Copy the `.ease-empty-cart` markup structure from `demo.html`.

```html
<div class="ease-empty-cart">
  <div class="ease-empty-cart__illustration">🛒</div>
  <h2 class="ease-empty-cart__title">Your cart is empty</h2>
  <p class="ease-empty-cart__subtitle">Description text here.</p>
  <button class="ease-empty-cart__cta">Continue Shopping</button>

  <div class="ease-empty-cart__suggested">
    <p class="ease-empty-cart__suggested-title">You might like</p>
    <div class="ease-empty-cart__products">
      <div class="ease-empty-cart__product">
        <div class="ease-empty-cart__product-icon">👟</div>
        <div class="ease-empty-cart__product-name">Product</div>
        <div class="ease-empty-cart__product-price">$0</div>
      </div>
    </div>
  </div>
</div>