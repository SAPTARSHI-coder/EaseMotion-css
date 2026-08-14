# Interactive Pricing Calculator

A clean, responsive, and dynamic pricing calculator component built for EaseMotion CSS.

## What does this do?
This component provides an interactive pricing calculator allowing users to adjust seat limits via a range slider, toggle annual/monthly billing discounts, and select optional add-ons with real-time price updates.

## How is it used?
Include the HTML markup in your layout and attach the styling classes:

```html
<div class="pricing-container">
  <div class="calculator-card">
    <input type="range" class="range-input" id="userSlider">
    <div class="price-display">
      <span class="amount" id="totalPriceDisplay">49</span>
    </div>
  </div>
</div>