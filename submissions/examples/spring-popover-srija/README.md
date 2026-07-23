# Spring Physics Animated Popover

A pure CSS animated popover component featuring a smooth spring physics transition designed for e-commerce checkout interfaces.

## Features

- Pure CSS animation
- No JavaScript dependency
- Smooth spring bounce interaction
- Native details/summary accessibility
- Responsive layout
- Custom CSS variables for animation control

## Customization

The animation can be adjusted using CSS custom properties:

```css
:root {
  --popover-width: 320px;
  --spring-duration: .55s;
  --spring-easing: cubic-bezier(.34, 1.56, .64, 1);
}