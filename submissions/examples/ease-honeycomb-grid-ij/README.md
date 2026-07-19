# ease-honeycomb-grid

A CSS grid component that arranges items in a hexagonal honeycomb pattern.

## Usage
Open demo.html in a browser. Wrap your items in the `.ease-honeycomb-grid` container. Each item should have the `.ease-honeycomb-cell` class.

## Custom Properties
| Property | Default | Description |
|---|---|---|
| --honeycomb-color | #f97316 | Hover state color |
| --honeycomb-bg | #1e293b | Default cell background |
| --honeycomb-gap | 4px | Spacing between cells |

## Notes
CSS `clip-path` is used to create the hexagon shapes. Flexbox with alternating margins creates the interlocking grid layout.
