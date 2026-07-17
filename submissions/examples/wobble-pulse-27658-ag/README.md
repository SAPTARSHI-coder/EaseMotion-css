# Keyframe Wobble & Pulse Animation Mixins

This guide details configuration specs for generating SCSS wobble and pulse micro-interaction mixins.

---

## Technical Overview: Wobble & Pulse Mixins

Writing custom transforms for simple alert states results in verbose css files. Packaging keyframes inside mixins ensures standard behaviors:

```scss
// SCSS Wobble & Pulse Mixins
@mixin pulse-hover($duration: 1.2s) {
  &:hover {
    animation: pulseAnimation $duration ease-in-out infinite;
  }
}

@mixin wobble-hover($duration: 0.8s) {
  &:hover {
    animation: wobbleAnimation $duration ease-in-out infinite;
  }
}

// Class mapping
.pulse-hover { @include pulse-hover; }
.wobble-hover { @include wobble-hover; }
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Hover over the **Heartbeat Pulse** card — verify it breathes (pulses) smoothly.
3. Hover over the **Alert Wobble** card — verify it tilts and skews side to side.
