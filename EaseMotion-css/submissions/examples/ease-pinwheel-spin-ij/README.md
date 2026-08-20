# Pinwheel Spin

A four-blade paper pinwheel spins smoothly when blown, each blade a CSS triangle with its own gentle bob.

## How is it used?

Each blade is a `border`-triangle rotated 90° around the center. The whole wheel gets a fast `rotate` loop with a snappy cubic-bezier for that "caught in the wind" feel:

```css
.blade-1 {
  border-width: 0 44px 84px 44px;
  border-color: transparent transparent #ff6b6b transparent;
  transform-origin: 50% 0;
  transform: translate(-50%, -50%) rotate(0deg);
}

.pinwheel.spinning {
  animation: wheel-spin 0.8s cubic-bezier(0.2, 0.8, 0.3, 1) infinite;
}

@keyframes wheel-spin {
  100% {
    transform: rotate(360deg);
  }
}
```

## Why is it useful?

Pure CSS triangles plus one center-pivot rotation create a crisp pinwheel with zero images. The staggered blade bob adds idle life before spinning — a reusable touch for any circular widget.
