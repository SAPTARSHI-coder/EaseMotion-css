# Radial Progress Ring

Animated SVG circular progress indicators driven by CSS keyframes and custom properties.

## Features
- Pure SVG and CSS implementation
- Smooth entrance stroke-dashoffset animation
- Customizable stroke width, color, and size via CSS variables
- Dark mode support

## Usage

```html
<link rel="stylesheet" href="style.css" />

<div class="ease-radial">
  <svg class="ease-radial__svg" viewBox="0 0 100 100">
    <circle class="ease-radial__bg" cx="50" cy="50" r="42" />
    <circle class="ease-radial__fill ease-radial__fill--75" cx="50" cy="50" r="42" />
  </svg>
  <span class="ease-radial__text">75%</span>
</div>
```

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--ease-radial-color` | `#6c63ff` | Primary stroke progress color |
| `--ease-radial-track` | `#e2e8f0` | Background track circle color |
| `--ease-radial-size` | `120px` | Overall diameter of progress circle |
| `--ease-radial-stroke` | `8px` | Stroke thickness |
