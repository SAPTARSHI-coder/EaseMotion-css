# Color Picker Swatch

A grid of color swatches with animated active state. Active index via `--cp-active`. CSS highlights the selected swatch with scale, border ring, and shadow.

## Features

- Clickable color swatches with animated active state
- Active index via `--cp-active` CSS variable
- Scale and ring highlight on selected swatch
- Hover scale effect on all swatches
- Selected color label display

## Usage

Set `--cp-active` (0-based index) on `.swatch-grid`. Each `.cp-swatch` uses `--cp-color` for its background. JS toggles `.active` class on the selected swatch for visual highlight.
