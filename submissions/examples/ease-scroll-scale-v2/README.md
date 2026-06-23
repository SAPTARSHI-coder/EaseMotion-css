# ease-scroll-scale

## What does it do?
Element scale tied to scroll progress — `scale(0.8) → scale(1)` across scroll range using `animation-timeline: scroll()`.

## Features
- Scroll-driven scaling using CSS `animation-timeline: scroll()`
- `@supports` fallback for non-supporting browsers
- Pure CSS, no JavaScript

## Usage
```css
.element {
  animation: scrollScale linear;
  animation-timeline: scroll(root);
}

@keyframes scrollScale {
  from { scale: 0.8; }
  to   { scale: 1; }
}
```

## Browser Support
- `animation-timeline: scroll()` — Chrome 115+, Edge 115+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` and scroll.
