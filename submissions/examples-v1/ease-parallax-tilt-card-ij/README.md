# Parallax Tilt Card

A card that tilts in 3D based on mouse position. JS calculates cursor position relative to the card center and sets `--tilt-x` and `--tilt-y` CSS variables. CSS uses `perspective` with `rotateX`/`rotateY` transforms.

## Features

- 3D tilt effect driven by mouse position
- Tilt angles via `--tilt-x` and `--tilt-y` CSS variables
- Smooth bounce cubic-bezier transition
- Perspective for realistic 3D depth
- Gradient background with shadow

## Usage

Create a `.tilt-card` with `.tilt-inner` child. Set `--tilt-x` and `--tilt-y` as deg values. JS updates these on mousemove.
