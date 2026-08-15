# Image Comparison Slider Component

**Issue:** [#71814](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/71814)

Interactive before/after image comparison slider using CSS and a tiny JS drag handler.

## Design Tokens

| Token | Default |
|-------|---------|
| `--tm-cmp-radius` | `12px` |
| `--tm-cmp-accent` | `#6366f1` |
| `--tm-cmp-handle-size` | `40px` |
| `--tm-cmp-max-width` | `700px` |
| `--tm-cmp-aspect` | `16 / 9` |

## Structure

- `.cmp-slider-wrap` — outer container (draggable)
- `.cmp-after-wrap` — clipped after image container
- `.cmp-handle` — draggable divider
- `.cmp-label-before` / `.cmp-label-after` — labels
