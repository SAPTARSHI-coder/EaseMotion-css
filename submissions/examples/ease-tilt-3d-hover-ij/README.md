# 3D Tilt Hover

Card tilts in 3D following mouse cursor position using perspective transforms. JS drives `--tilt-x` and `--tilt-y` custom properties, CSS applies `rotateX`/`rotateY` with smooth transitions.

## Features

- 3D tilt follows cursor position
- Smooth easing via `--duration` and `--easing` custom properties
- Perspective parent for depth
- Resets to flat on mouse leave
- Fully customizable via `:root` variables

## Usage

JS sets `--tilt-x` and `--tilt-y` (in degrees) on `.tilt-card`. CSS applies `transform: rotateX(var(--tilt-x)) rotateY(var(--tilt-y))` with a smooth transition.
