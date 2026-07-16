# Animation Delay Stagger

Shows how `animation-delay` creates staggered entrance effects for lists and grids. Also demonstrates negative delays, which cause elements to appear to start mid-animation.

## Features

- Vertical list stagger with 6 items cascading in from the left.
- 3×3 grid stagger with row and column delay calculations.
- Negative delay comparison (0s, -1s, -2s, -3s) showing out-of-sync pulses.
- Uses CSS custom properties to compute per-element delays.

## Topics Covered

- `animation-delay` with positive values for sequencing
- Negative `animation-delay` for mid-animation starts
- Calculating stagger timing with `calc()` and custom properties
- Combining transform and opacity for entrance animations
