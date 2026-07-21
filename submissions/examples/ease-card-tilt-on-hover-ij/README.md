# Card Tilt on Hover

Interactive 3D card tilt effect driven by mouse position using CSS perspective and JavaScript-set custom properties.

## Features

- Real-time tilt tracking mouse position
- Smooth perspective-based 3D rotation
- Scale enhancement on hover for depth
- Fully customizable via CSS custom properties

## Usage

```html
<div class="tilt-wrapper">
  <div class="tilt-card" data-tilt>
    <h2>Title</h2>
    <p>Content</p>
  </div>
</div>
```

### JavaScript

The included script reads `--tilt-rotateX` and `--tilt-rotateY` CSS custom properties and updates them based on mouse coordinates relative to each card.

## CSS Custom Properties

| Property            | Default                    | Description                |
| ------------------- | -------------------------- | -------------------------- |
| `--tilt-perspective`| `800px`                    | Parent perspective value   |
| `--tilt-scale`      | `1.02`                     | Hover scale factor         |
| `--tilt-bg`         | `#ffffff`                  | Card background color      |
| `--tilt-shadow`     | `0 12px 28px rgba(...)`    | Card box-shadow            |
| `--tilt-radius`     | `16px`                     | Card border-radius         |
| `--tilt-max-degree` | `15`                       | Maximum tilt angle (deg)   |
