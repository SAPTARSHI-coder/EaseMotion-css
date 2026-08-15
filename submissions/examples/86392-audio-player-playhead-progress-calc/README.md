# Audio Player — Playhead Progress Calculation

## Overview

This submission demonstrates an audio player playhead whose progress is
calculated as a percentage of the total audio duration.

The accompanying Vitest specification validates the calculation across normal
playback positions, boundary conditions, extreme values, and invalid inputs.

## Formula

The basic calculation is:

```text
progress = (currentTime / duration) × 100