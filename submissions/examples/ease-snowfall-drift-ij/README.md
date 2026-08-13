# Snowfall Drift

Snowflakes of varying size and sway fall past a snowy hill, each following its own wind drift.

## How is it used?

Each flake gets a size, duration, delay, and horizontal sway amplitude; the keyframe arcs it sideways mid-fall:

```css
.flake {
  animation: fall var(--dur) linear infinite;
  animation-delay: var(--delay);
}

@keyframes fall {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  50% {
    transform: translateY(160px) translateX(var(--sway));
  }
  100% {
    transform: translateY(320px) translateX(calc(var(--sway) * -0.4));
    opacity: 0;
  }
}
```

## Why is it useful?

A single mid-frame `translateX` bend makes flakes drift instead of fall straight, and `calc` on the custom property lets each flake ease back the other way. This gentle-arc pattern works for petals, ash, and ambient dust.
