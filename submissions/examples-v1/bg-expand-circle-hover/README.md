# BG Expand Circle on Hover

A circular background grows from center on hover — pure CSS.

## Features

- `clip-path: circle()` animates from 0% to 100%
- Smooth cubic-bezier transition
- Pure CSS, no JavaScript

## Usage

```css
.circle-bg {
  clip-path: circle(0% at 50% 50%);
  transition: clip-path 0.4s;
}
.circle-btn:hover .circle-bg {
  clip-path: circle(100% at 50% 50%);
}
```

## Browser Support

- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack

- HTML + CSS only, no JavaScript
