# Jiggle on Hover

## What does it do?

An element jiggles with combined rotation and translation when hovered — pure CSS.

## Features

- Alternating rotate + translate keyframes
- Plays twice on hover for a playful jiggle
- Smooth ease-in-out timing

## Usage

```css
.jiggle-btn:hover {
  animation: jiggle 0.4s ease-in-out 2;
}
@keyframes jiggle {
  0% {
    transform: rotate(0deg) translateX(0);
  }
  25% {
    transform: rotate(4deg) translateX(4px);
  }
  50% {
    transform: rotate(-4deg) translateX(-4px);
  }
  75% {
    transform: rotate(2deg) translateX(2px);
  }
  100% {
    transform: rotate(0deg) translateX(0);
  }
}
```

## Browser Support

- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack

- HTML + CSS only, no JavaScript

## Preview

Open `demo.html` directly in browser.
