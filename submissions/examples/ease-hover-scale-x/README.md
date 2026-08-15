# ease-hover-scale-x

## What does it do?
Element stretches wider on hover using `scaleX` — pure CSS, no JavaScript.

## Features
- `scaleX(1.1)` on `:hover`
- Smooth 0.3s transition
- Custom property `--ease-scale-x-amount`
- Good for progress bars and buttons

## Usage
```css
.element {
  transition: transform 0.3s ease;
  transform-origin: center;
}

.element:hover {
  transform: scaleX(var(--ease-scale-x-amount, 1.1));
}
```

## Customisation
| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-scale-x-amount` | `1.1` | Horizontal scale factor |

## Browser Support
- `transform` + `transition` — Chrome 36+, Firefox 16+, Safari 9+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
