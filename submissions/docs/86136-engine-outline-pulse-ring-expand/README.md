# Outline Pulse Ring Expand Animation

A reusable Outline Pulse Ring Expand animation utility for EaseMotion.

## Animation

Keyframe:

`ease-outline-pulse-ring-expand`

Utility class:

`ease-anim-outline-pulse-ring-expand`

## Configuration

The animation supports configurable CSS variables:

- `--ring-duration`
- `--ring-timing`
- `--ring-scale`

## Performance

The animation uses `transform` and `opacity` with `translate3d()`
for efficient hardware-accelerated motion.

## Accessibility

The animation respects:

`prefers-reduced-motion: reduce`

When reduced motion is enabled, the animation is disabled.

## Usage

```html
<div class="ease-anim-outline-pulse-ring-expand">
  Content
</div>