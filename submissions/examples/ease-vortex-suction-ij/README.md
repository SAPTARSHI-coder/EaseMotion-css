# Vortex Suction

Motes spiral around a glowing whirlpool and get pulled into the center as they shrink.

## How is it used?

Each spark orbits via the rotate-translate-counter-rotate trick, but instead of counter-rotating, the translate distance collapses to `0` so it spirals inward:

```css
.spark {
  animation: suck-in 3s linear infinite;
}

@keyframes suck-in {
  0% {
    transform: rotate(0deg) translateX(100px) scale(1);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: rotate(720deg) translateX(0) scale(0.2);
    opacity: 0;
  }
}
```

## Why is it useful?

Shrinking the translate radius across the loop creates an inward spiral with a single keyframe. Offset by negative delays, six sparks form a continuous vortex — a great metaphor for loading, draining, or "capturing" states.
