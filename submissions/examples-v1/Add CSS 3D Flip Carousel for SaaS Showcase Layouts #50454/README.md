# CSS 3D Flip Carousel for SaaS Showcase Layouts

A pure CSS carousel component engineered specifically for SaaS marketing and showcase layouts. It features a modern, clean aesthetic utilizing CSS 3D Transforms to seamlessly flip feature cards, revealing technical details, integrations, and deep-dive documentation links.

## Features

- **SaaS Showcase Aesthetic**: Bright, soft-shadowed cards with vibrant icon wrappers, rounded corners, and clean typography. The back face provides a sharp dark-mode contrast.
- **Pure CSS 3D Transforms**: Uses hardware-accelerated `perspective` and `rotateY(180deg)` properties for smooth card flips without any JavaScript.
- **Keyboard Accessible**: Implemented using `tabindex="0"` on cards and standard `:focus-within` selectors. Keyboard users can tab straight into the CTA buttons located on the back face without the card abruptly flipping back.
- **Responsive Scroll Snapping**: Horizontal scrolling is managed natively by CSS `scroll-snap-type`, ensuring intuitive mobile swiping and desktop trackpad navigation.
- **Easy Customization**: Built entirely with `easemotion` prefixed (`--em-`) CSS Variables.

## Usage

Simply integrate the HTML structure into your landing page and link the `style.css` file. 

### Custom Variables

The following custom properties are available in the `:root` pseudo-class for immediate modification:

```css
:root {
  /* Animation Custom Parameters */
  --em-flip-timing: 0.6s;
  --em-flip-easing: cubic-bezier(0.2, 0.8, 0.2, 1);
  --em-perspective: 1200px;
  
  /* Layout Dimensions */
  --em-card-width: 320px;
  --em-card-height: 420px;
  --em-card-gap: 2rem;
  
  /* Brand Palette */
  --em-indigo: #6366f1; /* Main SaaS Color */
  /* ... */
}
```

## Structure Overview

- `.em-carousel`: Flex container providing the horizontal scroll and `scroll-snap-type`.
- `.em-flip-card`: The perspective wrapper for the 3D scene. Focusable.
- `.em-flip-card-inner`: The element that actually receives the `rotateY` transform.
- `.em-flip-card-front` & `.em-flip-card-back`: Absolute positioned faces with `backface-visibility: hidden` so they don't bleed through each other.

## License

MIT - Feel free to use and adapt for your commercial SaaS landing pages!
