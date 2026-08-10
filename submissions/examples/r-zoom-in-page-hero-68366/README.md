# CSS Zoom-In Page Hero

A responsive page hero component featuring a smooth background zoom-in animation built entirely with CSS.

## Features

- Pure CSS zoom-in animation
- Responsive design for desktop, tablet, and mobile
- No JavaScript required
- Semantic and accessible HTML
- Keyboard-accessible CTA
- Visible keyboard focus state
- `prefers-reduced-motion` support
- Customizable CSS variables
- Smooth background scaling using `transform: scale()`

## Files

- `demo.html` — Demo markup and accessible hero structure
- `style.css` — Component styling, animation, and responsive behavior

## How It Works

The background image is animated using CSS keyframes:

```css
@keyframes hero-zoom {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.12);
  }
}