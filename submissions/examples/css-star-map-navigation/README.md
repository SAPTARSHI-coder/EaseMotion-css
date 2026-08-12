# CSS Star Map Navigation

A constellation-inspired navigation component built entirely with HTML and CSS.

## Features

- Pure HTML and CSS implementation
- Star-based navigation links
- Constellation-style connecting lines
- Subtle star twinkle animation
- Hover and keyboard focus effects
- Responsive layout
- Semantic `<nav>` and `<a>` elements
- Accessible keyboard navigation
- `prefers-reduced-motion` support
- No JavaScript required

## How It Works

Each navigation item is represented as a glowing star.

The stars are positioned around a constellation and connected using CSS elements. Hovering or focusing a star increases its glow and highlights its navigation label.

## Usage

Copy the structure from `demo.html` and include the provided `style.css`.

Example:

```html
<nav class="constellation" aria-label="Star map navigation">
  <a class="star star-home" href="#home">
    <span class="star-core"></span>
    <span class="star-label">Home</span>
  </a>
</nav>