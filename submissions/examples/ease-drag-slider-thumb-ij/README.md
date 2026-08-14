# Drag Slider Thumb

A draggable slider thumb with gradient fill track. Position via `--dt-val` (0 to 1). Thumb scales and glows when dragging. CSS handles the thumb position and fill width.

## Features

- Draggable slider thumb
- Gradient fill track
- Thumb scale and glow on drag
- Position via --dt-val CSS variable
- Numeric value display

## Usage

Set `--dt-val` (0 to 1) on `.slider-thumb` to control position. CSS translates the thumb via `calc(var(--dt-val) * 100% - 50%)`.
