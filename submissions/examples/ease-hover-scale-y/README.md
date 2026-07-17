# ease-hover-scale-y

## What does it do?
Element stretches taller on hover using `scaleY` — pure CSS, no JavaScript.

## Features
- `scaleY(1.15)` on `:hover`
- Smooth 0.3s transition
- Good for bars, indicators, and cards

## Usage
```css
.element {
  transition: transform 0.3s ease;
  transform-origin: bottom center;
}

.element:hover {
  transform: scaleY(1.15);
}
```

## Browser Support
- `transform` + `transition` — Chrome 36+, Firefox 16+, Safari 9+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
