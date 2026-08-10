# Wiggle on Hover

## What does it do?
An element wiggles side to side when hovered — pure CSS.

## Features
- Alternating rotate keyframes for wiggle effect
- Plays three times on hover
- Glowing shadow on hover

## Usage
```css
.wiggle-badge:hover {
  animation: wiggle 0.3s ease-in-out 3;
}
@keyframes wiggle {
  0%   { transform: rotate(0deg); }
  25%  { transform: rotate(6deg); }
  50%  { transform: rotate(-6deg); }
  75%  { transform: rotate(3deg); }
  100% { transform: rotate(0deg); }
}
```

## Browser Support
- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
