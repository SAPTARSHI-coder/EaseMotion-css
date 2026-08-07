# Progress Ring Animated

An animated circular progress ring — pure CSS.

## Features
- SVG-based circular progress indicator
- Animated fill using stroke-dasharray/dashoffset
- Configurable percentage via `--p` custom property
- Configurable color via `--color` custom property

## Usage
```html
<svg class="progress-ring" viewBox="0 0 120 120">
  <circle class="ring-bg" cx="60" cy="60" r="52"/>
  <circle class="ring-fill" style="--p:75" cx="60" cy="60" r="52"/>
</svg>
```

## Browser Support
- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack
- HTML + CSS + SVG, no JavaScript
