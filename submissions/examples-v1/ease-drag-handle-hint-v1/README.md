# ease-drag-handle-hint

## What does it do?

Subtle opacity pulse and micro-bounce on a drag handle (≡ icon) when the user hovers over a draggable container, providing a visual affordance that the element is draggable.

## Features

- Opacity pulse from 0.5 → 1 combined with horizontal micro-bounce
- Hover triggers a `0.5s ease-out` keyframe animation on the handle
- Border and background color shift on the card for extra feedback
- `prefers-reduced-motion` support disables animation

## Usage

```css
.drag-handle {
  display: inline-block;
}

.drag-card:hover .drag-handle {
  animation: dragHandleHint 0.5s ease-out forwards;
}

@keyframes dragHandleHint {
  0% {
    opacity: 0.5;
    transform: translateX(0) scale(1);
  }
  40% {
    opacity: 1;
    transform: translateX(4px) scale(1.15);
  }
  70% {
    transform: translateX(2px) scale(1);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}
```

## Browser Support

- `@keyframes` + `animation` — Chrome 43+, Firefox 16+, Safari 9+

## Tech Stack

- HTML + CSS only, no JavaScript

## Preview

Open `demo.html` directly in browser.
