# ease-scroll-trigger-reveal

An element that fades and slides up when scrolled into view.

## Features
- Uses IntersectionObserver for scroll detection
- Smooth opacity and transform transitions
- Controlled entirely via `--revealed` custom property (0 or 1)

## CSS Custom Property Control
Set `--revealed: 0` (hidden) or `--revealed: 1` (visible) on the target element to control its state.
