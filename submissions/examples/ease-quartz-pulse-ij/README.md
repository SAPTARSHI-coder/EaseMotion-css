# Quartz Pulse

A crystal oscillator flashes with a sharp attack, then releases a fading pulse ring — one tick per loop.

## How is it used?

The gem uses a quick brightness/scale spike early in the loop; the rings expand outward from the same origin on a matching duration, offset by half a beat:

```css
.gem {
  animation: quartz-flash 2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
}

.crystal .ring-2 {
  animation-delay: -1s;
}

@keyframes pulse-ring {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.9;
  }
  100% {
    transform: translate(-50%, -50%) scale(4.4);
    opacity: 0;
  }
}
```

## Why is it useful?

A hard cubic-bezier attack followed by a slow decay reads as an electronic tick — ideal for oscillators, sonar, and "live" status markers. The offset ring doubles the beat density without a second keyframe set.
