# Checkbox Indeterminate

Indeterminate checkbox with animated cycling through unchecked, checked, and indeterminate states. Visual feedback via CSS transitions on background, border, and checkmark icon.

## Features

- Three cycling states: unchecked, checked, indeterminate
- Smooth transitions on background, border, and icon
- CSS custom properties for colors and speed
- Accessible with ARIA attributes
- Cycle button to step through states

## Usage

Set CSS vars on `.ci-checkbox`:
- `--check-color`: checked state accent (default `#e94560`)
- `--indeterminate-color`: indeterminate state accent (default `#f59e0b`)
- `--transition-speed`: state transition duration (default `0.25s`)
