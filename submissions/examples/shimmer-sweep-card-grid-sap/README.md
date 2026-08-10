# CSS Shimmer-Sweep Card Grid Component

### What does this do?
Adds a pure-CSS interactive card selection grid designed for e-commerce checkout flows that highlights selected payment options (Credit Card, UPI, Installments) and continuously passes a light shimmer reflection across the active card surface.

### How is it used?
```html
<div class="card-grid-sap">
  <label class="card-item-sap">
    <input type="radio" name="payment-method" id="pay-upi" class="card-input-sap" checked>
    <div class="card-content-sap">
      <div class="shimmer-layer-sap"></div>
      <h3 class="card-name-sap">UPI Payment</h3>
      <p class="card-desc-sap">Pay instantly via Google Pay, PhonePe, Paytm, or BHIM</p>
    </div>
  </label>
</div>
```

###Why is it useful?
It gives e-commerce checkout pages a sleek, tactile feel without relying on external JavaScript libraries or heavy canvas renderers. Key settings such as shimmer speed and active accent colors are exposed at the top via standard CSS variables.