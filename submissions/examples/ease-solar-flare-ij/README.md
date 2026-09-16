# Solar Flare

A pulsing sun disc hurls arcs of plasma outward from four limbs in synchronized bursts.

## How is it used?

Each `.flare` is a radial-gradient ellipse anchored to the sun's rim via `transform-origin`, erupting and flying outward with a matched 3.2s loop:

```css
.flare-a {
  top: -14px;
  left: 44px;
  transform-origin: 50% 200%;
  animation: flare-a 3.2s ease-in infinite;
}

@keyframes flare-a {
  0% {
    transform: scale(0.2) rotate(0deg);
    opacity: 0;
  }
  35% {
    opacity: 0.95;
    transform: scale(1.15) rotate(14deg);
  }
  100% {
    transform: scale(1.5) rotate(28deg) translateY(-26px);
    opacity: 0;
  }
}
```

## Why is it useful?

Same-duration loops on all flares keep the eruption in sync with the sun's `sun-breathe` pulse, selling cause and effect. Origin-anchored rotations let one ellipse fake an arc of plasma, useful for energy, magic, and warning effects.
