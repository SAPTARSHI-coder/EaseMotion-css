# Connection Line Draw

**Issue:** #36566

Connection line drawing between nodes using SVG `stroke-dasharray` / `stroke-dashoffset` animation.

## CSS Custom Properties

| Variable         | Default    | Description                     |
|------------------|------------|---------------------------------|
| `--line-color`   | `#89b4fa`  | Color of connection lines       |
| `--node-color`   | `#cba6f7`  | Fill color of graph nodes       |
| `--stroke-width` | `2.5`      | Stroke width of lines           |
| `--draw-duration`| `1.2s`     | Duration of the line draw anim  |

## Usage

Place SVG lines with class `.conn-line` and circles with class `.graph-node` inside a container. Add `.drawn` class to lines to trigger the draw animation. Use the Redraw button or call `redrawLines()` to replay.
