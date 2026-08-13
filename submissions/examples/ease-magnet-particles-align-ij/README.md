# Magnet Particles Align

Scattered iron filings rotate into vertical alignment along a magnet's field, snapping with a springy overshoot.

## How is it used?

JS scatters `.particle` spans, each storing a random start angle and a small stagger delay; the `align` keyframe rotates them to 90°:

```js
p.style.setProperty("--start", Math.floor(Math.random() * 360) + "deg");
p.style.setProperty("--delay", (Math.random() * 0.25).toFixed(2) + "s");
```

```css
.magnet.on .particle {
  animation: align 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  animation-delay: var(--delay);
}

@keyframes align {
  100% {
    transform: translate(-50%, -50%) rotate(90deg) scale(1.15);
  }
}
```

## Why is it useful?

The overshoot bezier (`1.56` elasticity) makes each filing snap into place. Per-particle delays create a satisfying cascade. This rotation-alignment pattern doubles for buttons, tooltips, and "settle into place" list items.
