# Animated Product Card with Quick View

## What does this do?

This component creates a modern e-commerce product card with smooth hover animations. When the user hovers over the card, the product image zooms in and a quick-view panel slides up from the bottom, displaying product details, color options, size selections, and an Add to Cart button.

---

## Features

- Smooth image zoom animation
- Sliding quick-view overlay
- Color swatches
- Size selection buttons
- Animated Add to Cart button
- Fully responsive design
- Pure HTML & CSS (No JavaScript)

---

## How is it used?

```html
<div class="product-card">
    <div class="product-image">
        <img src="product.jpg" alt="Product">

        <div class="quick-view">
            <h3>Running Shoes</h3>

            <p>
                Lightweight shoes with breathable mesh and premium comfort.
            </p>

            <div class="colors">
                <span class="color red"></span>
                <span class="color blue"></span>
                <span class="color black"></span>
            </div>

            <div class="sizes">
                <button>7</button>
                <button>8</button>
                <button>9</button>
            </div>

            <button class="cart-btn">
                Add to Cart
            </button>
        </div>
    </div>

    <div class="product-info">
        <h2>Running Shoes</h2>
        <p class="price">$89.99</p>
    </div>
</div>
```

---

## Why does it fit EaseMotion CSS?

This component follows EaseMotion CSS principles by providing reusable, animation-first UI elements using only HTML and CSS. The hover interactions are smooth, lightweight, responsive, and easy to customize for modern e-commerce interfaces.

---

## Browser Support

- Chrome
- Edge
- Firefox
- Safari