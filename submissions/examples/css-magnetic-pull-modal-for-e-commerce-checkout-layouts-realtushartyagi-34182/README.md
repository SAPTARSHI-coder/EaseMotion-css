# CSS Magnetic Pull Modal for E-Commerce Checkout Layouts

A pure CSS modal component featuring a satisfying, elastic "magnetic pull" entrance animation, styled specifically to instill trust in **E-Commerce Checkout** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` trigger mechanics, and the `transform` logic utilizing an overshooting `cubic-bezier` for the magnetic snap effect.
- `demo.html` – A standalone HTML file demonstrating the modal functionality in a typical checkout confirmation layout.

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
<a href="#checkout-modal" class="ease-magnetic-trigger-btn">Pay Now</a>

<!-- Modal Overlay & Animated Content -->
<div id="checkout-modal" class="ease-magnetic-ecom-modal-overlay">
  <div class="ease-magnetic-ecom-modal-content">
    <a href="#" class="ease-magnetic-ecom-modal-close">&times;</a>
    <h2>Payment Successful!</h2>
    <p>Modal content goes here...</p>
  </div>
</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and e-commerce colors via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-magnetic-pull-timing` | `0.6s` | The total duration of the modal's pulling entrance animation. |
| `--ease-magnetic-easing`| `cubic-bezier(0.34, 1.8, 0.64, 1)` | The custom elastic cubic-bezier that creates the magnetic overshoot snap. |
| `--ease-ecom-accent` | `#10b981` | The trustworthy green accent color for success states. |

## Why it fits EaseMotion CSS
This component completely replaces the need for JavaScript state management or complex physics libraries (like spring animations) by relying natively on CSS and the URL hash (`:target`). The "magnetic pull" effect uses hardware-accelerated `transform` properties (`translateY`, `scale`) coupled with an aggressive custom `cubic-bezier` timing function. This creates a spatially reassuring, tactile 60fps micro-interaction that provides a premium checkout experience with zero scripting overhead.

---

> **Note:** PR modifies only files inside `submissions/examples/css-magnetic-pull-modal-for-e-commerce-checkout-layouts-realtushartyagi-34182/`.
