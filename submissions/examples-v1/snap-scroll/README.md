# ease-snap-scroll

Scroll snap utilities for creating snap-scrollable containers. Part of `core/utilities.css`.

## Usage

```html
<div class="ease-snap-x ease-snap-mandatory">
  <div class="ease-snap-start">Panel 1</div>
  <div class="ease-snap-start">Panel 2</div>
</div>
```

## Classes

| Class | Description |
|---|---|
| `ease-snap-x` | Horizontal scroll snap container |
| `ease-snap-y` | Vertical scroll snap container |
| `ease-snap-start` | Snap align to start |
| `ease-snap-center` | Snap align to center |
| `ease-snap-end` | Snap align to end |
| `ease-snap-mandatory` | Strict snap (always snaps) |

## Notes

- Uses CSS `scroll-snap-type` — no JavaScript required
- Pairs with `ease-overflow-x-auto`/`ease-overflow-y-auto`
- Customize strictness via `--ease-snap-strictness` variable

## Submission

- **Author:** SAPTARSHI-coder
- **Issue:** TBD
- **Files:** `style.css`, `demo.html`
