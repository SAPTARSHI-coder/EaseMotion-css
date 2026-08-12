# Ink Plume Diffuse

A drop of ink disperses through water as a slow, cloudy bloom that thins into the depths.

## How is it used?

Two radial-gradient overlays expand on offset scales, both easing out to a near-invisible plume:

```css
.plume.disperse::before {
  animation: diffuse-a 3s cubic-bezier(0.33, 1, 0.68, 1) both;
}

@keyframes diffuse-a {
  0% {
    transform: scale(0.2);
    opacity: 0.95;
  }
  100% {
    transform: scale(3.4);
    opacity: 0;
  }
}
```

## Why is it useful?

Two differently-sized expanding gradients blur together into a soft plume with no `filter: blur` cost. The decelerating ease mimics diffusion — ideal for liquid fills, loading "absorb" effects, and notification pings.
