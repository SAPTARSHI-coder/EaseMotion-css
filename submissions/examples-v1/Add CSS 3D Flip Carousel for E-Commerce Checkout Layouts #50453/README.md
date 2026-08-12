# CSS 3D Flip Carousel for E-Commerce Checkout Layouts

A pure CSS carousel designed specifically for e-commerce checkout flows and payment method selection. This component utilizes CSS 3D Transforms to seamlessly flip credit cards, revealing the back (e.g., CVV entry and confirm button) when hovered or focused.

## Features

- **Checkout Aesthetic**: Designed with standard credit card ratios and authentic-looking layout details (chip, masked numbers, expiry, CVV strip).
- **Pure CSS 3D Transforms**: Uses hardware-accelerated `perspective` and `rotateY` properties for incredibly smooth card flips without any JavaScript.
- **Keyboard & Accessibility First**: Cards utilize `tabindex="0"`. Furthermore, the back of the card features a focusable action button. Thanks to the `:focus-within` selector, tabbing into the button naturally triggers and maintains the flip.
- **Scroll Snapping**: Provides a native-feeling horizontal carousel via `scroll-snap-type`.
- **Easy Theming**: Comes with built-in gradient themes (`.card-theme-dark`, `.card-theme-blue`, `.card-theme-silver`) and exposes CSS custom variables for layout tweaks.

## Usage

Include `style.css` in your project and copy the HTML structure from `demo.html`. The CSS selectors are scoped specifically to `.em-carousel` and `.em-flip-card` to prevent conflicts.

### Custom Variables

The following custom properties are available in the `:root` pseudo-class for immediate customization:

```css
:root {
  /* Animation Custom Parameters */
  --em-flip-timing: 0.7s;
  --em-flip-easing: cubic-bezier(0.4, 0, 0.2, 1);
  --em-perspective: 1500px; /* Depth of the 3D flip effect */
  
  /* Layout Dimensions (Standard Credit Card Ratio) */
  --em-card-width: 360px;
  --em-card-height: 226px;
  --em-card-gap: 2rem;
}
```

## Structure Overview

- `.em-carousel`: Flex container providing the horizontal scroll and `scroll-snap-type`.
- `.em-flip-card`: The perspective wrapper for the 3D space, which receives focus.
- `.em-flip-card-inner`: The element that is rotated in the 3D space.
- `.em-flip-card-front` & `.em-flip-card-back`: Absolute positioned faces with `backface-visibility: hidden`.

## License

MIT - Feel free to use and adapt for your commercial checkout flows!
