# Ripple Wave

Concentric rings expand from a drop point across a circular pool and fade at the edges.

## How is it used?

Four `.ring` elements share one expanding-and-fading keyframe, staggered with negative delays so ripples overlap continuously:

```css
.surface.wave .ring-2 {
  animation-delay: -0.8s;
}

@keyframes ripple {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.9;
  }
  100% {
    transform: translate(-50%, -50%) scale(26);
    opacity: 0;
  }
}
```

## Why is it useful?

Negative delays again let four identical elements pretend to be a continuous expanding wave. Scaling a thin ring border is far cheaper than SVG or canvas — the same trick powers radar, sonar, and focus ripples.
