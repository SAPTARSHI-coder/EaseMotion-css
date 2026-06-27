# ease-stretch-in-vertical

## What does it do?
Element reveals itself by stretching vertically — `scaleY(0) → scaleY(1)` with `transform-origin: top`.

## Features
- `scaleY(0) → scaleY(1)` vertical stretch
- `transform-origin: top` for dropdown-like reveal
- 0.45s ease-out timing
- Overflow hidden on parent container
- Good for dropdown reveals and expandable panels

## Usage
```css
.content {
  transform-origin: top;
  transform: scaleY(0);
  transition: transform 0.45s ease-out;
}

.container:hover .content {
  transform: scaleY(1);
}
```

## Browser Support
- Chrome 20+, Firefox 16+, Safari 6.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
