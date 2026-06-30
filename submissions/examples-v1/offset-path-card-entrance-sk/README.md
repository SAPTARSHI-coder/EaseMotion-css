# offset-path Card Entrance

Cards enter along a custom cubic bezier SVG path using `offset-path` and `offset-distance`, with `nth-child` stagger delays.

## Class

`ease-path-card` — animates `offset-distance` 0%→100% along `path('M -220 0 C -80 -150 80 150 220 0')` with `offset-rotate: auto`.

## Usage

```html
<div class="card-stage">
  <div class="ease-path-card">Card 1</div>
  <div class="ease-path-card">Card 2</div>
  <div class="ease-path-card">Card 3</div>
</div>
```

## Notes

- `offset-rotate: auto 0deg` keeps cards upright while following the path tangent direction
- `prefers-reduced-motion` falls back to a simple fade-up with `offset-path: none`

Closes #9597
