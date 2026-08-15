# CSS Outline Stroke Text

A pure CSS animated outline stroke text effect for the EaseMotion CSS library.

## Features

- Pure CSS implementation
- No JavaScript required
- Animated draw-on text effect
- Uses `clip-path` for the reveal animation
- CSS custom properties for easy theming
- Responsive typography
- Light and dark mode support
- Reduced-motion accessibility support

## Files

- `demo.html` - Demo page
- `style.css` - Component styles and animation

## How It Works

The text is initially hidden using:

```css
clip-path: inset(0 100% 0 0);