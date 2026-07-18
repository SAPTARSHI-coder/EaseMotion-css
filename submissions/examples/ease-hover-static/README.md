# ease-hover-static

## What does it do?
TV static noise briefly flashes across element on hover using pseudo-elements with rapid opacity and translate jitter — pure CSS, no JavaScript.

## Features
- `::before` pseudo-element with checkerboard static pattern
- Rapid opacity and translate jitter via keyframes
- Only active during hover
- Short burst (0.3s) then stops

## Usage
```css
.element::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: /* checkerboard pattern */;
  background-size: 4px 4px;
  pointer-events: none;
}

.element:hover::before {
  animation: static-noise 0.3s steps(4) 1;
}
```

## Browser Support
- `::before` + `@keyframes` — Chrome 26+, Firefox 16+, Safari 6.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
