# Conic-Gradient Starburst Animated Loaders

## What does this do?

Four CSS-only loading spinners built from `conic-gradient`, each demonstrating a different animation technique.

| Loader | Technique |
|---|---|
| Starburst ring | Alternating colour/transparent conic sectors + `mask-image` donut + `rotate` |
| Sweep arc | `@property --sweep` as `<angle>` drives the arc stop in `conic-gradient()` |
| Pizza spin | 8-sector spectrum + `hue-rotate` filter cycling while spinning |
| Pulse burst | 16-sector starburst with `scale` + `opacity` pulse layered on rotation |

## How the starburst ring works

```css
background: conic-gradient(
  oklch(65% 0.25 210deg) 0deg 30deg,
  transparent            30deg 60deg,
  /* ... repeated every 60deg ... */
);
mask-image: radial-gradient(
  circle,
  transparent 24px,   /* hollow centre */
  black 25px,
  black 38px,         /* ring band */
  transparent 39px    /* outer edge */
);
```

The `mask-image` cuts the filled circle into a ring shape. Rotating the whole element gives the spinning effect without touching the gradient.

## How the sweep arc works

`@property --sweep` is registered as `syntax: "<angle>"` so it can be interpolated by `@keyframes`. The conic-gradient uses `var(--sweep)` as the colour-stop boundary:

```css
background: conic-gradient(
  oklch(68% 0.22 145deg) 0deg var(--sweep),
  oklch(68% 0.22 145deg / 0.15) var(--sweep) 360deg
);
@keyframes sweep-fill {
  from { --sweep: 0deg; }
  to   { --sweep: 360deg; }
}
```
