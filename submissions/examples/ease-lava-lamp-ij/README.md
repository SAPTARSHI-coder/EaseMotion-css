# Lava Lamp

Waxy blobs rise through a glowing gradient, morph and shrink near the top, then sink back down.

## How is it used?

Three blobs share one rise-and-fall keyframe, offset by staggered delays so the column always looks busy:

```css
.blob-1 {
  animation: lava-rise 8s ease-in-out infinite;
}

.blob-2 {
  animation: lava-rise 8s ease-in-out infinite;
  animation-delay: -4s;
}

@keyframes lava-rise {
  0% {
    transform: translateX(-50%) translateY(0) scale(1);
  }
  30% {
    transform: translateX(-50%) translateY(-120px) scale(1.15);
  }
  50% {
    transform: translateX(-50%) translateY(-150px) scale(1.3);
    opacity: 0.55;
  }
  100% {
    transform: translateX(-50%) translateY(40px) scale(1);
  }
}
```

## Why is it useful?

Staggered delays on a shared loop fake concurrent, independent motion with a single keyframe. The mid-flight `scale` swell before fading mimics liquid convection and gives the loop a soft, waxy feel.
