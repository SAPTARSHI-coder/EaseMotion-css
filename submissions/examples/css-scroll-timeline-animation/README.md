# CSS Scroll Timeline Animation

A pure CSS scroll-driven animation demonstrating how an element can
animate based on the user's scroll position.

## Features

- Pure CSS implementation
- No JavaScript required
- Uses `animation-timeline: view()`
- Responsive layout
- Smooth scroll-driven card reveal
- Accessible semantic HTML
- Supports `prefers-reduced-motion`

## Files

- `demo.html` - Demo page markup
- `style.css` - Component styles and animations

## How It Works

The animation is connected to the element's visibility in the
scroll container using:

```css
animation-timeline: view();