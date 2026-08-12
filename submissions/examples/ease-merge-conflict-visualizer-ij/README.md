# ease-merge-conflict-visualizer (#36813)

Merge conflict visualizer with animated diff line highlighting.

## CSS Custom Properties

| Variable               | Default    | Description                       |
|------------------------|------------|-----------------------------------|
| `--diff-bg`            | `#1a1a2e`  | Card / diff background            |
| `--added-color`        | `#3ccf7e`  | Added / incoming line color       |
| `--removed-color`      | `#e55555`  | Removed / current line color      |
| `--highlight-duration` | `0.4s`     | Highlight animation duration      |

## Features

- Added / removed diff lines with color backgrounds
- Conflict markers (<<<<<<<, =======, >>>>>>>)
- "Accept Current" / "Accept Incoming" buttons with highlight
- Monospace code font
- Dark theme card layout
