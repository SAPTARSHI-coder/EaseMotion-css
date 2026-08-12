# CSS Fade-Out Modal for E-Commerce Checkout Layouts

A pure CSS modal component featuring a distinct, smooth "fade-out" exit animation, styled specifically for clean, trustworthy **E-Commerce Checkout** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` trigger mechanics, and the `opacity` transition logic that emphasizes the fade-out duration when the modal is dismissed.
- `demo.html` – A standalone HTML file demonstrating the modal functionality in a typical e-commerce order confirmation layout.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This modal uses the CSS `:target` pseudo-class to open and close. Your trigger button should be an `<a>` tag that links to the modal's `id`.

```html
<!-- Trigger -->
<a href="#checkout-modal" class="ease-fade-trigger-btn">Confirm Order</a>

<!-- Modal Overlay & Animated Content -->
<div id="checkout-modal" class="ease-fade-ecom-modal-overlay">
  <div class="ease-fade-ecom-modal-content">
    <a href="#" class="ease-fade-ecom-modal-close">&times;</a>
    <h2>Order Confirmed!</h2>
    <p>Modal content goes here...</p>
  </div>
</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and e-commerce colors via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-fade-in-timing` | `0.3s` | The total duration of the modal's quick entrance animation. |
| `--ease-fade-out-timing`| `0.6s` | The extended duration for the modal's smooth fade-out exit animation. |
| `--ease-fade-easing` | `cubic-bezier(0.4, 0, 0.2, 1)` | A standard ease-in-out curve for smooth fading. |
| `--ease-ecom-accent` | `#3182ce` | The trustworthy blue accent color for primary actions. |

## Why it fits EaseMotion CSS
This component removes the need for JavaScript state management by utilizing the CSS `:target` pseudo-class for interactivity. The asymmetric fade timing (quick to open, slower to close) uses hardware-accelerated `opacity` properties coupled with a clean `cubic-bezier`. This creates an elegant, highly performant 60fps micro-interaction that provides a premium checkout experience with zero scripting overhead.

---

> **Note:** PR modifies only files inside `submissions/examples/css-fade-out-modal-for-e-commerce-checkout-layouts-realtushartyagi-34111/`.
