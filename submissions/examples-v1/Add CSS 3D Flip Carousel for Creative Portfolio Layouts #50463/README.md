# CSS 3D Flip Carousel for Creative Portfolio Layouts

A pure CSS carousel designed to showcase creative work, agencies, or personal portfolios. This component leverages CSS 3D Transforms to execute an elegant, sweeping card flip animation revealing deep project context.

## Features

- **Creative Portfolio Aesthetic**: Features bold typography, high-contrast colors, and large visual cards designed to hold vibrant project covers (or imagery).
- **Pure CSS 3D Transforms**: Uses hardware-accelerated `perspective` and `rotateY` properties for an ultra-smooth card flip, completely without JavaScript.
- **Keyboard Accessible**: Focus state styling uses `tabindex="0"` on the cards. Standard `:focus-within` selectors ensure the card remains flipped when keyboard users interact with the "View Case Study" button on the back.
- **Responsive Scroll Snapping**: Native horizontal scrolling is managed natively by CSS `scroll-snap-type`, delivering a tactile swipe experience on mobile devices and trackpads.
- **Easy Customization**: Built with CSS Variables.

## Usage

Include `style.css` in your project and copy the HTML structure from `demo.html`.

### Custom Variables

The following custom properties are available in the `:root` pseudo-class for immediate customization:

```css
:root {
  /* Animation Parameters */
  --em-flip-timing: 0.85s;
  --em-flip-easing: cubic-bezier(0.19, 1, 0.22, 1); /* Elegant, sweeping curve */
  --em-perspective: 1800px;
  
  /* Layout Dimensions */
  --em-card-width: 360px;
  --em-card-height: 540px;
  --em-card-gap: 3rem;
  
  /* Colors */
  --em-bg-color: #0f0f0f;
  /* ... */
}
```

## Structure Overview

- `.em-carousel`: Flex container handling horizontal layout and scroll-snapping.
- `.em-flip-card`: Receives focus and establishes the 3D perspective environment.
- `.em-flip-card-inner`: Wraps the front and back faces, applying the `transform: rotateY(-180deg)`.
- `.em-flip-card-front` & `.em-flip-card-back`: Styled faces layered perfectly back-to-back using `backface-visibility: hidden`.

## License

MIT - Integrate it into your next award-winning portfolio!
