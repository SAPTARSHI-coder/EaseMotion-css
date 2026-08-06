# CSS Rotate-Click Accordion for E-Commerce Checkout Layouts

A pure CSS accordion component featuring a spatial "rotate-click" entrance animation, designed specifically for step-by-step **E-Commerce Checkout** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, hidden radio button mechanics for state management, e-commerce specific aesthetics (clean white cards, green success accents), and the 3D `transform: rotateX()` logic.
- `demo.html` – A standalone HTML file demonstrating the accordion functionality in a typical multi-step "Secure Checkout" context with dummy form elements.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This accordion relies on hidden `<input type="radio">` tags paired with `<label>` tags to trigger CSS state changes, avoiding JavaScript entirely.

```html
<div class="ease-rotate-checkout-accordion">
  
  <div class="ease-rotate-checkout-item">
    <!-- State controller -->
    <input type="radio" name="rotate-check-acc" id="step1" class="ease-rotate-checkout-input" checked />
    
    <!-- Clickable Header -->
    <label for="step1" class="ease-rotate-checkout-label">
      <div class="ease-rotate-checkout-header-left">
        <span class="ease-rotate-checkout-step">1</span>
        <span>Shipping Information</span>
      </div>
      <span class="ease-rotate-checkout-icon">
        <svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
      </span>
    </label>
    
    <!-- Expanding Wrapper -->
    <div class="ease-rotate-checkout-wrapper">
      <div class="ease-rotate-checkout-content">
        <!-- Inner content -->
        <div class="ease-rotate-checkout-inner">
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
| `--ease-rotate-timing` | `0.5s` | The duration of the 3D rotate-down expansion and collapse. |
| `--ease-rotate-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | A slightly bouncy custom curve that enhances the physical swinging motion. |
| `--ease-check-accent` | `#10b981` | The success green accent color for active steps and buttons. |

## Why it fits EaseMotion CSS
This component perfectly illustrates EaseMotion's philosophy of delivering highly tactile, performant animations natively via CSS. The core interaction is the **Rotate-Click**: by applying `perspective` to the parent container and animating `transform: rotateX(-90deg)` to `rotateX(0deg)` on the inner content (with a `transform-origin` fixed at the `top`), it creates a stunning 3D swing-down effect. This happens simultaneously with the CSS Grid height expansion (`grid-template-rows`), resulting in a deeply physical, receipt-unrolling metaphor perfect for checkout flows—all with zero JS overhead.

---

> **Note:** PR modifies only files inside `submissions/examples/css-rotate-click-accordion-for-e-commerce-checkout-layouts-realtushartyagi-32874/`.
