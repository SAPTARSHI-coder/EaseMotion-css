# Hourglass Grain Fall

Sand drains from the top bulb through a thin neck and piles up in the bottom — a looping countdown.

## How is it used?

Three elements share one 5s loop: the top sand collapses with `scaleY`, the stream thins and fades, the bottom pile rises:

```css
.top-sand {
  transform-origin: 50% 100%;
  animation: pour-down 5s ease-in infinite;
}

@keyframes pour-down {
  100% {
    transform: scaleY(0.12);
  }
}

.bottom-sand {
  transform-origin: 50% 0;
  animation: pile-up 5s ease-out infinite;
}
```

## Why is it useful?

Mirrored `scaleY` origin (top shrinks from its base, bottom grows from its top) sells the transfer of mass. Same-duration loops keep top, stream, and pile perfectly in sync — a compact stand-in for countdown progress.
