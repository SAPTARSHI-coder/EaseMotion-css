# ease-lazy-load-image

A smooth image loading component that displays a shimmering skeleton placeholder while the image loads, followed by a graceful fade and zoom-out entrance animation.

## Usage
Open demo.html in a browser. Wrap your `<img>` inside the `.ease-lazy-container`. Attach a simple `onload` listener (as shown in the demo script) to append the `.loaded` class to the container when the image finishes downloading.

## Custom Properties
| Property | Default | Description |
|---|---|---|
| --lazy-bg | #e2e8f0 | Base skeleton background color |
| --lazy-pulse | #f1f5f9 | Shimmer gradient highlight color |
| --lazy-radius | 12px | Border radius for container and image |

## Notes
The `.ease-lazy-container` handles the `ease-shimmer` linear gradient background animation. When the `.loaded` class is applied via JavaScript, the shimmer stops, and the `.ease-lazy-image` fades in from `opacity: 0` to `opacity: 1` while simultaneously scaling down from `1.05` to `1` for a premium feel.
