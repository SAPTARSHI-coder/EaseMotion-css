# CSS Wobble-Focus Popover for Product Catalogs

A pure CSS animated popover that utilizes a smooth "Wobble" entrance animation triggered upon click/focus. Styled specifically for Product Catalogs and E-commerce layouts, this component uses clean lines, soft shadows, and a structured internal layout perfect for displaying quick product details or sizing guides.

## Features

- **Pure CSS Interaction**: No JavaScript required. Uses the native `:focus-within` pseudoclass for a seamless, accessible click-to-open and click-off-to-close behavior.
- **Product Catalog Aesthetics**: Built for modern e-commerce. Features clean white backgrounds, pill-shaped trigger buttons, subtle grey borders, and structured inner content (like specification lists and CTA buttons).
- **Accessible Design**: Fully supports native keyboard navigation. Users can Tab to the trigger button and press Enter or Space to reveal the popover, and continue tabbing to reach the "Add to Cart" button inside.
- **Sophisticated Wobble Animation**: Exposes CSS Custom Properties (`var(--ease-...)`). The wobble animation (`@keyframes ease-wobble-focus`) uses decaying translation and rotation simultaneously to mimic a natural physical wobble without breaking layout bounds.
- **Fully Responsive**: Scales cleanly on mobile viewports.

## Quick Start

1. Import the CSS from `style.css` into your project.
2. Structure your HTML to wrap the trigger element and the popover inside a `.popover-wrapper` container.

```html
<div class="popover-wrapper">
  <!-- Trigger Element -->
  <button class="trigger-btn" aria-describedby="wobble-popover-content">
    Quick Details
  </button>
  
  <!-- Popover Content -->
  <div id="wobble-popover-content" class="ease-wobble-popover" role="dialog">
    <div class="popover-content">
      <h4 id="popover-title">Product Details</h4>
      <ul class="product-specs">
        <li>100% Organic Cotton Canvas</li>
        <li>Machine washable</li>
      </ul>
      <button class="add-to-cart-btn">Add to Cart</button>
    </div>
  </div>
</div>
```

## Customization Parameters

The animation and styling can be fully customized by overriding the CSS variables defined in the `:root` pseudo-class.

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--ease-wobble-timing` | `0.7s` | Total duration of the wobble entrance animation |
| `--ease-wobble-easing` | `ease-in-out` | Easing function ensuring smooth velocity changes |
| `--ease-wobble-distance` | `8px` | Maximum pixel distance to translate left/right during the wobble |
| `--ease-wobble-rotation` | `3deg` | Maximum rotation angle paired with the translation |

## Browser Support

- Chrome, Edge, Safari, Firefox (Recent Versions)
- Uses system font stacks ensuring native-feeling text rendering across all major OS platforms.

## Demo

Open `demo.html` in your browser to view a live, interactive showcase of the component nested inside a minimal product card.
