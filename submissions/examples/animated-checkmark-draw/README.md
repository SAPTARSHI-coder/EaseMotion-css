# Animated Checkmark Draw

## What does it do?
An SVG-style path drawing animation for a success checkmark, done purely in CSS.

## Features
- Checkmark path progressively draws itself using `stroke-dasharray` / `stroke-dashoffset`
- Runs once on load using CSS keyframes
- Pure CSS, no JavaScript

## Usage
```html
<svg class="checkmark" viewBox="0 0 52 52">
  <path class="checkmark-path" d="M14 27l7 7 16-16"/>
</svg>
```

```css
.checkmark-path {
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  animation: draw 0.6s ease-out forwards;
}

@keyframes draw {
  to { stroke-dashoffset: 0; }
}
```

## Browser Support
- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
