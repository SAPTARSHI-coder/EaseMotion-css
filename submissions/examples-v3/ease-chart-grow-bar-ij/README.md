# Chart Grow Bar

A bar chart component with bars that animate growing from the bottom on load.

## Features

- Bars animate from height 0 to their target value
- Staggered animation delays for a cascading effect
- Value labels displayed on each bar
- Replay button to re-trigger the animation

## Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--chart-grow-duration` | `0.8s` | Duration of the grow animation |
| `--chart-bar-color` | `#4f8ef7` | Fill color of the bars |
| `--chart-bg` | `#ffffff` | Background color |
| `--chart-label-color` | `#333333` | Color of labels and values |

## Usage

Include `style.css` and `demo.html` in your project. Bars use `data-value` attributes to determine height.
