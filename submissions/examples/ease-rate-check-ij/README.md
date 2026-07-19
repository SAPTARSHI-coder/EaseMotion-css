# ease-rate-check

A pure CSS interactive 5-star rating component using the radio button hack and CSS sibling selectors.

## Usage
Open demo.html in a browser. The component uses a `.ease-rate-group` container with `flex-direction: row-reverse`. This allows the `~` sibling selector to style previous stars when hovering or checking a specific rating.

## Custom Properties
| Property | Default | Description |
|---|---|---|
| --rate-star-color | #d1d5db | Default unselected star color |
| --rate-star-active | #fbbf24 | Selected star color |
| --rate-star-hover | #fcd34d | Hovered star color |

## Notes
The stars pop with the `ease-star-pop` animation when selected. All interactivity, including hover states propagating to the left, is handled by native HTML structure and CSS without any JavaScript.
