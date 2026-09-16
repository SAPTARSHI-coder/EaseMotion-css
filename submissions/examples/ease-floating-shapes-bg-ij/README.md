# Floating Shapes Background

An animated background featuring floating geometric shapes (circles, squares, triangles) that drift slowly upward with varying speeds for a parallax depth effect.

## Features

- Three shape types: circle, square, triangle
- Randomised size, position, colour, speed, and delay per shape
- Parallax-like depth from varied animation durations
- Toggle animation on/off
- Regenerate shapes with a click

## Usage

```html
<div class="fs-bg" id="fsBg"></div>
```

Shapes are generated dynamically via JavaScript. The `18` shape count can be adjusted in the `populate()` call.

## Custom Properties

| Property              | Default     | Description                |
|-----------------------|-------------|----------------------------|
| `--fs-duration`       | `12s`       | Base float animation time  |
| `--fs-shape-color-1`  | `#6366f1`   | Indigo shape colour        |
| `--fs-shape-color-2`  | `#ec4899`   | Pink shape colour          |
| `--fs-shape-color-3`  | `#06b6d4`   | Cyan shape colour          |
| `--fs-opacity`        | `0.3`       | Default shape opacity      |
| `--fs-size-min`       | `20px`      | Minimum shape size         |
| `--fs-size-max`       | `60px`      | Maximum shape size         |

## Behaviour

Each shape gets a randomised `animation-duration` (8–20 s), `animation-delay` (0–10 s), and opacity (0.15–0.5) to create natural-feeling depth. The `@keyframes fs-float` translates shapes upward by 120 % of the viewport height while rotating 360°.
