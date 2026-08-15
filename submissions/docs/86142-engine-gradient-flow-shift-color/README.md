# Gradient Flow Shift Color Animation

A reusable Gradient Flow Shift Color animation utility for EaseMotion.

## Animation

Keyframe:

`ease-gradient-flow-shift-color`

Utility class:

`ease-anim-gradient-flow-shift-color`

## Configuration

The animation duration and timing can be configured through:

- `--gradient-duration`
- `--gradient-timing`

## Performance

The animated gradient layer uses `transform` and `opacity` properties
with `translate3d()` to support efficient hardware-accelerated motion.

## Accessibility

The animation respects:

`prefers-reduced-motion: reduce`

When reduced motion is enabled, the animation is disabled and the
gradient remains static.

## Usage

```html
<div class="ease-anim-gradient-flow-shift-color">
  Gradient content
</div>