# ease-hover-flip-y

## What does it do?
Element flips over the vertical Y axis on hover — pure CSS, no JavaScript.

## Features
- `rotateY(180deg)` on `:hover`
- `perspective` on parent for 3D depth
- Smooth 0.4s transition
- Front/back faces with `backface-visibility: hidden`

## Usage
```css
.scene { perspective: 600px; }

.card {
  transition: transform 0.4s ease;
  transform-style: preserve-3d;
}

.card:hover { transform: rotateY(180deg); }

.front, .back {
  backface-visibility: hidden;
}

.back { transform: rotateY(180deg); }
```

## Customisation
| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-flip-duration` | `0.4s` | Animation speed |

## Browser Support
- `transform` + `perspective` — Chrome 36+, Firefox 16+, Safari 9+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
