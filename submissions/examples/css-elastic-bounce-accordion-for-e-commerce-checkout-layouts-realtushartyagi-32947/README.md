# CSS Elastic Bounce Accordion for E-Commerce Checkout Layouts

A pure CSS accordion component featuring a highly satisfying "elastic bounce" expansion animation, designed specifically for step-by-step **E-Commerce Checkout** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, hidden radio button mechanics for state management, e-commerce specific aesthetics (clean white cards, green success accents), and the custom `cubic-bezier` logic that drives the elastic bounce.
- `demo.html` – A standalone HTML file demonstrating the accordion functionality in a typical multi-step "Secure Checkout" context with dummy form elements.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This accordion relies on hidden `<input type="radio">` tags paired with `<label>` tags to trigger CSS state changes, entirely eliminating the need for JavaScript state management.

```html
<div class="ease-bounce-checkout-accordion">
  
  <div class="ease-bounce-checkout-item">
    <!-- State controller -->
    <input type="radio" name="bounce-check-acc" id="step1" class="ease-bounce-checkout-input" checked />
    
    <!-- Clickable Header -->
    <label for="step1" class="ease-bounce-checkout-label">
      <div class="ease-bounce-checkout-header-left">
        <span class="ease-bounce-checkout-step">1</span>
        <span>Shipping Information</span>
      </div>
      <span class="ease-bounce-checkout-icon">Edit</span>
    </label>
    
    <!-- Expanding Wrapper -->
    <div class="ease-bounce-checkout-wrapper">
      <div class="ease-bounce-checkout-content">
        <!-- Inner content -->
        <div class="ease-bounce-checkout-inner">
          <p>Checkout form goes here...</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Additional steps... -->

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and checkout aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-bounce-timing` | `0.6s` | The duration of the elastic expansion and collapse animations. |
| `--ease-bounce-easing` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | The custom curve responsible for the overshooting elastic bounce effect. |
| `--ease-check-accent` | `#10b981` | The success green accent color for active steps and buttons. |

## Why it fits EaseMotion CSS
This component perfectly illustrates EaseMotion's philosophy of delivering highly tactile, performant animations natively via CSS. The core interaction is the **Elastic Bounce**: by applying a custom overshooting `cubic-bezier` timing function to both the CSS Grid `grid-template-rows` transition (for height expansion) and the active step indicator circle's `transform: scale()`, the entire component springs to life when interacted with. Furthermore, it utilizes modern `:has()` selector capabilities to conditionally display an "Edit" prompt only on completed/inactive steps, providing a robust, app-like user experience without any JavaScript logic.

---

> **Note:** PR modifies only files inside `submissions/examples/css-elastic-bounce-accordion-for-e-commerce-checkout-layouts-realtushartyagi-32947/`.
