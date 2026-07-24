# Ripple-Wave Tooltip Component

A lightweight, pure CSS tooltip module combining smooth overlay entry with integrated multi-ring concentric ripple wave propagation indicators.

## Features
- **Pure CSS/HTML**: Powered entirely by native hover/focus-within states with zero JavaScript dependencies.
- **Accessible**: Fully accessible with ARIA attributes and `prefers-reduced-motion` support.
- **Customizable**: Exposes CSS custom properties to adjust tooltip transition timing, ripple speed, and wave expansion scale factors.

## Customization Parameters
The following CSS custom properties are available in `style.css`:
- `--tooltip-duration`: Controls the speed of the tooltip slide and fade entry.
- `--ripple-speed`: Adjusts the propagation frequency cycle of the concentric ripple waves.
- `--ripple-scale-max`: Sets the maximum expansion radius multiplier for radiating waves.