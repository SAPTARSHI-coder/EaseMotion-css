# ease-hover-shadow-pop

## What does it do?
Element gains a large dramatic shadow on hover — pure CSS, no JavaScript.

## Features
- `box-shadow: 0 20px 60px` on `:hover`
- Combined with slight lift (`translateY(-4px)`)
- Custom property `--ease-shadow-pop-color` for shadow tint
- Smooth 0.3s transition

## Usage
```css
.element {
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.element:hover {
  box-shadow: 0 20px 60px var(--ease-shadow-pop-color, rgba(0,0,0,0.4));
  transform: translateY(-4px);
}
```

## Customisation
| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-shadow-pop-color` | `rgba(0,0,0,0.4)` | Shadow color with opacity |

## Browser Support
- `box-shadow` + `transition` — Chrome 26+, Firefox 16+, Safari 6.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
