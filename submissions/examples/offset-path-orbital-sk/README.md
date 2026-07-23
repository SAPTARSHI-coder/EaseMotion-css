# CSS Motion Path Orbital Elements

Animates elements along geometric paths using `offset-path`, `offset-distance`, and `offset-rotate` — the CSS Motion Path API. No trigonometry, no JavaScript `requestAnimationFrame`, no SVG `animateMotion`.

## Variants

| Variant | Path | `offset-rotate` |
|---------|------|-----------------|
| Single orbit | `circle(130px at 50% 50%)` | `0deg` (upright) |
| Solar system | 3× `circle()` at different radii | `0deg` |
| Elliptical comet | `ellipse(160px 100px at 50% 50%)` | `auto` (tangent-aligned) |

## Core technique

```css
@keyframes ease-orbit {
  from { offset-distance: 0%; }
  to   { offset-distance: 100%; }
}

.orbit-body {
  position: absolute;
  offset-path: circle(130px at 50% 50%);
  offset-rotate: 0deg;   /* keep element upright as it travels */
  animation: ease-orbit 4s linear infinite;
}
```

`offset-distance` is a percentage of the path's total length. Animating from `0%` to `100%` traverses the full path in one revolution.

## Multi-body system

Each planet uses the same `@keyframes ease-orbit` but with a different `offset-path` radius and `animation-duration`:

```css
.orbit-planet-a {
  offset-path: circle(68px at 50% 50%);
  animation-duration: 2.2s;  /* fast inner orbit */
}

.orbit-planet-b {
  offset-path: circle(110px at 50% 50%);
  animation-duration: 4s;
}

.orbit-planet-c {
  offset-path: circle(148px at 50% 50%);
  animation-duration: 7s;   /* slow outer orbit */
}
```

## `offset-rotate: auto`

When set to `auto`, the element rotates to align its local x-axis with the path tangent at every point. Useful for directional objects (comets, arrows, cars) where the shape should "face" the direction of travel.

## Accessibility

`prefers-reduced-motion: reduce` pauses all orbital animations via `animation-play-state: paused`. The elements remain visible at their initial positions.

```css
@media (prefers-reduced-motion: reduce) {
  .orbit-body,
  .orbit-planet,
  .orbit-comet {
    animation-play-state: paused;
  }
}
```
