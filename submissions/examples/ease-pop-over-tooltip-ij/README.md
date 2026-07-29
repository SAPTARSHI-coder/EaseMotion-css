# Pop Over Tooltip

Tooltips that appear on hover with a scale + opacity animation. Position and animation origin controlled via `--tip-from`, `--tip-top`, `--tip-left`, etc. CSS variables. Supports top, bottom, left, right positions.

## Features

- Appear on hover with scale and opacity animation
- Position via --tip-top, --tip-bottom, --tip-left, --tip-right
- Animation origin via --tip-from (translate + scale)
- Smooth bounce cubic-bezier transition
- Four-direction support (top, bottom, left, right)

## Usage

Wrap a trigger element and `.tooltip-box` in a `.tooltip-wrap`. Set position and `--tip-from` based on direction. Hovering the trigger shows the tooltip with animation.
