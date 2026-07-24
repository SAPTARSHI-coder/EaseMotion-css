# CSS 3D Flip Carousel for Product Catalog Layouts

A pure CSS carousel designed specifically for product catalogs and eCommerce layouts. This component uses CSS 3D Transforms to create a smooth, hardware-accelerated card flip animation that reveals product details and actions on the back side.

## Features

- **Pure CSS 3D Transform**: Hardware-accelerated 3D flips (`rotateY(180deg)`) using `perspective` and `transform-style: preserve-3d` without any JavaScript.
- **Product Catalog Aesthetics**: Clean, minimalistic card design with high-contrast back faces for specifications and call-to-action buttons.
- **Keyboard Accessible**: Uses `tabindex="0"` on the cards and `:focus-within` selectors. Keyboard users can tab into the "Add to Cart" button, which gracefully triggers and sustains the card flip.
- **Responsive Scroll Snapping**: Horizontal scrolling is managed natively by CSS `scroll-snap-type`, ensuring intuitive mobile swiping and desktop trackpad navigation.
- **Modular Variables**: Uses CSS Custom Properties for easy customization of timing functions, dimensions, and theme colors.

## Usage

Simply integrate the HTML structure and link the `style.css` file into your project. The components are isolated to prevent bleeding into your existing CSS.

### Customization Parameters

The animation and layout can be easily customized via the root CSS variables in `style.css`:

```css
:root {
  /* Animation Parameters */
  --em-flip-timing: 0.6s;
  --em-flip-easing: cubic-bezier(0.23, 1, 0.32, 1);
  --em-perspective: 1200px;
  
  /* Layout Dimensions */
  --em-card-width: 320px;
  --em-card-height: 480px;
  --em-card-gap: 2rem;
  
  /* Colors */
  --em-primary-brand: #2563eb; /* Change this to match your brand */
  /* ...other color variables... */
}
```

## Structure Details

- `.em-carousel`: Flex container providing the horizontal scroll and `scroll-snap-type`.
- `.em-flip-card`: The perspective wrapper for the 3D scene. Focusable.
- `.em-flip-card-inner`: The element that actually receives the `rotateY` transform.
- `.em-flip-card-front` & `.em-flip-card-back`: Absolute positioned faces with `backface-visibility: hidden` so they don't bleed through each other.

## License

MIT - Feel free to use and adapt for your commercial eCommerce projects!
