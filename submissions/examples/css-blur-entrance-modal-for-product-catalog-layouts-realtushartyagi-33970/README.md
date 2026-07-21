# CSS Blur-Entrance Modal for Product Catalog Layouts

A pure CSS modal component featuring a sophisticated "blur-entrance" interaction, designed specifically to match the clean, structured aesthetics of **Product Catalog** or E-commerce "Quick View" interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` hack for pure CSS state management, E-commerce aesthetics (split layouts, distinct pricing typography, prominent CTAs), and the `filter: blur()` entrance animation logic.
- `demo.html` – A standalone HTML file demonstrating the modal functionality using an anchor link trigger, styled as a product quick-view modal.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This modal relies on the CSS `:target` pseudo-class. By setting an anchor's `href` to the ID of the modal (`#prod-modal`), the browser updates the URL hash, which CSS intercepts to display the modal overlay.

```html
<!-- Trigger -->
<a href="#prod-modal" class="demo-trigger-btn">Quick View Product</a>

<!-- Modal Structure -->
<div id="prod-modal" class="ease-prod-modal-overlay">
  
  <!-- Clicking this invisible backdrop closes the modal by navigating to # -->
  <a href="#" class="ease-prod-modal-backdrop-close" tabindex="-1"></a>

  <div class="ease-prod-modal-window" role="dialog" aria-labelledby="modal-title" aria-modal="true">
    <a href="#" class="ease-prod-modal-close" aria-label="Close modal dialog">&times;</a>
    
    <!-- Left: Image -->
    <div class="ease-prod-modal-image">
      <div class="ease-prod-image-placeholder">Product Image</div>
    </div>

    <!-- Right: Details -->
    <div class="ease-prod-modal-details">
      <div class="ease-prod-modal-category">Apparel / Outerwear</div>
      <h2 id="modal-title" class="ease-prod-modal-title">Classic Minimalist Jacket</h2>
      <div class="ease-prod-modal-price">$129.99</div>
      
      <p class="ease-prod-modal-text">Product description...</p>
      
      <div class="ease-prod-modal-actions">
        <a href="#" class="ease-prod-modal-btn">Add to Cart</a>
      </div>
    </div>
  </div>

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-modal-timing` | `0.45s` | The duration of the blur and scale entrance animation. |
| `--ease-modal-blur` | `blur(14px)` | The initial amount of blur applied before tapering to 0. |
| `--ease-prod-primary` | `#228be6` | The primary brand color for the main 'Add to Cart' action. |

## Why it fits EaseMotion CSS
This component aligns perfectly with EaseMotion's philosophy by bringing premium, complex animations to pure CSS. The core interaction is the **Blur-Entrance**: utilizing the CSS `:target` pseudo-class, it simultaneously interpolates `opacity`, `transform: scale()`, and `filter: blur()` to bring the modal into view natively. For E-commerce, this creates a cinematic, "focus-pulling" effect that elegantly draws the user's eye directly to the product details and CTA, all without requiring any JavaScript libraries or state management.

---

> **Note:** PR modifies only files inside `submissions/examples/css-blur-entrance-modal-for-product-catalog-layouts-realtushartyagi-33970/`.
