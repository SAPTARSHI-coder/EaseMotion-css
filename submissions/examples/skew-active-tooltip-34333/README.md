# Skew-Active Tooltip Component

## What it does
This component implements a hardware-accelerated, pure CSS animated tooltip utilizing a dynamic `skewX` interaction transition. The tooltip smoothly tilts out from a sharp angle into a balanced alignment when its container triggers a hover or focus-within state.

## How to use it
1. Wrap your target interactive element (like a dashboard metric or action button) in a container with the class `.tooltip-trigger`.
2. Nest a block element inside containing your contextual helper text with the class `.em-tooltip`.
3. Customize aesthetics cleanly at the root level using the exposed standard CSS custom properties:
   - `--tooltip-bg`: Changes background coloring.
   - `--tooltip-timing`: Adjusts transition duration curves.

## Why it fits EaseMotion CSS
It adheres strictly to the repository's mission: delivering highly requested, fluid UI motion patterns using modern CSS architectures with absolutely zero JavaScript overhead.