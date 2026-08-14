# CSS Horizontal Roll Accordion for E-Commerce Checkout Layouts

A pure CSS multi-step accordion component featuring a smooth "horizontal roll" expansion, styled specifically for clean, trustworthy **E-Commerce Checkout** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the hidden radio button mechanics for state management, the flexbox layout, and the horizontal roll transition logic.
- `demo.html` – A standalone HTML file demonstrating the accordion functionality in a 3-step checkout flow (Shipping, Payment, Review).

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This accordion uses hidden `<input type="radio">` elements combined with modern CSS `:has()` and flexbox to manage state and animate dimensions without JavaScript.

```html
<div class="ease-h-roll-accordion">
  
  <!-- Step 1 -->
  <div class="ease-h-roll-panel">
    <input type="radio" name="checkout-step" id="step1" class="ease-h-roll-input" checked />
    <label for="step1" class="ease-h-roll-label">
      <span class="ease-h-roll-step">1</span>
      <span class="ease-h-roll-title">Shipping</span>
    </label>
    <div class="ease-h-roll-content">
      <h2>Shipping Details</h2>
      <!-- Content here -->
    </div>
  </div>

  <!-- Step 2 -->
  <div class="ease-h-roll-panel">
    <input type="radio" name="checkout-step" id="step2" class="ease-h-roll-input" />
    <label for="step2" class="ease-h-roll-label">
      <span class="ease-h-roll-step">2</span>
      <span class="ease-h-roll-title">Payment</span>
    </label>
    <div class="ease-h-roll-content">
      <h2>Payment Info</h2>
      <!-- Content here -->
    </div>
  </div>

</div>
```
*(You can advance to the next step by clicking the vertical label headers, or by placing a `<label for="step2">` inside the step 1 content).*

## CSS Custom Properties
Adjust the animation timing, easing, and e-commerce aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-h-roll-timing` | `0.5s` | The speed of the horizontal panel expansion. |
| `--ease-h-roll-collapsed-width` | `64px` | The width of the collapsed step headers. |
| `--ease-ecom-primary` | `#0f172a` | The primary dark color for active headers. |

## Why it fits EaseMotion CSS
This component completely replaces the need for JavaScript state management (like React state or jQuery slides) by utilizing the CSS hidden radio button trick and flexbox transitions. The "horizontal roll" effect dynamically adjusts `flex-basis` on the parent container while shifting `transform: translateX` on the inner content. This approach delivers a seamless, native-feeling checkout flow that remains perfectly performant and robust, executed entirely in CSS.

---

> **Note:** PR modifies only files inside `submissions/examples/css-horizontal-roll-accordion-for-e-commerce-checkout-layouts-realtushartyagi-33095/`.
