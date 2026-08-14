# Graviton Magnet Field

A lab scene with two facing magnets whose field lines ripple, while a metal ball shuttles between them. Reversing polarity flips the ball's travel direction.

## How is it used?

The ball runs a looping translate keyframe and the field lines ripple underneath:

```css
.metal-ball {
  animation: ball-shuttle 2.4s ease-in-out infinite;
}
@keyframes ball-shuttle {
  0% { transform: translateX(-60px); }
  50% { transform: translateX(60px); }
  100% { transform: translateX(-60px); }
}
```

`.reverse` swaps the ball onto a mirrored keyframe (`ball-shuttle-reverse`) whose phase starts on the opposite side, so reversing the polarity visibly inverts the motion. Field lines are three copies of the same gradient bar animated with staggered delays.

## Why is it useful?

Swapping an entire keyframe by class is a clean way to change an animation's direction without reversing its timeline. The pattern — alternate between two transforms on a toggle — applies to A/B comparisons, theme-aware motion, and any "flip the behavior" control.
