# ease-hover-vintage

## What does it do?

Element gets a vintage film color grade on hover using a combination of CSS filters — pure CSS, no JavaScript.

## Features

- `sepia + contrast + brightness` filter combination
- Smooth 0.4s transition
- Custom property `--ease-vintage-intensity` controls effect strength
- Works with any background color or gradient

## Usage

```css
.element {
  transition: filter 0.4s ease;
}

.element:hover {
  filter: sepia(calc(var(--ease-vintage-intensity, 1) * 0.6))
    contrast(calc(var(--ease-vintage-intensity, 1) * 1.1))
    brightness(calc(var(--ease-vintage-intensity, 1) * 0.95));
}
```

## Customisation

| Variable                   | Default | Description                            |
| -------------------------- | ------- | -------------------------------------- |
| `--ease-vintage-intensity` | `1`     | Multiplier for filter values (0.5–1.5) |

## Browser Support

- CSS Filters + `transition` — Chrome 53+, Firefox 49+, Safari 9.1+

## Tech Stack

- HTML + CSS only, no JavaScript

## Preview

Open `demo.html` directly in browser.
