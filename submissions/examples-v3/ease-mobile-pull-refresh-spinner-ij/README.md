# Mobile Pull Refresh Spinner

A "pull to refresh" interaction with circular spinner rotation tied to pull progress via `--pull-progress`. Past the threshold, releasing triggers a full rotation animation. Content translates down with the pull gesture.

## Features

- Circular spinner rotates proportionally to pull distance via `--pull-progress`
- CSS handles visual rotation; JS sets progress from drag distance
- Past threshold triggers full refresh animation
- Content translates down with pull gesture
- Smooth cubic-bezier transitions

## Usage

Set `--pull-progress` (0 to 1) on `.pr-spinner`. CSS uses `transform: rotate(calc(var(--pull-progress) * 360deg))` for rotation. Add `.pr-refreshing` class for the continuous spin animation.
