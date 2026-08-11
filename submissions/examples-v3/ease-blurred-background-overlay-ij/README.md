# Blurred Background Overlay

A CSS animated overlay that uses `backdrop-filter: blur()` combined with an opacity transition to create a smooth, modern blurred-background modal effect.

## Features

- Smooth fade-in/out overlay with `backdrop-filter` blur
- Content scales up on appear (scale 0.9 → 1)
- Dismiss via close button or click-outside
- Fully customizable via CSS custom properties

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--blur-overlay-duration` | `0.35s` | Overlay fade and content scale duration |
| `--blur-overlay-blur-amount` | `8px` | Backdrop blur radius |
| `--blur-overlay-bg` | `rgba(0,0,0,0.5)` | Overlay background color |
| `--blur-overlay-content-bg` | `#fff` | Content modal background color |

## Usage

```html
<link rel="stylesheet" href="style.css">
```

Include the overlay markup and toggle the `visible` class via JavaScript:

```js
overlay.classList.add('visible');   // show
overlay.classList.remove('visible'); // hide
```

## Browser Support

`backdrop-filter` is supported in all modern browsers. For older browsers the overlay degrades to a semi-transparent background without blur.
