# Squeeze on Hover

## What does it do?

An element squeezes horizontally when hovered — pure CSS.

## Features

- Horizontal compression via `scaleX()` on hover
- Subtle `scaleY()` counter-movement for squeeze feel
- Springy cubic-bezier transition

## Usage

```css
.squeeze-card {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.squeeze-card:hover {
  transform: scaleX(0.8) scaleY(1.05);
}
```

## Browser Support

- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack

- HTML + CSS only, no JavaScript

## Preview

Open `demo.html` directly in browser.
