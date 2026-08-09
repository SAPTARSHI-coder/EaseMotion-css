# CSS 3D Flip Carousel for Minimalist Tech Layouts

A pure CSS carousel designed specifically for Minimalist Tech and Dashboard interfaces. It features a clean, high-contrast aesthetic with monospaced typography, and relies on CSS 3D Transforms to seamlessly flip cards to reveal detailed configuration logs or metrics.

## Features

- **Minimalist Tech Aesthetic**: Deep dark backgrounds, thin tech borders that glow upon interaction, and monospace badges. The back face features a subtle dotted grid for an "under-the-hood" tech feel.
- **Pure CSS 3D Transforms**: Uses hardware-accelerated `perspective` and `rotateY` properties for an ultra-smooth card flip, completely without JavaScript.
- **Keyboard & Accessibility First**: Cards utilize `tabindex="0"`. Furthermore, the back of the card features a focusable action button ("View Logs"). Thanks to the `:focus-within` selector, tabbing into the button naturally triggers and maintains the flip.
- **Responsive Scroll Snapping**: Horizontal scrolling is managed natively by CSS `scroll-snap-type`.
- **Easy Customization**: Built entirely with `easemotion` prefixed (`--em-`) CSS Variables.

## Usage

Include `style.css` in your project and copy the HTML structure from `demo.html`.

### Custom Variables

The following custom properties are available in the `:root` pseudo-class for immediate customization:

```css
:root {
  /* Animation Custom Parameters */
  --em-flip-timing: 0.6s;
  --em-flip-easing: cubic-bezier(0.16, 1, 0.3, 1); /* Snappy tech transition */
  --em-perspective: 1200px;
  
  /* Layout Dimensions */
  --em-card-width: 300px;
  --em-card-height: 400px;
  --em-card-gap: 1.5rem;
  
  /* Minimalist Tech Palette */
  --em-bg-main: #0B0F19;
  --em-border-hover: #3B82F6;
  
  /* ... */
}
```

## Structure Overview

- `.em-carousel`: Flex container handling horizontal layout and scroll-snapping.
- `.em-flip-card`: Receives focus and establishes the 3D perspective environment.
- `.em-flip-card-inner`: Wraps the front and back faces, applying the `transform: rotateY(180deg)`.
- `.em-flip-card-front` & `.em-flip-card-back`: Styled faces layered perfectly back-to-back using `backface-visibility: hidden`.

## License

MIT - Integrate it into your next tech dashboard or infrastructure UI!
