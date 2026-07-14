# ease-dotted-map-route

**Issue #36605** — A map-inspired dotted route with stroke-dasharray path animation and waypoint dots.

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--route-color` | `#ff6b6b` | Stroke color of the drawn route |
| `--dot-color` | `#feca57` | Fill color of waypoint dots |
| `--map-bg` | `#1a1a2e` | Background of the map container |
| `--draw-duration` | `3s` | Duration of the path-drawing animation |

## Usage

```html
<div class="ease-dotted-map">
  <svg class="ease-dotted-map__svg" viewBox="0 0 400 300">
    <path class="ease-dotted-map__route" d="..." />
    <circle class="ease-dotted-map__dot" cx="..." cy="..." />
  </svg>
</div>
```

Place SVG `<path>` and `<circle>` elements inside the container. The route uses `stroke-dashoffset` animation; dots fade in with staggered delays.
