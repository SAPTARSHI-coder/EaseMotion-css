# ease-nod

## What does it do?

Element bobs downward then back up, like nodding in agreement. One-shot 0.4s animation perfect for confirmation micro-interactions.

## Features

- `translateY(0) → translateY(6px) → translateY(0)`
- One-shot animation (runs once per hover)
- 0.4s ease-in-out timing
- Pure CSS, no JavaScript

## Usage

```css
.element:hover {
  animation: nod 0.4s ease-in-out;
}

@keyframes nod {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(6px);
  }
  100% {
    transform: translateY(0);
  }
}
```

## Browser Support

- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack

- HTML + CSS only, no JavaScript

## Preview

Open `demo.html` directly in browser.
