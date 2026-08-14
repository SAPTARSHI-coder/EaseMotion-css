# Card Flip Hover 3D

A 3D card flip component with customizable perspective, rotation, and backface-visibility — pure CSS.

## Features

- 3D rotation on hover via `rotateY` (customizable via `--cfh-rotate-y`)
- Smooth configurable transition via `--cfh-transition-duration`
- Dual-face design with `backface-visibility: hidden`
- Perspective controlled via `--cfh-perspective`
- Customizable front/back gradients via `--cfh-front-bg` and `--cfh-back-bg`
- Respects `prefers-reduced-motion`

## Usage

```html
<div class="card-flip-hover-3d">
  <div class="card-flip-hover-3d-inner">
    <div class="card-flip-hover-3d-front">Front</div>
    <div class="card-flip-hover-3d-back">Back</div>
  </div>
</div>
```

## Custom Properties

| Variable                  | Default                       | Description               |
|---------------------------|-------------------------------|---------------------------|
| `--cfh-perspective`       | `1000px`                      | 3D perspective distance   |
| `--cfh-rotate-y`          | `180deg`                      | Y-axis rotation on hover  |
| `--cfh-transition-duration` | `0.6s`                      | Transition duration       |
| `--cfh-front-bg`          | `linear-gradient(135deg, ...)`| Front face background     |
| `--cfh-back-bg`           | `linear-gradient(135deg, ...)`| Back face background      |

## Browser Support

- Chrome 12+, Firefox 10+, Safari 4+, Edge 12+

## Tech Stack

- HTML + CSS only, no JavaScript
