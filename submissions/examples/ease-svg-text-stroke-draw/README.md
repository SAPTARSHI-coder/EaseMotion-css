# ease-svg-text-stroke-draw

A draw-on text animation using SVG `stroke-dashoffset`. The stroke path traces from start to end like a pen drawing each letterform, then the `fill` fades in after the stroke completes. Two variants: auto-playing on load, and hover-triggered.

## Usage

```html
<!-- Auto draw-on -->
<svg class="svg-text-draw" width="420" height="110" viewBox="0 0 420 110">
  <text x="50%" y="85" text-anchor="middle">Your Text</text>
</svg>

<!-- Hover to draw -->
<svg class="svg-text-draw-hover" width="360" height="90" viewBox="0 0 360 90">
  <text x="50%" y="72" text-anchor="middle">Your Text</text>
</svg>
```

## How it works

- `stroke-dasharray` sets the stroke to the approximate total path length of the text
- `stroke-dashoffset` starts at the same value (fully hidden), then animates to `0` (fully drawn)
- A second `@keyframes fill-in` delays until the stroke animation completes, then transitions `fill` from `transparent` to the desired color
- The hover variant uses CSS `transition` on `stroke-dashoffset` and `fill` instead of `@keyframes`
- `prefers-reduced-motion` skips the animation and renders the text fully drawn/filled immediately

## Tuning `stroke-dasharray`

The value must be >= the total stroke path length of the text. For different fonts or longer strings, increase the value until the text draws completely. Use `SVGGeometryElement.getTotalLength()` in the browser console for precision: `document.querySelector('.svg-text-draw text').getComputedTextLength()`.

## Customization

| Property | Description |
|----------|-------------|
| `stroke` | Stroke color during draw |
| `stroke-width` | Stroke thickness |
| `stroke-dasharray` | Must be >= text path length |
| Draw duration | `animation` duration on `draw-stroke` keyframe |
| Fill delay | `animation-delay` on `fill-in` keyframe |

## Accessibility

Respects `prefers-reduced-motion`. Text renders fully drawn and filled without animation when reduced motion is preferred.
