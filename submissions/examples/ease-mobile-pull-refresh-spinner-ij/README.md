# Mobile Pull Refresh Spinner

A "pull to refresh" interaction. The circular spinner rotates proportionally to the pull distance via `--pull-progress`. Past the threshold, releasing triggers a full rotation animation.

## Features

- Circular spinner rotation tied to pull progress
- CSS handles visual rotation via `--pull-progress`
- JS sets progress variable from drag distance
- Content translates down with pull gesture

## Usage

Set `--pull-progress` (0-1) on `.mpr-spinner`. Add `.mpr-refreshing` class for full rotation animation.
