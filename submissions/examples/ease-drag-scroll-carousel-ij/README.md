# ease-drag-scroll-carousel

**Issue #36607** — A horizontal carousel with mouse-drag/touch-scroll and CSS scroll-snap.

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--carousel-width` | `100%` | Width of the carousel viewport |
| `--card-width` | `200px` | Width of each card |
| `--snap-duration` | `0.3s` | Scroll-snap animation duration |
| `--card-gap` | `1rem` | Gap between cards |

## Usage

```html
<div class="ease-drag-carousel">
  <div class="ease-drag-carousel__track">
    <div class="ease-drag-carousel__card">...</div>
    <div class="ease-drag-carousel__card">...</div>
  </div>
</div>
```

Add mouse-drag listeners on `.ease-drag-carousel__track` that adjust `scrollLeft`. The `scroll-snap-type: x mandatory` ensures cards snap into position.
