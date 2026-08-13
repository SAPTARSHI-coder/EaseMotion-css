# CSS-only Card with Glassmorphism Styling

A beautifully crafted, modern UI card component utilizing authentic frosted Glassmorphism. Built strictly with HTML and CSS.

## Features
- Authentic frosted glass effect utilizing `backdrop-filter: blur`
- Highly dynamic background featuring CSS-animated, blurred color blobs to perfectly showcase the glass refractive capabilities
- Integrated glassmorphism buttons and badges that inherit the card's visual language
- A sleek "shine" or "sheen" hover animation utilizing a CSS pseudo-element (`::before`) and `transform: skewX`
- Bouncy vertical lift hover interaction (`cubic-bezier`)
- Fully responsive architecture suitable for varied screen sizes

## Usage
Include `demo.html` and `style.css` in your project. The Glassmorphism effect relies entirely on having visually diverse elements *behind* the `.glass-card`. Ensure your implementation places the card over gradients, images, or abstract shapes (like the provided `.color-blob` elements) for the `backdrop-filter` to properly refract.
