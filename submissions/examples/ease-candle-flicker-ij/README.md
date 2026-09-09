# Candle Flicker

A candle flame sways and shivers with irregular rhythm while a soft glow breathes around it.

## How is it used?

The flame runs a short, non-repeating flicker keyframe that scales and rotates slightly on each frame, giving an organic wobble:

```css
.flame.lit {
  animation: flicker 0.5s ease-in-out infinite;
}

@keyframes flicker {
  0% { transform: scale(1, 1) rotate(0deg); }
  25% { transform: scale(0.92, 1.08) rotate(-4deg); }
  50% { transform: scale(1.06, 0.95) rotate(3deg); }
  75% { transform: scale(0.95, 1.06) rotate(-2deg); }
}
```

## Why is it useful?

A chaotic multi-keyframe loop with uneven scales fakes the physics of fire far better than a steady pulse. The same technique drives cursor glows, warning lights, and "alive" status indicators.
