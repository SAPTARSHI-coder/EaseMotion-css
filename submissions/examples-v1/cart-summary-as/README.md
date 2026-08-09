# Cart Summary

### What does this do?

It shows a shopping cart summary card with line items, each with a thumbnail, name, quantity stepper, price, and a remove button, plus a promo code row, a totals block, and a checkout button.

### How is it used?

```html
<div class="cart">
  <h2>Your cart <span class="count">2 items</span></h2>
  <div class="cart-item">
    <span class="ci-thumb"></span>
    <div><div class="ci-name">Headphones</div><div class="ci-qty"><button>-</button><span>1</span><button>+</button></div></div>
    <div><div class="ci-price">$59.00</div><button class="ci-remove">Remove</button></div>
  </div>
  <div class="cart-sums"><div class="cart-total"><span>Total</span><b>$112.00</b></div></div>
  <a class="cart-checkout" href="#">Checkout</a>
</div>
```

Each item is a three column grid of thumbnail, details, and price. The quantity stepper and remove are styled controls that a host app wires to real cart logic.

### Why is it useful?

Carts and checkout side panels list the items being bought. This lays out a cart with item rows, a quantity control, a promo row, and a totals block, using only CSS and gradient thumbnails so there are no external images.
