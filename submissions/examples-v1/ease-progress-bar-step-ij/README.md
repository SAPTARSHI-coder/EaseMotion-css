# Progress Bar Step

A multi-step progress indicator with animated fill line and active dot states. Current step via `--pb-step`, total steps via `--pb-total`. CSS handles the fill line width and dot coloring.

## Features

- Animated progress fill line between steps
- Active dot highlighted with glow
- Step label color transition
- Previous/Next navigation
- Width driven by `--pb-step` and `--pb-total` CSS variables

## Usage

Set `--pb-step` (current step) and `--pb-total` (total steps) on `.progress-steps`. CSS handles the fill line width and step coloring automatically.
