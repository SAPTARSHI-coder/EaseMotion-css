# ease-hover-underline-center

## What does it do?
Underline expands from center outward on hover — pure CSS, no JavaScript. A center-origin variant of the underline animation effect.

## Features
- `::after` with `left: 50%` and `translateX(-50%)` for center origin
- `width: 0 → 100%` on `:hover`
- Custom property `--ease-underline-color` for color
- Perfect for navigation links

## Usage
```css
.link {
  position: relative;
  text-decoration: none;
}

.link::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  height: 2px;
  background: var(--ease-underline-color, rebeccapurple);
  transform: translateX(-50%);
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

## Browser Support
- `::after` + `transition` — Chrome 26+, Firefox 16+, Safari 6.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
