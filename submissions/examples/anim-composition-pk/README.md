# EaseMotion — `animation-composition` Utilities

Control how multiple animations that target the same CSS property combine.

## The Problem

When two animations both modify `transform` (e.g., a zoom-in and a rotation), the default `animation-composition: replace` means the last animation's `transform` value wins — the first is discarded.

## The Solution

Three utility classes:

| Class | Value | Behavior |
|-------|-------|----------|
| `.ease-compose-replace` | `replace` | Last animation's value wins (default) |
| `.ease-compose-add` | `add` | Transform functions are appended in order |
| `.ease-compose-accumulate` | `accumulate` | Numeric values are summed |

## Demo

Three boxes run the same two animations (`ease-kf-zoom-in` + `ease-kf-rotate`) with different composition modes:

- **replace**: only rotation visible (zoom-in is discarded)
- **add**: both zoom-in and rotation visible
- **accumulate**: values summed (scale 0→2 when two scales combine)

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Three-card comparison: replace vs add vs accumulate |
| `style.css` | Demo grid, animation boxes, explanation table |

## Usage

```html
<div class="
  ease-anim-infinite
  ease-kf-zoom-in
  ease-kf-rotate
  ease-compose-add
">
  Both zoom and rotation applied
</div>
```

## Browser Support

| Chrome | Firefox | Safari |
|--------|---------|--------|
| 115+ | 118+ | 17.2+ |

## Adding to `core/utilities.css`

```css
.ease-compose-replace { animation-composition: replace; }
.ease-compose-add { animation-composition: add; }
.ease-compose-accumulate { animation-composition: accumulate; }
```
