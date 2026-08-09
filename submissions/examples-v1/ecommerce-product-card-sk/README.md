# E-Commerce Product Card

## What does this do?

A pure CSS product card for e-commerce stores. It displays product images, color-variant switching via radio buttons, star ratings, discount badges, pricing with strike-through, and an add-to-cart button — all without JavaScript.

## How is it used?

```html
<article class="product-card">
  <div class="product-badge">New</div>

  <!-- Radio inputs control which color variant is shown -->
  <input type="radio" name="product-color" id="color-black" class="color-input" checked>
  <input type="radio" name="product-color" id="color-white" class="color-input">

  <div class="product-images">
    <!-- Each image is tagged with a data-color matching a radio id -->
    <div class="product-image" data-color="color-black">
      <img src="product-black.jpg" alt="Black variant">
    </div>
    <div class="product-image" data-color="color-white">
      <img src="product-white.jpg" alt="White variant">
    </div>
  </div>

  <div class="product-body">
    <span class="product-category">Category</span>
    <h2 class="product-title">Product Name</h2>
    <div class="product-rating" aria-label="4 out of 5 stars">
      <span class="star filled">&#9733;</span>
      <span class="star filled">&#9733;</span>
      <span class="star filled">&#9733;</span>
      <span class="star filled">&#9733;</span>
      <span class="star">&#9733;</span>
      <span class="rating-count">(100)</span>
    </div>
    <div class="product-price">
      <span class="price-current">$99.00</span>
      <span class="price-original">$149.00</span>
    </div>
    <div class="color-picker">
      <label for="color-black" class="color-swatch" style="--swatch: #1a1a2e" title="Black"></label>
      <label for="color-white" class="color-swatch" style="--swatch: #f8f9fa" title="White"></label>
    </div>
    <button class="add-to-cart">
      <span class="cart-label">Add to cart</span>
      <span class="cart-icon">&#8594;</span>
    </button>
  </div>
</article>
```

Open `demo.html` in any modern browser. Click a color swatch to see the product image change instantly.

## Why is it useful?

E-commerce product cards are one of the most universal UI patterns on the web. This implementation demonstrates how CSS sibling combinators (`~`) and radio inputs can drive interactive behavior — color-variant image switching — without a single line of JavaScript. It aligns with EaseMotion's philosophy of leveraging CSS as a full interaction layer. The component includes responsive layout, dark mode, reduced-motion support, hover animations, focus-visible outlines, and semantic HTML with ARIA labels on ratings.
