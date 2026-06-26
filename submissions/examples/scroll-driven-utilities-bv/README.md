# Scroll-Driven Animation Utilities

Adds `ease-scroll-*` utility classes to EaseMotion CSS that create scroll-driven animations using the CSS Scroll-Driven Animations API (`scroll-timeline`, `view-timeline`).

## Classes

| Class | Effect |
|-------|--------|
| `.ease-scroll-progress` | Fixed progress bar at the top of the page |
| `.ease-scroll-reveal` | Fade in + slide up 20px |
| `.ease-scroll-slide-left` | Slide in from the right |
| `.ease-scroll-slide-right` | Slide in from the left |
| `.ease-scroll-scale` | Scale from 0.9 to 1 |
| `.ease-scroll-blur` | Unblur from 6px |

## Browser Support

Requires Chrome 115+ or Edge 115+ for scroll-driven animation support. Falls back gracefully with static display in other browsers.

## Reduced Motion

Respects `prefers-reduced-motion: reduce` by disabling all scroll-driven animations.
