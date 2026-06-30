# ease-hover-opacity-dim

## What does it do?

Element dims to lower opacity on hover — pure CSS, no JavaScript. Ideal for image grids where hovering one item subtly de-emphasises the rest.

## Features

- Hovered card stays at full opacity, siblings dim
- Custom property `--ease-dim-amount` controls dim level
- Smooth 0.3s transition
- Perfect for galleries and grid layouts

## Usage

```css
.grid:hover .item {
  opacity: var(--ease-dim-amount, 0.7);
}

.item:hover {
  opacity: 1 !important;
}
```

## Customisation

| Variable            | Default | Description                     |
| ------------------- | ------- | ------------------------------- |
| `--ease-dim-amount` | `0.7`   | Opacity of non-hovered siblings |

## Browser Support

- `opacity` + `transition` — Chrome 26+, Firefox 16+, Safari 6.1+

## Tech Stack

- HTML + CSS only, no JavaScript

## Preview

Open `demo.html` directly in browser.
