# Mini Cart Dropdown

## What does this do?

The Mini Cart Dropdown adds a pure HTML/CSS cart preview menu with item rows, order total, and a checkout call to action.

## How is it used?

Place the dropdown in a shopping header or checkout area and include the local stylesheet:

```html
<nav class="mini-cart" aria-label="Shopping cart preview">
  <button class="cart-trigger" type="button" aria-haspopup="true">
    <span class="cart-icon" aria-hidden="true">Cart</span>
    <span class="cart-copy">
      <span class="cart-label">Your cart</span>
      <span class="cart-count">3 items</span>
    </span>
  </button>

  <section class="cart-dropdown" aria-label="Cart preview">
    <header class="cart-header">
      <strong>Order preview</strong>
      <span>$86.00</span>
    </header>
  </section>
</nav>
```

## Why is it useful?

It gives EaseMotion CSS users a practical ecommerce dropdown pattern that previews cart contents while staying dependency-free, responsive, keyboard-friendly, dark-mode compatible, and respectful of reduced-motion preferences.
