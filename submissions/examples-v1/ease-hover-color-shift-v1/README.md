# ease-hover-color-shift

## What does it do?

Background color smoothly shifts to a new color on hover — pure CSS, no JavaScript.

## Features

- Smooth 0.3s `background-color` transition on `:hover`
- Custom property `--ease-color-shift-to` for target color
- Preset shift examples (blue→purple, green→teal, amber→rose)

## Usage

```css
.element {
  background-color: #6366f1;
  transition: background-color 0.3s;
}

.element:hover {
  background-color: var(--ease-color-shift-to, #22c55e);
}
```

## Customisation

| Variable                | Default   | Description                      |
| ----------------------- | --------- | -------------------------------- |
| `--ease-color-shift-to` | `#22c55e` | Target background color on hover |

## Browser Support

- `transition` — Chrome 26+, Firefox 16+, Safari 6.1+
- CSS Custom Properties — Chrome 49+, Firefox 31+, Safari 9.1+

## Tech Stack

- HTML + CSS only, no JavaScript

## Preview

Open `demo.html` directly in browser.
