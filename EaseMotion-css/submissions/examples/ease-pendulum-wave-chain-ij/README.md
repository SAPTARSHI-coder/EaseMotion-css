# Pendulum Wave Chain

Nine pendulums with slightly different lengths swing together, their phases drifting into a traveling wave.

## How is it used?

Each pendulum gets a unique duration and arm length; the shared swing keyframe runs at its own speed:

```js
p.style.setProperty("--dur", (1.3 + i * 0.16).toFixed(2) + "s");
p.style.setProperty("--len", (86 - i * 6).toFixed(0) + "px");
```

```css
.pendulum {
  transform-origin: 50% 0;
  animation: swing var(--dur) ease-in-out infinite;
}

@keyframes swing {
  0%, 100% {
    transform: rotate(24deg);
  }
  50% {
    transform: rotate(-24deg);
  }
}

.bob {
  top: var(--len);
}
```

## Why is it useful?

Slightly-offset periods naturally desynchronize over time — the pendulums start in sync, spiral into a wave, and drift back. No timing math needed; just slightly different durations. This emergent behavior is great for loading states and ambient physics.
