# ease-grid-span

Grid column span and placement utilities. Part of `core/utilities.css`.

## Usage

```html
<div class="ease-grid"><div class="ease-col-span-2">Spans 2 cols</div></div>
```

## Classes

| Class | Description |
|---|---|
| `ease-grid` | `display: grid` |
| `ease-grid-auto` | Auto-fit responsive columns |
| `ease-grid-cols-1` through `-4` | Fixed column count |
| `ease-col-span-1` through `-4` | Column span |
| `ease-col-full` | Full width (1 / -1) |
| `ease-place-start/center/end` | `place-items` alignment |

## Notes

- Responsive: grids collapse to single column on mobile (≤480px)
- Breakpoint variants available: `ease-sm-grid-cols-*`, `ease-md-grid-cols-*`, etc.
- Pairs with `ease-gap-*` for spacing

## Submission

- **Author:** SAPTARSHI-coder
- **Issue:** TBD
- **Files:** `style.css`, `demo.html`
