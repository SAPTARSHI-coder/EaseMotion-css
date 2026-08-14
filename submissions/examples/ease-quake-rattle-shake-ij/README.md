# Quake Rattle Shake

A city skyline shudders when a tremor is triggered, with each building shaking at a different amplitude.

## How is it used?

Buildings rotate from their base (`transform-origin: 50% 100%`) on small alternating keyframes. Taller buildings get the wider swing; negative delays desync them:

```css
.buildings.rattling .build-2 {
  animation: rattle-lg 0.5s ease-in-out infinite;
  animation-delay: -0.1s;
}

@keyframes rattle-sm {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(1.2deg);
  }
  75% {
    transform: rotate(-1.2deg);
  }
}
```

## Why is it useful?

Rotating around the base is how real structures sway — no translate jitter. Different amplitudes + delays sell an earthquake; the same "shake per element" pattern powers error states, impact feedback, and screen-shake on mobile.
