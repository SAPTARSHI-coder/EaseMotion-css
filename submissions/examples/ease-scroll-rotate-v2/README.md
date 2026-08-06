# ease-scroll-rotate

## What does it do?
Element rotation tied to scroll progress — `rotate(0deg) → rotate(360deg)` across full page scroll using `animation-timeline: scroll()`.

## Features
- Scroll-driven rotation using CSS `animation-timeline: scroll()`
- Full 360-degree rotation from top to bottom
- Pure CSS, no JavaScript

## Usage
```css
.element {
  animation: scrollRotate linear;
  animation-timeline: scroll(root);
}

@keyframes scrollRotate {
  from { rotate: 0deg; }
  to   { rotate: 360deg; }
}
```

## Browser Support
- `animation-timeline: scroll()` — Chrome 115+, Edge 115+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` and scroll.
