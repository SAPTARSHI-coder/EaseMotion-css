# Bounce-Pulse Tooltip Component

A lightweight, pure CSS tooltip module combining an elastic spring bounce entry animation with an integrated ambient pulse beacon indicator.

## Features
- **Pure CSS/HTML**: Powered entirely by native hover/focus-within states with zero JavaScript dependencies.
- **Accessible**: Fully accessible with ARIA attributes and `prefers-reduced-motion` support.
- **Customizable**: Exposes CSS custom properties to adjust bounce timing, spring elasticity, and pulse beacon speed.

## Customization Parameters
The following CSS custom properties are available in `style.css`:
- `--bounce-duration`: Controls the speed of the elastic bounce animation.
- `--bounce-easing`: Elastic `cubic-bezier` curve driving recoil recoil dynamics.
- `--pulse-cycle-duration`: Controls the breathing pulse rate of the status dot beacon.