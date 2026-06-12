# mask-image Animation

## What does this do?

Animates CSS `mask-image` with gradient masks to create reveal effects — a gradient sweep that reveals content, and a radial spotlight that scans across text. Both use pure CSS keyframes animating `mask-position`.

## How is it used?

```css
.element {
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent,
    #000 30%,
    #000 70%,
    transparent
  );
  -webkit-mask-size: 200% 100%;
  animation: sweep 3s ease-in-out infinite;
}

@keyframes sweep {
  0%,
  100% {
    -webkit-mask-position: 200% 0;
  }
  50% {
    -webkit-mask-position: 0 0;
  }
}
```

## Why is it useful?

CSS masks enable sophisticated reveal and transition effects without SVG or images — loading shimmers, spotlight effects, wipe transitions, and text reveals. Animating mask position is performant (GPU-composited) and fully declarative, fitting EaseMotion CSS's zero-dependency, animation-first philosophy.
