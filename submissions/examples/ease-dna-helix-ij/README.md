# DNA Helix

A double helix rotates continuously while rung bars rise and fall, using 3D transforms and staggered delays.

## How is it used?

Two strand bars spin with `rotateY` while scaling down mid-rotation to fake depth; the rungs share the same 6s loop but are phase-shifted by 1s each:

```css
.strand {
  animation: helix-spin 6s linear infinite;
  transform-style: preserve-3d;
}

@keyframes helix-spin {
  0% {
    transform: rotateY(0deg) scale(1);
    opacity: 1;
  }
  50% {
    transform: rotateY(180deg) scale(0.55);
    opacity: 0.45;
  }
}
```

## Why is it useful?

`scale()` inside a `rotateY` loop is a cheap way to fake 3D depth on any axis. Negative/positive delays make several elements share one loop while never overlapping — the core trick behind equalizer bars, marquees, and conveyor animations.
