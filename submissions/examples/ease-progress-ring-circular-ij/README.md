# Circular Progress Ring

A circular progress ring component built with SVG. The ring fills with an animated stroke-dashoffset transition, displays the percentage in the center, and changes color based on value thresholds. Includes controls for value, animation speed, and ring size.

## Features

- SVG circle with stroke-dasharray / dashoffset animation
- Color transitions at configurable thresholds (red < 25%, amber < 50%, blue < 75%, green >= 75%)
- Interactive slider and size/speed controls
- Multiple ring sizes supported
- Smooth cubic-bezier animation

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--prc-duration` | `0.8s` | Transition duration |
| `--prc-ring-color` | `#3b82f6` | Progress ring stroke color |
| `--prc-track-color` | `#e2e8f0` | Track circle stroke color |
| `--prc-text-color` | `#1e293b` | Percentage text color |
| `--prc-size` | `180px` | Ring wrapper dimensions |
| `--prc-stroke-width` | `6` | SVG circle stroke width |

## Usage

```html
<link rel="stylesheet" href="style.css">
<!-- Include demo.html markup -->
<script src="script.js"></script>
```

Customize defaults:
```css
:root {
  --prc-size: 240px;
  --prc-stroke-width: 8;
  --prc-duration: 1.2s;
}
```
