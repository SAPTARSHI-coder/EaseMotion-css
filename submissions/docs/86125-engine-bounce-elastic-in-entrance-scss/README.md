# Bounce Elastic In Entrance SCSS Animation Mixin Pattern

A reusable Bounce Elastic In Entrance animation pattern for EaseMotion.

## Animation

Keyframe:

`ease-bounce-elastic-in-entrance`

Utility class:

`ease-anim-bounce-elastic-in-entrance`

## Configuration

The animation supports configurable CSS variables:

- `--bounce-duration`
- `--bounce-timing`
- `--bounce-distance`

## Performance

The animation uses `transform` and `opacity` to support efficient,
hardware-accelerated rendering.

## Accessibility

A `prefers-reduced-motion: reduce` override disables the animation
for users who prefer reduced motion.

Closes #86125