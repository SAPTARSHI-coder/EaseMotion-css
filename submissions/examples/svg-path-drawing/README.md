# SVG Path Self-Drawing Animation

An elegant animation utilizing SVG properties to simulate an illustration drawing itself dynamically.

## Features
- Stroke Dash Logic: Uses stroke-dasharray and stroke-dashoffset to trace the path.
- Keyframe Sequencing: Chains animations to fill the path once drawing is complete.

## Usage
Replace the path inside the SVG with your own. You may need to use a short JS snippet like path.getTotalLength() during development to find the correct stroke-dasharray value for custom SVGs.
