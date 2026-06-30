# ease-hover-skew-left

## What does it do?

Element skews to the left on hover using `skewX()` — pure CSS, no JavaScript.

## Features

- `skewX(-5deg)` on `:hover`
- Smooth 0.3s transition
- Custom property `--ease-skew-angle`
- Adds dynamic energy to buttons and cards

## Usage

```css
.element {
  transition: transform 0.3s ease;
}

.element:hover {
  transform: skewX(var(--ease-skew-angle, -5deg));
}
```

## Customisation

| Variable            | Default | Description                  |
| ------------------- | ------- | ---------------------------- |
| `--ease-skew-angle` | `-5deg` | Skew angle (negative = left) |

## Browser Support

- `transform` + `transition` — Chrome 36+, Firefox 16+, Safari 9+

## Tech Stack

- HTML + CSS only, no JavaScript

## Preview

Open `demo.html` directly in browser.
