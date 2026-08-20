# Avatar CSS Animation & Keyframe Library

## Description
This PR adds a comprehensive CSS Animation and Keyframe library to the `avatar` component. It provides five production-ready keyframe animations (fade-in-up, scale-in, pulse, spin, shimmer) with stagger delay utilities, all using only `transform` and `opacity` to remain on the GPU compositor thread.

All animations are fully accessible and automatically disable when users have `prefers-reduced-motion: reduce` enabled.

## Keyframe Animations
- `ease-fade-in-up`: Smooth entrance animation from below.
- `ease-scale-in`: Spring-physics scale-in entrance with overshoot.
- `ease-pulse`: Breathing pulse for loading or attention states.
- `ease-spin`: Continuous rotation for loaders/spinners.
- `ease-shimmer`: Horizontal shimmer for skeleton loading states.

## Changes
- `style.css`: 90+ lines with keyframes, utility classes, stagger delays, and reduced-motion override.
- `demo.html`: Six-panel demo showcasing all five animations.
- `README.md`: Describes the animation library and accessibility considerations.
\nFixes #60262\n