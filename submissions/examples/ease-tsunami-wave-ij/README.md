# Tsunami Wave

A wave wall rises, curls into a crest, and slides foam forward before settling — looping like a slow-motion break.

## How is it used?

The wave rises with `scaleY`, its `clip-path` curls over at peak, and the foam band slides across the face:

```css
.wall {
  animation: wall-curve 3.4s ease-in-out infinite;
}

@keyframes wall-curve {
  50% {
    clip-path: polygon(0% 100%, 0% 60%, 20% 34%, 40% 46%, 52% 26%, 68% 42%, 86% 30%, 100% 58%, 100% 100%);
  }
}

.foam {
  animation: foam-slide 3.4s ease-in-out infinite;
}
```

## Why is it useful?

Animating `clip-path` between wave silhouettes morphs a flat bar into a curling breaker with no images or SVG. Paired with a rising `scaleY`, it's a compact build-up-and-release narrative for hero sections or loading states.
