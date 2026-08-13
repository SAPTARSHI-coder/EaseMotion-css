# Tag Input Chip

Tag input component with animated chip creation and removal.

## Features

- Press Enter to add a tag as a colored chip
- Chips animate in with scale + opacity entrance
- Remove button with shrink + fade animation
- Duplicate prevention and empty input guard
- Backspace to remove last tag
- Color-coded tags with automatic color cycling
- Preset buttons for quick demo
- Custom properties for easy theming

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--tic-duration` | 0.3s | Transition duration |
| `--tic-chip-bg` | #3b82f6 | Default chip background |
| `--tic-text-color` | #ffffff | Chip text color |
| `--tic-remove-color` | rgba(255,255,255,0.7) | Remove button color |
| `--tic-radius` | 6px | Border radius |

## Usage

Include `style.css` and copy the HTML structure. Tags are accessible via `getTags()` in the demo.
