# Scale-Hover Tooltip Component

A lightweight, pure CSS tooltip module that executes elastic spring scale-hover transformations upon hover or focus events.

## Features
- **Pure CSS/HTML**: Triggered via native hover/focus-within states with zero JavaScript dependencies.
- **Accessible**: Fully accessible with ARIA attributes and `prefers-reduced-motion` support.
- **Customizable**: Exposes CSS custom properties to tweak scaling speed, initial scale factor, and spring easing curves.

## Customization Parameters
The following CSS custom properties are available in `style.css`:
- `--tooltip-scale-duration`: Controls the duration of the scaling transformation.
- `--tooltip-scale-easing`: Spring `cubic-bezier` curve controlling the elastic recoil.
- `--tooltip-initial-scale`: Base scale multiplier prior to activation.