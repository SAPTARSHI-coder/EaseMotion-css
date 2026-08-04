# ease-rotate-in-down-left

## What does it do?
Element rotates into view from the upper-right corner using `transform-origin: left bottom` — pure CSS, no JavaScript.

## Features
- `rotate(-45deg)` with `transform-origin: left bottom`
- Opacity 0 → 1 transition
- Staggered animation for multiple elements
- 0.6s entrance animation

## Usage
```css
.element {
  animation: rotate-in-down-left 0.6s ease forwards;
}

@keyframes rotate-in-down-left {
  from {
    opacity: 0;
    transform: rotate(-45deg);
    transform-origin: left bottom;
  }
  to {
    opacity: 1;
    transform: rotate(0deg);
    transform-origin: left bottom;
  }
}
```

## Browser Support
- `@keyframes` + `transform-origin` — Chrome 26+, Firefox 16+, Safari 6.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
