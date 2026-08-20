# Icon Rotate on Hover

A grid of brand icons that rotate on hover with smooth CSS transitions. Each icon can have a unique rotation direction and amount.

## Features

- Grid layout of Font Awesome brand icons
- Each icon rotates on hover with configurable rotation angle
- Smooth transition via CSS custom properties
- Hover effect changes icon color and adds shadow to card
- Interactive JS applies per-card rotation from `data-rotation` attribute

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ir-duration` | `0.6s` | Transition duration |
| `--ir-rotation` | `360deg` | Default rotation angle |
| `--ir-icon-color` | `#4a5568` | Default icon color |
| `--ir-hover-color` | `#667eea` | Icon color on hover |
| `--ir-icon-size` | `3rem` | Icon font size |

## Usage

```html
<link rel="stylesheet" href="style.css">
<!-- Include Font Awesome or replace with SVG -->
<div class="icon-card" data-rotation="360">
  <i class="fa-brands fa-react"></i>
</div>
```

Set `data-rotation` to any angle (positive = clockwise, negative = counter-clockwise).
