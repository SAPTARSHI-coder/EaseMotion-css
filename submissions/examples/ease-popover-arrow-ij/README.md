# ease-popover-arrow

A popover box with an arrow pointing down to its trigger button. Animated entrance with fade and scale controlled by a CSS custom property.

## Features
- Arrow pointing down via `::after` border trick
- Fade + scale entrance animation
- Toggle visibility with `--open` property
- Dark theme card styling

## Usage
Set `--open` to `0` (hidden) or `1` (visible) on the `.poa-container` element via `style.setProperty()`. The popover fades in and scales up when open.
