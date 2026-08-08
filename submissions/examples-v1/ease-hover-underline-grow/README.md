# ease-hover-underline-grow

## What does it do?
Underline animates from 0 to full width from left to right on hover — pure CSS, no JavaScript. Perfect for navigation links.

## Features
- `::after` pseudo-element with `width: 0 → 100%` on `:hover`
- Positioned at text bottom
- Custom properties for color and thickness
- Smooth 0.3s transition

## Usage
```css
.link {
  position: relative;
  text-decoration: none;
}

.link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: var(--ease-underline-thickness, 2px);
  background: var(--ease-underline-color, rebeccapurple);
  transition: width 0.3s ease;
}

.link:hover::after {
  width: 100%;
}
```

## Customisation
| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-underline-color` | `#a78bfa` | Color of the underline |
| `--ease-underline-thickness` | `2px` | Height of the underline |

## Browser Support
- `::after` + `transition` — Chrome 26+, Firefox 16+, Safari 6.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
