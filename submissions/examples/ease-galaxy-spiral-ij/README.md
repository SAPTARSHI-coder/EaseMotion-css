# Galaxy Spiral

A two-armed spiral galaxy rotates slowly around a pulsing core with orbiting dust motes.

## How is it used?

Each arm is a single radial gradient masked into a spiral band that spins on its own timeline. The core breathes with a `box-shadow` pulse, and dust dots orbit by rotating around an offset center:

```css
.arm {
  background: radial-gradient(circle at 50% 50%,
    transparent 42%, rgba(255, 190, 120, 0.85) 46%,
    rgba(200, 120, 255, 0.6) 52%, transparent 60%);
  animation: galaxy-spin 14s linear infinite;
}

@keyframes dust-orbit {
  0% {
    transform: rotate(0deg) translateX(78px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(78px) rotate(-360deg);
  }
}
```

## Why is it useful?

The classic orbit trick — rotate, translate along the rotated axis, then counter-rotate — keeps the dot upright while it travels a perfect circle. Layering two counter-rotating arms and a pulsing core builds a deep-space look from three gradients.
