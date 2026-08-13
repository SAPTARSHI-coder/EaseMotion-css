# Card Flip Hover

A 3D card flip component that reveals back content on hover — pure CSS with customizable perspective, duration, and colors.

## Features

- 3D rotation on hover via `rotateY(180deg)`
- Smooth configurable transition via `--flip-duration`
- Dual-face design with `backface-visibility: hidden`
- Perspective controlled via `--flip-perspective`
- Customizable front/back gradients via `--flip-front-bg` and `--flip-back-bg`
- Set of 3 cards arranged in a row
- Respects `prefers-reduced-motion`

## Usage

```html
<div class="card-flip">
  <div class="card-flip-inner">
    <div class="card-flip-front">Front</div>
    <div class="card-flip-back">Back</div>
  </div>
</div>
```

## Custom Properties

| Variable                | Default                       | Description             |
|-------------------------|-------------------------------|-------------------------|
| `--flip-duration`       | `0.6s`                        | Transition duration     |
| `--flip-perspective`    | `1000px`                      | 3D perspective distance |
| `--flip-front-bg`       | `linear-gradient(135deg, ...)`| Front face background   |
| `--flip-back-bg`        | `linear-gradient(135deg, ...)`| Back face background    |
| `--flip-border-color`   | `rgba(255,255,255,0.15)`      | Card border color       |

## Browser Support

- Chrome 12+, Firefox 10+, Safari 4+, Edge 12+

## Tech Stack

- HTML + CSS only, no JavaScript
