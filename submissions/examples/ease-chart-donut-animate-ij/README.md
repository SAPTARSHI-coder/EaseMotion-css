# Donut Chart Animate

An animated donut chart that fills its segments from 0 to their target percentage on load. Includes a colour-coded legend and a Replay button to re-trigger the animation.

## Features

- SVG circle with `stroke-dasharray` animation
- Staggered segment fill on page load
- Colour-matched legend with percentage labels
- Replay button to restart animation
- Customisable via CSS custom properties

## Custom Properties

| Property                | Default  | Description            |
| ----------------------- | -------- | ---------------------- |
| `--donut-duration`      | `1.2s`   | Segment fill duration  |
| `--donut-size`          | `260px`  | Chart container size   |
| `--donut-stroke-width`  | `8`      | SVG stroke width       |
| `--donut-bg`            | `#f8f9fa`| Page background        |
