# Jellyfish Float

A translucent jellyfish bell pulses while its tentacles sway on offset timings, drifting gently through the water.

## How is it used?

The bell squashes vertically with `scale(1.12, 0.88)` — a sine-like pulse — while each tentacle rotates on its own delayed sway loop:

```css
.bell {
  transform-origin: 50% 10%;
  animation: bell-pulse 3.2s ease-in-out infinite;
}

@keyframes bell-pulse {
  0%, 100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.12, 0.88);
  }
}

.tentacle-1 {
  animation: sway 3.6s ease-in-out infinite;
  animation-delay: -0.9s;
}
```

## Why is it useful?

Separate loops with negative delays create organic, never-synced motion from a tiny amount of CSS. The pulsing-bell + trailing-sway pair is the recipe behind any "alive" organism-style UI, from loaders to mascots.
