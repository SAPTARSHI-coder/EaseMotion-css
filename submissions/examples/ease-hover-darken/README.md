# ease-hover-darken

## What does it do?
Element darkens on hover using `filter: brightness()` below 1 — pure CSS, no JavaScript.

## Features
- `filter: brightness(0.8)` on `:hover`
- GPU-accelerated filter transition
- Custom property `--ease-darken-amount`
- Opposite of ease-hover-brightness

## Usage
```css
.element {
  transition: filter 0.3s ease;
}

.element:hover {
  filter: brightness(var(--ease-darken-amount, 0.8));
}
```

## Customisation
| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-darken-amount` | `0.8` | Brightness multiplier (< 1 darkens) |

## Browser Support
- CSS Filters — Chrome 53+, Firefox 49+, Safari 9.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
