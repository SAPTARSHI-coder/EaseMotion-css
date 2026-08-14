# Animated Gradient

> A smooth-shifting gradient background component with interactive controls. Built with CSS custom properties and JavaScript.

## Features

- Multiple preset color palettes (Sunset, Ocean, Forest, Neon)
- Adjustable animation speed (1s–10s)
- Rotatable gradient angle (0°–360°)
- Play / pause toggle
- Demo text overlay with backdrop blur

## Usage

Include the stylesheet and HTML structure. The gradient animates via `background-position` shifting inside a `background-size: 300% 300%` area.

```html
<link rel="stylesheet" href="style.css" />
```

```html
<div class="ag-gradient" id="gradient"></div>
```

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ag-duration` | `3s` | Animation cycle duration |
| `--ag-color-1` | `#ff6b6b` | First gradient color |
| `--ag-color-2` | `#feca57` | Second gradient color |
| `--ag-color-3` | `#ff9ff3` | Third gradient color |
| `--ag-angle` | `45deg` | Gradient direction |

## Browser Support

Chrome, Firefox, Safari, Edge — any browser supporting CSS `@keyframes`, `background-size`, and `backdrop-filter`.

## License

MIT
