# CSS Infinite Hexagonal Grid

A mathematically tessellated background pattern using cleverly overlapping linear-gradient triangles and angles to simulate an infinite geometric honeycomb grid.

## What it does
Two linear-gradients at ±60° with alternating color stops tile to form a repeating hexagonal honeycomb, with no images.

## Files
- `demo.html` — interactive demo
- `style.css` — pure CSS background pattern
- `README.md` — this guide

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="hex-grid"></div>
```

## Techniques
- Overlapping `linear-gradient` at ±60° angles.
- `background-size` tiling for the honeycomb repeat.
- No external assets or JavaScript.

## Accessibility
- `role="img"` + `aria-label` for screen readers.

Closes #75229
