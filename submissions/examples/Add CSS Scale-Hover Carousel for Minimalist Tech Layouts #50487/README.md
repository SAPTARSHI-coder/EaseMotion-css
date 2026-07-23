# CSS Scale-Hover Carousel for Minimalist Tech Layouts

A pure CSS carousel designed specifically for Minimalist Tech and Dashboard interfaces. It features a clean, high-contrast aesthetic with monospaced typography, subtle borders, and a snappy scale-hover transition that creates a sharp focus effect.

## Features

- **Pure CSS**: Native horizontal scrolling and hover scaling without JavaScript.
- **Minimalist Tech Aesthetic**: Deep dark backgrounds, thin borders that transition to bright accents, and a layout perfect for displaying infrastructure metrics or dashboard cards.
- **Scale-Hover Interaction**: Cards smoothly scale up and subtly shift upwards (`translateY`) while emitting a tech-inspired glow on hover or keyboard focus.
- **Keyboard Accessible**: Cards utilize `tabindex="0"`. The native `:focus-visible` pseudo-class mimics the hover state perfectly, making it easy for keyboard users to navigate the horizontal layout.
- **Responsive Scroll Snapping**: Horizontal scrolling is managed natively by CSS `scroll-snap-type`.

## Usage

Simply drop the HTML structure into your project and link the `style.css` file. 

### Custom Parameters

The timing, scale factor, and color palette can be modified via the CSS variables located in `:root`:

```css
:root {
  /* Animation Parameters */
  --em-scale: 1.04; /* How much the card scales up */
  --em-timing: 0.3s; /* Transition duration */
  --em-easing: cubic-bezier(0.16, 1, 0.3, 1); /* Snappy tech transition */
  
  /* Dimensions & Layout */
  --em-card-width: 290px;
  --em-card-height: 380px;
  
  /* Minimalist Tech Palette */
  --em-bg-main: #0B0F19; /* Background color */
  --em-border-hover: #3B82F6; /* Sharp tech blue for hover/focus */
  /* ...other color variables... */
}
```

## Structure Details

- `.em-carousel`: Flex container providing the horizontal scroll and `scroll-snap-type`.
- `.em-carousel-item`: The individual cards. Includes transition properties for `transform`, `border-color`, and `box-shadow`. Uses `tabindex="0"` for accessibility.

## License

MIT - Free to use in your dashboards and web applications!
