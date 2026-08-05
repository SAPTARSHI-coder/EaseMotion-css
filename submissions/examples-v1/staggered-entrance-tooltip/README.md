# Staggered Entrance Tooltip

A pure CSS animated **Tooltip** utilizing a smooth **Staggered Entrance** interaction transition, styled to complement **Product Catalog** interface aesthetics.

## Features
- **Zero JavaScript**: Pure CSS implementation using `:hover`, `:focus-within`, and staggered `transition-delay`.
- **Keyboard Accessible**: Tabbing into the container triggers the staggered entrance animation naturally.
- **Customizable**: Exposes CSS custom parameters to tweak timing and easing.

## Custom Properties
Override these in your stylesheet to customize the animation:
- `--tooltip-transition-speed`: Base transition speed (default `0.4s`).
- `--tooltip-stagger-delay`: Delay increment between each item (default `0.05s`).
- `--tooltip-ease`: Easing function for the animations.
