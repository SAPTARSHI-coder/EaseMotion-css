# ease-hover-saturate

## What does it do?
Colors become more vivid on hover using `filter: saturate()` — pure CSS, no JavaScript.

## Features
- `filter: saturate(1.5)` on `:hover`
- GPU-accelerated filter transition
- Custom property `--ease-saturate-amount`
- Great for image galleries

## Usage
```css
.element {
  transition: filter 0.3s ease;
}

.element:hover {
  filter: saturate(var(--ease-saturate-amount, 1.5));
}
```

## Customisation
| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-saturate-amount` | `1.5` | Saturation multiplier |

## Browser Support
- CSS Filters — Chrome 53+, Firefox 49+, Safari 9.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
