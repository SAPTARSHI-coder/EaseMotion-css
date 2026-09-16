# Floating Orbit Accordion

A pure CSS animated accordion featuring floating orbital interactions, smooth transitions, and a minimalist tech-inspired interface.

## Features

- Pure CSS implementation with zero JavaScript
- Smooth floating orbit interaction effects
- Semantic `details` and `summary` elements
- Fully keyboard accessible
- Responsive layout for different screen sizes
- Reduced-motion support for improved accessibility
- Customizable animation timing and easing
- Adjustable orbit scale and movement distance
- Minimalist tech-inspired visual design

## CSS Custom Properties

The accordion animation can be customized using the following CSS custom properties:

```css
:root {
  --orbit-duration: 0.65s;
  --orbit-easing: cubic-bezier(0.22, 1, 0.36, 1);
  --orbit-scale: 1.08;
  --orbit-distance: 0.65rem;
}
