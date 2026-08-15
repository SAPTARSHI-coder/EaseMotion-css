# CSS Neon Glow Modal for Product Catalog Layouts

A pure CSS modal component featuring a vibrant "neon glow" interaction, designed specifically to match the high-contrast, futuristic aesthetics of tech or dark-mode **Product Catalog** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` hack for pure CSS state management, Product Catalog layout (split image and details), Neon Glow aesthetics (layered box-shadows, vivid cyan accents), and the scale/glow entrance animation logic.
- `demo.html` – A standalone HTML file demonstrating the modal functionality using an anchor link trigger, styled as a tech product quick-view modal.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This modal relies on the CSS `:target` pseudo-class. By setting an anchor's `href` to the ID of the modal (`#prod-glow-modal`), the browser updates the URL hash, which CSS intercepts to display the modal overlay.

```html
<!-- Trigger -->
<a href="#prod-glow-modal" class="demo-trigger-btn">View Drone Specs</a>

<!-- Modal Structure -->
<div id="prod-glow-modal" class="ease-glow-modal-overlay">
  
  <!-- Clicking this invisible backdrop closes the modal by navigating to # -->
  <a href="#" class="ease-glow-modal-backdrop-close" tabindex="-1"></a>

  <div class="ease-glow-modal-window" role="dialog" aria-labelledby="modal-title" aria-modal="true">
    <a href="#" class="ease-glow-modal-close" aria-label="Close modal dialog">&times;</a>
    
    <!-- Left: Image -->
    <div class="ease-glow-modal-image">
      <div class="ease-glow-image-placeholder">Product Rendering</div>
    </div>

    <!-- Right: Details -->
    <div class="ease-glow-modal-details">
      <div class="ease-glow-modal-category">Aerospace / Consumer</div>
      <h2 id="modal-title" class="ease-glow-modal-title">ZX-9 Quadcopter</h2>
      <div class="ease-glow-modal-price">$899.00</div>
      
      <p class="ease-glow-modal-text">Modal content goes here...</p>
      
      <div class="ease-glow-modal-actions">
        <a href="#" class="ease-glow-modal-btn">Add to Cart</a>
      </div>
    </div>
  </div>

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-modal-timing` | `0.5s` | The duration of the glow and scale entrance animation. |
| `--ease-glow-shadow-active` | `0 0 20px...` | The layered box-shadow creating the neon glow effect on the modal window. |
| `--ease-glow-neon-primary` | `#00f3ff` | The primary neon cyan color used for accents and glows. |

## Why it fits EaseMotion CSS
This component perfectly aligns with EaseMotion's philosophy by bringing premium, complex animations to pure CSS. The core interaction is the **Neon Glow Entrance**: utilizing the CSS `:target` pseudo-class, it simultaneously interpolates `opacity`, `transform: scale()`, and most importantly, `box-shadow` to bring the modal into view natively. For dark Product Catalogs, this creates a striking, illuminated effect that elegantly draws the user's eye directly to the product details, all without requiring any JavaScript libraries.

---

> **Note:** PR modifies only files inside `submissions/examples/css-neon-glow-modal-for-product-catalog-layouts-realtushartyagi-33984/`.
