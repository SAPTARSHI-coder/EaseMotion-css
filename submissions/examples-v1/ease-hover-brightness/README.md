# ease-hover-brightness

## What does it do?

Element gets brighter on hover using `filter: brightness()` — pure CSS, no JavaScript.

## Features

- `filter: brightness(1.2)` on `:hover`
- GPU-accelerated filter transition
- Custom property `--ease-brightness-amount`
- Good for images and cards

## Usage

```css
.element {
  transition: filter 0.3s ease;
}

.element:hover {
  filter: brightness(var(--ease-brightness-amount, 1.2));
}
```

## Customisation

| Variable                   | Default | Description           |
| -------------------------- | ------- | --------------------- |
| `--ease-brightness-amount` | `1.2`   | Brightness multiplier |

## Browser Support

- CSS Filters — Chrome 53+, Firefox 49+, Safari 9.1+

## Tech Stack

- HTML + CSS only, no JavaScript

## Preview

Open `demo.html` directly in browser.
