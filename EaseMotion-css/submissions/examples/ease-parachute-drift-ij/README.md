# Parachute Drift

A parachutist billows open their canopy and drifts down to a landing strip with a gentle sway.

## How is it used?

One long keyframe animates the whole group's descent, while a child canopy runs a fast billow loop:

```css
.parachute.descending {
  animation: chute-drift 4.4s ease-in forwards;
}
@keyframes chute-drift {
  0%   { opacity: 0; transform: translateY(0) translateX(0) rotate(0deg); }
  8%   { opacity: 1; }
  50%  { transform: translateY(120px) translateX(14px) rotate(4deg); }
  100% { transform: translateY(300px) translateX(-6px) rotate(-3deg); }
}
.canopy {
  animation: canopy-billow 0.9s ease-in-out infinite alternate;
}
```

The parent translates and sways over 4.4s while the canopy keeps a fast, independent scale oscillation — two timelines layered on nested elements. Shroud lines are thin rotated bars spanning canopy to jumper.

## Why is it useful?

Nested independent timelines (a slow trip on the parent, a quick flap on the child) make motion feel alive instead of rigid. This is the core of any object that "carries its own energy" — flags, balloons, birds — and the sway via alternating translateX is a reusable gentle-drift pattern.
