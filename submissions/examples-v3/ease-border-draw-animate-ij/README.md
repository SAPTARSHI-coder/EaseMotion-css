# Border Draw Animate (#31849)

An animated border that draws around an element sequentially, with each side rendered in a different color.

## Features
- Pseudo-elements with `clip-path` keyframe animation for sequential drawing
- Four distinct border segment colors (red, yellow, blue, purple)
- Controlled via `--draw` custom property (`0` = hidden, `1` = drawing)

## Usage
Set `--draw: 1` on `.draw-box` to animate the border drawing around the element.
