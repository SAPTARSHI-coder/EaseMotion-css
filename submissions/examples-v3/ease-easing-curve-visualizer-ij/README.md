# Easing Curve Visualizer

**Issue:** [#36637](https://github.com/easemotion/easemotion-css/issues/36637)

Interactive cubic-bezier curve preview component. Drag control points on the SVG canvas or use the range sliders to craft custom easing curves. The preview ball and progress bar animate along the defined curve in real time.

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--curve-color` | `#60a5fa` | Color of the bezier curve path |
| `--bg-color` | `#1e1e2e` | Card background |
| `--point-color` | `#f472b6` | Color of draggable control points |
| `--preview-duration` | `2s` | Duration of the preview animation |

## Features

- Drag control points directly on the SVG or use sliders
- Preset buttons for common easing functions (ease, ease-in-out, ease-in, ease-out, bounce)
- Live cubic-bezier CSS code output
- Preview ball and progress bar that animate along the curve
- Click the visualization area to replay the preview animation
- Dark theme
