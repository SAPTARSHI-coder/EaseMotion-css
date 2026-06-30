# ease-hover-opacity-brighten

## What does it do?

Element goes from dimmed to full opacity on hover — pure CSS, no JavaScript. The inverse of ease-hover-opacity-dim.

## Features

- Items start at reduced opacity (0.7 by default)
- Hover transitions to full opacity (1.0)
- Custom property `--ease-brighten-from` controls starting opacity
- Perfect for highlight/selection models in grids

## Usage

```css
.item {
  opacity: var(--ease-brighten-from, 0.7);
  transition: opacity 0.3s;
}

.item:hover {
  opacity: 1;
}
```

## Customisation

| Variable               | Default | Description                            |
| ---------------------- | ------- | -------------------------------------- |
| `--ease-brighten-from` | `0.7`   | Starting opacity for non-hovered items |

## Browser Support

- `opacity` + `transition` — Chrome 26+, Firefox 16+, Safari 6.1+

## Tech Stack

- HTML + CSS only, no JavaScript

## Preview

Open `demo.html` directly in browser.
