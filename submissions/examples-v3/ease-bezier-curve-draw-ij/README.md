# ease-bezier-curve-draw

An SVG bezier curve drawing animation with visual control point display. The curve is drawn progressively using `stroke-dashoffset` animation, while dashed control lines and draggable-style control points show the underlying bezier geometry.

## HTML Structure

```html
<svg viewBox="0 0 400 200" class="ease-bezier">
  <!-- control point lines (dashed) -->
  <line class="cp-line" x1="50" y1="150" x2="130" y2="40" />
  <line class="cp-line" x1="350" y1="150" x2="270" y2="40" />
  <!-- control points -->
  <circle class="cp-point" cx="130" cy="40" r="6" />
  <circle class="cp-point" cx="270" cy="40" r="6" />
  <!-- start / end points -->
  <circle class="cp-point cp-start" cx="50" cy="150" r="5" />
  <circle class="cp-point cp-end" cx="350" cy="150" r="5" />
  <!-- the bezier path to animate -->
  <path class="ease-bezier-path"
        d="M 50 150 C 130 40, 270 40, 350 150"
        fill="none" />
</svg>
```

## CSS Variables

| Variable           | Default    | Description                            |
|--------------------|------------|----------------------------------------|
| `--curve-color`    | `#4f46e5`  | Color of the bezier curve and points   |
| `--stroke-width`   | `3`        | Stroke width of the curve (unitless)   |
| `--draw-duration`  | `2s`       | Duration of the drawing animation      |

## Example

```html
<svg viewBox="0 0 400 200" class="ease-bezier"
     style="--curve-color: #059669; --stroke-width: 4; --draw-duration: 2.5s;">
  <path class="ease-bezier-path" d="M 50 150 C 100 20, 300 30, 350 150" fill="none" />
  <!-- control points omitted for brevity -->
</svg>
```
