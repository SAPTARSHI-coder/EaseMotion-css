# ease-blur-in-up

## What does it do?
Element blurs in while rising — from `translateY(20px) + blur(10px) + opacity(0)` to fully clear — pure CSS, no JavaScript.

## Features
- Combined translate + blur + opacity transition
- Staggered animation delay per element
- Smooth 0.7s entrance animation

## Usage
```css
.element {
  animation: blur-in-up 0.7s ease forwards;
}

@keyframes blur-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}
```

## Browser Support
- `@keyframes` + `filter` — Chrome 53+, Firefox 49+, Safari 9.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
