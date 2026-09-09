# Clip Path Polygon Shapes

Demonstrates CSS `clip-path: polygon()` with 12 geometric shapes. Hover each card to see a clip-path transition to rhombus.

## Features

- 12 polygon shapes: triangle, trapezoid, parallelogram, rhombus, pentagon, hexagon, octagon, star, arrow, cross, and organic blob
- Hover animation: shape morphs to rhombus on card hover
- Gradient backgrounds using EaseMotion color tokens
- Dark mode and reduced-motion safe

## Design Tokens Used

- `--ease-color-primary` / `--ease-color-secondary` / `--ease-color-info` — gradient colors
- `--ease-color-success` / `--ease-color-warning` / `--ease-color-danger` — gradient stops
- `--ease-radius-*` — card and box rounding
- `--ease-shadow-sm` / `--ease-shadow-md` — card elevation
- `--ease-font-sans` / `--ease-font-mono` — fonts
- `--ease-space-*` — spacing

## Usage

```css
.clip-star {
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  background: linear-gradient(135deg, #6c63ff, #8b5cf6);
}
```
