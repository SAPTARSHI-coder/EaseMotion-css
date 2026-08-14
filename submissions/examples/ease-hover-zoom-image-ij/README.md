# hover-zoom-image (#36736)

Hover zoom image with a magnified view shown through a circular lens that tracks the cursor.

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--image-size` | `260px` | Width and height of the image container |
| `--zoom-scale` | `2.5` | Magnification factor |
| `--zoom-duration` | `0.3s` | Transition duration for scaling |
| `--lens-size` | `120px` | Diameter of the circular magnifier lens |

## Usage

```html
<div class="card" style="--zoom-scale: 3; --lens-size: 100px;">
  <div class="image-wrapper">
    <img src="photo.jpg" alt="">
    <div class="lens"></div>
  </div>
</div>
```

A `::after`-like lens overlays the image and follows the cursor via JavaScript `mousemove` handler.
