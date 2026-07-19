# Dropdown Menu Item Hover

A vertical dropdown menu where items reveal a slide-in indicator bar and background color on hover.

## Usage

Include `style.css` and use the following markup:

```html
<nav class="dmih-menu">
  <a href="#" class="dmih-item">Item</a>
</nav>
```

All styling is CSS-only using `:hover`. No JavaScript required.

## CSS Variables

| Variable                      | Default  | Description               |
|-------------------------------|----------|---------------------------|
| `--dmih-transition-duration`  | `0.25s`  | Hover animation speed     |
| `--dmih-hover-bg`             | `#f3f4f6`| Item hover background     |
| `--dmih-indicator-color`      | `#6366f1`| Slide-in indicator color  |
| `--dmih-text-color`           | `#1f2937`| Item text color           |

## How it works

- A `::before` pseudo-element acts as the left-side indicator bar
- On hover, `scaleY` transitions from 0 to 1 with a top-center transform origin
- The item background and left padding also transition for a polished effect

## Browser Support

All modern browsers supporting CSS custom properties and pseudo-element transitions.
