# Chart Linear Growth

A line chart component with an animated stroke-dasharray effect that draws the line from left to right.

## Features

- Line draws from left to right using SVG stroke-dasharray/stroke-dashoffset animation
- Data points fade in as the line passes over them
- Replay button to re-trigger the animation

## Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--line-duration` | `2s` | Duration of the line draw animation |
| `--line-color` | `#4f8ef7` | Color of the line |
| `--line-bg` | `#ffffff` | Background color |
| `--line-point-color` | `#4f8ef7` | Color of the data points |

## Usage

Include `style.css` and `demo.html` in your project. Data points are defined as SVG `<polyline>` coordinates.
