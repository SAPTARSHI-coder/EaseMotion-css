# ease-draw-svg-path-animate

**Issue #36608** — Animated SVG path drawing using `stroke-dasharray` / `stroke-dashoffset`.

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--stroke-color` | `#a29bfe` | Color of the drawn path stroke |
| `--stroke-width` | `3` | Width of the stroke |
| `--draw-duration` | `2s` | Duration of the draw animation |
| `--path-bg` | `#1a1a2e` | Background of the SVG container |

## Usage

```html
<div class="ease-draw-svg">
  <svg class="ease-draw-svg__svg" viewBox="0 0 200 200">
    <path class="ease-draw-svg__path" d="..." style="--path-length: 360"/>
  </svg>
</div>
```

Each `<path>` needs a `--path-length` custom property equal to its total length (use `path.getTotalLength()` in JS). The CSS animation reduces `stroke-dashoffset` from `--path-length` to `0`.
