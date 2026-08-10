# Float-Drift Badge Component

A lightweight, pure CSS floating badge module that executes smooth organic drift trajectories over card layers using performance-optimized 2D transform matrices.

## Features
- **Pure CSS/HTML**: Fully animated via keyframes with zero external JavaScript dependencies.
- **Accessible**: Built with native support for `prefers-reduced-motion` user preferences.
- **Customizable**: Exposes CSS custom properties to adjust drift amplitude, speed, and timing offset vectors.

## Customization Parameters
The following `:root` properties are exposed in `style.css`:
- `--float-duration`: Controls the complete cycle time of the floating loop.
- `--drift-amplitude-y`: Maximum vertical displacement distance.
- `--drift-amplitude-x`: Maximum horizontal drift shift offset.