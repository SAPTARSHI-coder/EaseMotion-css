# ease-error-fallback-ui

A polished error fallback component designed to gracefully handle and display error states.

## Usage
Open demo.html in a browser. Wrap the contents in the `.ease-error-fallback` container. Add the `.active` class to trigger the attention-grabbing shake animation on the warning icon.

## Custom Properties
| Property | Default | Description |
|---|---|---|
| --error-primary | #ef4444 | Accent color (button, top border) |
| --error-primary-light | #fef2f2 | Icon background color |
| --error-text | #64748b | Description text color |
| --error-heading | #1e293b | Heading text color |

## Notes
CSS handles a smooth `ease-slide-up` entrance animation on load and a custom `ease-shake` animation using `translate3d` to draw attention to the error icon, providing clear and responsive feedback when operations fail.
