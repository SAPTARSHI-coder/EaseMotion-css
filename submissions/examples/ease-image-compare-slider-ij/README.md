# ease-image-compare-slider

A smooth, interactive before-and-after image comparison slider utilizing CSS `clip-path` and native range inputs.

## Usage
Open demo.html in a browser. Wrap two images (`.ease-compare-before`, `.ease-compare-after`), a range `<input>`, and the `.ease-slider-handle` inside the `.ease-compare-container`.

## Custom Properties
| Property | Default | Description |
|---|---|---|
| --slider-handle-color | #ffffff | Center handle button color |
| --slider-line-color | #ffffff | Vertical separator line color |
| --slider-shadow | rgba(0,0,0,0.3) | Shadow for depth |

## Notes
A small script is required to update the `--position` custom CSS variable on the parent container when the range input changes. This variable smoothly adjusts the `clip-path` of the top image.
