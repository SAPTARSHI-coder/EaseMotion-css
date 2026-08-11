# 3D Perspective Tilt Checkout Tabs

A pure CSS animated tab component designed for modern e-commerce checkout
interfaces.

The component uses a smooth 3D perspective tilt interaction for checkout
steps such as Cart, Shipping, and Payment.

## Features

- Pure HTML and CSS
- No JavaScript
- 3D perspective tilt interaction
- Smooth hover and active states
- Responsive design
- Keyboard focus support
- Reduced-motion support
- Customizable CSS animation parameters
- Self-contained demo

## Demo

Open `demo.html` directly in any modern browser.

No server or build process is required.

## Usage

Include the tab structure in your HTML:

```html
<div class="tabs">

  <input
    type="radio"
    name="checkout-tab"
    id="cart-tab"
    checked
  >

  <label for="cart-tab" class="tab">
    Cart
  </label>

  <input
    type="radio"
    name="checkout-tab"
    id="shipping-tab"
  >

  <label for="shipping-tab" class="tab">
    Shipping
  </label>

  <input
    type="radio"
    name="checkout-tab"
    id="payment-tab"
  >

  <label for="payment-tab" class="tab">
    Payment
  </label>

</div>