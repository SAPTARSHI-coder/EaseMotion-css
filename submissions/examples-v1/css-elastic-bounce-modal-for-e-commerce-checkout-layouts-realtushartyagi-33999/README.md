# CSS Elastic Bounce Modal for E-Commerce Checkout Layouts

A pure CSS modal component featuring a snappy, tactile "elastic bounce" entrance animation, designed specifically to match the secure, conversion-optimized aesthetics of modern **E-Commerce Checkouts**.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` hack for pure CSS state management, E-Commerce Checkout aesthetics (clean white backgrounds, clear typography, trust indicators, vibrant green CTA), and the precise `cubic-bezier` timing function logic that creates the elastic bounce effect.
- `demo.html` – A standalone HTML file demonstrating the modal functionality using an anchor link trigger, styled as a secure checkout / order summary modal.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This modal relies on the CSS `:target` pseudo-class. By setting an anchor's `href` to the ID of the modal (`#chk-modal`), the browser updates the URL hash, which CSS intercepts to display the modal overlay.

```html
<!-- Trigger -->
<a href="#chk-modal" class="demo-trigger-btn">Proceed to Checkout</a>

<!-- Modal Structure -->
<div id="chk-modal" class="ease-bounce-chk-overlay">
  
  <!-- Clicking this invisible backdrop closes the modal by navigating to # -->
  <a href="#" class="ease-bounce-chk-backdrop-close" tabindex="-1"></a>

  <div class="ease-bounce-chk-window" role="dialog" aria-labelledby="modal-title" aria-modal="true">
    
    <div class="ease-bounce-chk-header">
      <h2 id="modal-title" class="ease-bounce-chk-title">Complete Purchase</h2>
      <a href="#" class="ease-bounce-chk-close" aria-label="Close modal dialog">&times;</a>
    </div>
    
    <div class="ease-bounce-chk-body">
      <!-- Order Summary details go here -->
      
      <div class="ease-bounce-chk-trust">
        <!-- Trust badge/icon goes here -->
        Secure 256-bit SSL Encryption
      </div>
      
      <a href="#" class="ease-bounce-chk-btn">Pay Now</a>
    </div>
    
  </div>

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-modal-timing` | `0.5s` | The duration of the elastic bounce entrance animation. |
| `--ease-modal-easing-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | The precise bezier curve that dictates the "spring" physics of the bounce. |
| `--ease-chk-primary` | `#10b981` | The success green brand color used for the primary checkout CTA. |

## Why it fits EaseMotion CSS
This component perfectly aligns with EaseMotion's philosophy by bringing premium, complex animations to pure CSS. The core interaction is the **Elastic Bounce Entrance**: utilizing the CSS `:target` pseudo-class combined with a highly tailored `cubic-bezier` transition curve, the modal quickly springs into view, overshoots its target scale slightly, and settles back perfectly. This delivers an incredibly tactile, native-feeling app interaction that provides users with a sense of solidity and security right before purchase, entirely without requiring any JavaScript libraries.

---

> **Note:** PR modifies only files inside `submissions/examples/css-elastic-bounce-modal-for-e-commerce-checkout-layouts-realtushartyagi-33999/`.
