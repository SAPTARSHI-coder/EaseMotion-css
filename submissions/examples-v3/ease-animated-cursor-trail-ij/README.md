# Animated Cursor Trail

A cursor trail effect where dots follow the mouse with staggered delay and fading opacity. Position via `--td-x` and `--td-y` CSS variables. Delay via `--td-delay`. Uses `requestAnimationFrame` for smooth animation.

## Features

- Dots follow cursor with trailing physics
- Position via --td-x and --td-y CSS variables
- Staggered delay via --td-delay
- Gradient-colored dots with glow
- Opacity fades along the trail

## Usage

Each `.trail-dot` receives `--td-x`, `--td-y` for position and `--td-delay` for stagger. CSS translates the dot and controls opacity.
