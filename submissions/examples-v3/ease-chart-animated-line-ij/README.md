# Chart Animated Line

Animated line chart with SVG drawing path effect. The line strokes itself on load using `stroke-dasharray`/`stroke-dashoffset` animation.

## Features

- SVG path drawing animation via `stroke-dashoffset`
- Customizable line color, width, draw speed, and chart height
- Animated grid lines and data points
- Replay button to restart animation
- CSS custom properties for full theming

## Usage

Set CSS vars on `.cl-chart`:
- `--line-color`: stroke color (default `#e94560`)
- `--line-width`: stroke width (default `3`)
- `--draw-duration`: animation duration (default `2s`)
- `--chart-height`: SVG viewBox height (default `200`)
