# CSS Neon Glow Modal for E-Commerce Checkout Layouts

A pure CSS modal component featuring a subtle but vibrant "neon glow" interaction, designed specifically to match the secure, trust-building aesthetics of modern dark-mode **E-Commerce Checkout** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` hack for pure CSS state management, Checkout layout styling, Neon Glow aesthetics (layered secure-green box-shadows), and the scale/glow entrance animation logic.
- `demo.html` – A standalone HTML file demonstrating the modal functionality using an anchor link trigger, styled as a secure checkout and payment dialog.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This modal relies on the CSS `:target` pseudo-class. By setting an anchor's `href` to the ID of the modal (`#checkout-modal`), the browser updates the URL hash, which CSS intercepts to display the modal overlay.

```html
<!-- Trigger -->
<a href="#checkout-modal" class="demo-trigger-btn">Proceed to Checkout</a>

<!-- Modal Structure -->
<div id="checkout-modal" class="ease-glow-modal-overlay">
  
  <!-- Clicking this invisible backdrop closes the modal by navigating to # -->
  <a href="#" class="ease-glow-modal-backdrop-close" tabindex="-1"></a>

  <div class="ease-glow-modal-window" role="dialog" aria-labelledby="modal-title" aria-modal="true">
    
    <div class="ease-glow-modal-header">
      <h2 id="modal-title" class="ease-glow-modal-title">Secure Checkout</h2>
      <a href="#" class="ease-glow-modal-close" aria-label="Close modal dialog">&times;</a>
    </div>

    <div class="ease-glow-modal-body">
      <!-- Checkout Form/Summary Content Goes Here -->
    </div>
    
    <div class="ease-glow-modal-footer">
      <a href="#" class="ease-glow-modal-btn">Pay Now</a>
    </div>

  </div>

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-modal-timing` | `0.45s` | The duration of the glow and scale entrance animation. |
| `--ease-glow-shadow-active` | `0 0 15px...` | The layered box-shadow creating the neon glow effect on the modal window. |
| `--ease-glow-neon-accent` | `#10b981` | The "secure green" neon color used for glows and primary actions. |

## Why it fits EaseMotion CSS
This component perfectly aligns with EaseMotion's philosophy by bringing premium, complex animations to pure CSS. The core interaction is the **Neon Glow Entrance**: utilizing the CSS `:target` pseudo-class, it simultaneously interpolates `opacity`, `transform: scale()`, and `box-shadow` to bring the modal into view natively. For E-Commerce Checkouts, using a vibrant "secure green" glow subconsciously reinforces trust and draws focus entirely to the payment action, all without requiring any JavaScript libraries.

---

> **Note:** PR modifies only files inside `submissions/examples/css-neon-glow-modal-for-e-commerce-checkout-layouts-realtushartyagi-33985/`.
