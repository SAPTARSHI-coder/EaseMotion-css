# Shipping Cost Calculator

## What does it do?
A shipping cost calculator that takes package weight, dimensions,
and destination zone as inputs, then displays multiple carrier
rates with estimated delivery times and highlights the cheapest
and fastest options.

## How is it used?
```html
<!-- Include style.css and open demo.html in browser -->
<div class="shipping-calc">
  <div class="shipping-form">
    <!-- inputs for weight, dimensions, zones -->
    <button class="calc-btn" onclick="calculate()">Calculate</button>
  </div>
  <div class="shipping-results" id="results">
    <div id="carrier-list"></div>
    <div class="shipping-summary" id="summary"></div>
  </div>
</div>
```

## Features
- Weight, L×W×H dimensions, origin/destination zone inputs
- Volumetric weight calculation (DIM factor 5000)
- 4 carrier rates with animated results display
- Best Price and Fastest badges
- Billable weight summary panel
- Clickable carrier selection
- Entrance animation on results
- Respects prefers-reduced-motion
- Pure HTML + CSS + vanilla JS

## Preview
Open `demo.html` directly in browser.