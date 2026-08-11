# CSS Scale-Hover Carousel for Neumorphic Soft Layouts

A pure CSS carousel designed to fit seamlessly into Neumorphic (soft UI) design systems. It features a smooth scale-hover interaction, CSS scroll snapping for native-feeling horizontal scroll, and is fully accessible via keyboard.

## Features

- **Pure CSS**: No JavaScript required for interactions, layout, or snapping.
- **Neumorphic Soft Aesthetics**: Beautiful inset and outset shadows designed for off-white/gray backgrounds.
- **Scale-Hover Interaction**: Items seamlessly scale up and enhance their shadows on hover or focus to create a 3D "floating closer" effect.
- **Fully Accessible**: Implemented using `tabindex="0"` on carousel items allowing users to tab through, with `focus-visible` styling matching the hover state. Arrow keys natively control scrolling behavior inside the container.
- **Responsive**: Uses modern CSS variables (`:root`) and media queries to automatically scale the cards down on mobile devices.
- **Scroll Snapping**: Utilizes `scroll-snap-type: x mandatory` for a native carousel feel on both touch devices and desktop trackpads.

## Usage

Simply copy the HTML structure and link the CSS file. 

### Custom Parameters

You can easily customize the behavior and styling of the carousel by modifying the CSS variables provided in the `:root` pseudo-class in `style.css`:

```css
:root {
  /* Interaction Parameters */
  --em-carousel-scale: 1.07; /* How much the card scales on hover */
  --em-carousel-timing: 0.35s; /* Transition duration */
  --em-carousel-easing: cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Transition easing function */
  
  /* Neumorphic Colors */
  --em-bg-color: #e0e5ec;
  --em-shadow-light: #ffffff;
  --em-shadow-dark: #a3b1c6;
  
  /* Size and Layout */
  --em-carousel-item-width: 280px;
  --em-carousel-item-height: 340px;
  --em-carousel-gap: 2rem;
}
```

## Structure

- `.em-carousel`: The main scroll container. Uses flexbox and scroll-snapping.
- `.em-carousel-item`: The individual cards. Includes transition properties for scale and box-shadow. Uses `tabindex="0"` for accessibility.
- `.em-carousel-icon`: Demonstrates inset neumorphism to hold an icon.

## License

MIT - Free to use and modify for your projects!
