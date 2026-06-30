# ease-border-draw — Border Draw Animation on Hover

## What does this do?

Animates borders to draw around an element on hover. Uses `::before`/`::after` pseudo-elements that slide in from corners, creating a "drawing" border effect. Pure CSS, no JS.

## How is it used?

```html
<button class="ease-border-draw">Hover me</button>
<div class="ease-border-draw">Card content</div>
```

### Variants

| Class                      | Direction                   | Description                          |
| -------------------------- | --------------------------- | ------------------------------------ |
| `.ease-border-draw`        | Top → Right → Bottom → Left | Full border draws around the element |
| `.ease-border-draw-top`    | Top only                    | Line draws from center to edges      |
| `.ease-border-draw-bottom` | Bottom only                 | Line draws from center to edges      |
| `.ease-border-draw-left`   | Bottom → Left               | Draws bottom then left               |
| `.ease-border-draw-right`  | Top → Right                 | Draws top then right                 |

## Custom Properties

| Property                      | Default        | Description           |
| ----------------------------- | -------------- | --------------------- |
| `--ease-border-draw-color`    | `currentColor` | Border color          |
| `--ease-border-draw-width`    | `2px`          | Border thickness      |
| `--ease-border-draw-duration` | `0.4s`         | Each segment duration |
