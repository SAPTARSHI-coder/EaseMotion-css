# ease-histogram-chart

An animated CSS histogram (bar chart) component.

## Usage
Open demo.html in a browser. Use inline styles to set the `height` percentage of each `.ease-histogram-bar` relative to its container.

## Custom Properties
| Property | Default | Description |
|---|---|---|
| --chart-primary | #6366f1 | Bar color |
| --chart-hover | #4f46e5 | Hover state bar color |
| --chart-bg | #f1f5f9 | Chart background color |

## Notes
CSS handles the initial growth animation using `scaleY` and `transform-origin: bottom`, as well as a subtle lift effect on hover.
