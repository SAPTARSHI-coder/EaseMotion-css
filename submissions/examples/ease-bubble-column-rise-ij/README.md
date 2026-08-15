# Bubble Column Rise

Bubbles wobble upward through a deep aquarium column, fading in at the bottom and popping at the surface.

## How is it used?

Each bubble is a radial-gradient circle with a `border` rim, sized and timed via custom properties:

```css
.bubble {
  width: var(--size);
  animation: rise var(--dur) linear infinite;
  animation-delay: var(--delay);
}

@keyframes rise {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  12% {
    opacity: 0.95;
  }
  100% {
    transform: translateY(-360px) translateX(14px);
    opacity: 0;
  }
}
```

## Why is it useful?

The radial highlight inside the circle sells a glossy bubble without images. Random delays + durations from a few lines of JS keep the column dense but organic — the same recipe powers rising particles, confetti, and rain.
