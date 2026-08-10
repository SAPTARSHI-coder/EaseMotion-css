# CSS Gradient Text Reveal

A CSS-only text reveal effect where a gradient sweeps from left to right across the text.

## Features

- Pure CSS implementation
- No JavaScript required
- Smooth gradient reveal animation
- Responsive typography
- Keyboard accessible link
- Respects `prefers-reduced-motion`
- Works across modern browsers

## Files

- `demo.html` - Demonstration page
- `style.css` - Animation and styling

## How It Works

The effect uses:

- `background: linear-gradient()` to create the gradient
- `background-size` to extend the gradient
- `background-position` to control the reveal direction
- `background-clip: text` to display the gradient inside the text
- CSS `@keyframes` to animate the gradient from right to left

No JavaScript is required.

## Usage

Link the stylesheet:

```html
<link rel="stylesheet" href="style.css">