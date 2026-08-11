# CSS Fade-In Carousel for Glassmorphism UI Layouts

A pure CSS carousel designed to showcase beautiful Glassmorphism design principles. It features vibrant background meshes that blur organically through frosted glass cards. When hovered or focused, a smooth Fade-In interaction reveals deeper card content.

## Features

- **Glassmorphism Aesthetic**: Cards feature `backdrop-filter: blur()`, semi-transparent backgrounds, and delicate white borders over vibrant background shapes to achieve a true frosted glass effect.
- **Fade-In Interaction**: Instead of just scaling, the inner content (descriptions and buttons) utilizes a smooth `opacity` and `transform: translateY()` transition. The content fades in seamlessly upon hover or focus.
- **Pure CSS**: Native horizontal scrolling and interaction management without any JavaScript overhead.
- **Keyboard Accessible**: Uses `tabindex="0"` on the `.em-glass-card`. The `:focus-within` selector ensures that if a user tabs into the hidden "Explore" button, the content remains fully visible and faded in.
- **Responsive Scroll Snapping**: Horizontal scrolling is managed natively by CSS `scroll-snap-type`.
- **Easy Customization**: Built entirely with `easemotion` prefixed (`--em-`) CSS Variables.

## Usage

Include `style.css` in your project and copy the HTML structure from `demo.html`. Ensure you include the `.em-bg-shape` elements behind the carousel to see the glass blur effect in action!

### Custom Variables

The following custom properties are available in the `:root` pseudo-class for immediate customization:

```css
:root {
  /* Animation Custom Parameters */
  --em-fade-timing: 0.5s;
  --em-fade-easing: ease-out;
  
  /* Layout Dimensions */
  --em-card-width: 320px;
  --em-card-height: 440px;
  --em-card-gap: 2.5rem;
  
  /* Glassmorphism Parameters */
  --em-glass-bg: rgba(255, 255, 255, 0.05);
  --em-glass-border: rgba(255, 255, 255, 0.2);
  --em-glass-blur: blur(16px);
  
  /* ... */
}
```

## Structure Overview

- `.em-carousel`: Flex container handling horizontal layout and scroll-snapping.
- `.em-glass-card`: The frosted glass card element that receives focus and triggers the hover states.
- `.em-fade-content`: The hidden block inside the card that fades in via `opacity` and `transform` when the card is interacted with.

## License

MIT - Add a touch of glass to your next user interface!
