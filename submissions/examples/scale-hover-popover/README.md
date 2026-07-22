# Scale-Hover Popover

A pure CSS animated **Popover** utilizing a smooth **Scale-Hover** interaction transition, styled to complement **Responsive Dashboard** interface aesthetics.

## Features
- **Zero JavaScript**: Pure CSS implementation using `:hover` and `:focus-within`.
- **Keyboard Accessible**: Tabbing into the container expands the popover, keeping it accessible for keyboard users.
- **Customizable**: Exposes CSS custom parameters to easily tweak behavior.

## Custom Properties
Override these in your stylesheet to customize the animation:
- `--popover-scale-factor`: Initial scale of the popover (default `0.9`).
- `--popover-transition-speed`: Speed of the scale and opacity transition.
- `--popover-ease`: Easing function for the transition.
