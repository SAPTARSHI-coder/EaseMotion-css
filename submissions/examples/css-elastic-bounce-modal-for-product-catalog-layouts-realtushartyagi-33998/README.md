# CSS Elastic Bounce Modal for Product Catalog Layouts

A pure CSS modal component featuring a snappy, tactile "elastic bounce" entrance animation, designed specifically to match the clean, conversion-focused aesthetics of modern **Product Catalogs** and E-commerce platforms.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` hack for pure CSS state management, Product Catalog aesthetics (clean white cards, dedicated image areas, prominent CTA buttons), and the precise `cubic-bezier` timing function logic that creates the elastic bounce effect.
- `demo.html` – A standalone HTML file demonstrating the modal functionality using an anchor link trigger, styled as an e-commerce "Quick View" product modal.

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
<a href="#prod-modal" class="demo-trigger-btn">Quick View</a>

<!-- Modal Structure -->
<div id="prod-modal" class="ease-bounce-prod-overlay">
  
  <!-- Clicking this invisible backdrop closes the modal by navigating to # -->
  <a href="#" class="ease-bounce-prod-backdrop-close" tabindex="-1"></a>

  <div class="ease-bounce-prod-window" role="dialog" aria-labelledby="modal-title" aria-modal="true">
    
    <a href="#" class="ease-bounce-prod-close" aria-label="Close modal dialog">&times;</a>

    <div class="ease-bounce-prod-image-area">
      <!-- Product Image Goes Here -->
    </div>
    
    <div class="ease-bounce-prod-details">
      <span class="ease-bounce-prod-category">Category</span>
      <h2 id="modal-title" class="ease-bounce-prod-title">Product Name</h2>
      
      <div class="ease-bounce-prod-price">$129.00</div>
      
      <a href="#" class="ease-bounce-prod-btn">Add to Cart</a>
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
| `--ease-prod-primary` | `#000000` | The primary brand color used for the prominent "Add to Cart" button. |

## Why it fits EaseMotion CSS
This component perfectly aligns with EaseMotion's philosophy by bringing premium, complex animations to pure CSS. The core interaction is the **Elastic Bounce Entrance**: utilizing the CSS `:target` pseudo-class combined with a highly tailored `cubic-bezier` transition curve, the modal quickly springs into view, overshoots its target scale slightly, and settles back perfectly. This delivers an incredibly tactile, native-feeling app interaction that enhances the shopping experience—grabbing user attention instantly—entirely without requiring any JavaScript libraries.

---

> **Note:** PR modifies only files inside `submissions/examples/css-elastic-bounce-modal-for-product-catalog-layouts-realtushartyagi-33998/`.
