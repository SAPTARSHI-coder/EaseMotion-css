# Geyser Erupt Burst

A geyser vent blasts three plumes of steam high into the air with staggered timing, then settles back.

## How is it used?

Each steam plume is a radial-gradient ellipse that shoots upward, grows, and fades. Three share one keyframe with negative delays:

```css
.geyser.blowing .steam-1 {
  animation: blast 2.4s ease-out both;
}

.geyser.blowing .steam-2 {
  animation: blast 2.4s ease-out both;
  animation-delay: -0.2s;
}

@keyframes blast {
  0% {
    transform: translate(-50%, 0) scale(0.4);
    opacity: 0;
  }
  25% {
    opacity: 0.95;
  }
  100% {
    transform: translate(-50%, -200px) scale(1.6);
    opacity: 0;
  }
}
```

## Why is it useful?

`ease-out` plus growing `scale` makes the plume look like it's expanding while slowing — exactly how real steam behaves. Staggered plumes at different widths fake turbulence, a pattern for explosions, smoke, and celebration bursts.
