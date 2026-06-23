# CSS-Only Shimmering Text Loading Effect

A pure CSS shimmering text loading effect — no JavaScript required.

## Preview

Dark background with text that animates a left-to-right sweeping light, similar to skeleton loaders on Facebook/YouTube.

## How it works

- Uses `background: linear-gradient(90deg, ...)` clipped to text via `background-clip: text`
- A `@keyframes shimmer` animation sweeps the gradient infinitely
- Fully responsive, works on any text content

## Usage

```html
<link rel="stylesheet" href="style.css" />
<p class="shimmer-text">Loading...</p>
```

## Browser Support

All modern browsers (Chrome, Firefox, Safari, Edge)
