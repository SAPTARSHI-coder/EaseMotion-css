# CSS Fade-In Popover for Product Catalog Layouts

A pure CSS popover implementation designed for Product Catalog interfaces (e.g., Quick View interactions on a product card), demonstrating a smooth fade-in animation using modern CSS transitions and `@starting-style`.

## Features
- **Pure CSS**: Zero JavaScript required for the interaction or animation.
- **Smooth Fade-In**: Utilizes CSS transitions mapping to EaseMotion tokens with a slight translate & scale effect for an elegant entrance.
- **Product Catalog Aesthetic**: Styled to fit seamlessly within a grid-based product layout, leveraging glassmorphism and clean typography.
- **Responsive**: Popover adapts smoothly and integrates tightly with the product card layout.
- **Keyboard Accessible**: Leverages `:focus-within` to remain open and accessible when navigating the product grid via keyboard.
- **Customizable**: Exposes custom parameters (`--popover-fade-duration`, `--popover-fade-easing`, `--popover-scale-start`) to easily tweak the motion feel.

## Usage

Include the `easemotion.css` framework and the local `style.css`. The animation relies on standard CSS transitions combined with the new CSS `@starting-style` rule for animating elements from `display: none`.

```html
<div class="popover-container quick-view-container">
  <button class="quick-view-btn" aria-expanded="false" aria-controls="quick-view-popover">
    Quick Info
  </button>
  
  <div class="popover-wrapper" id="quick-view-popover" role="dialog" aria-label="Product Details">
    <div class="popover-content">
      <!-- Popover Content Goes Here -->
    </div>
  </div>
</div>
```
