# 3D Flip Card Component

**Issue:** [#71806](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/71806)

Interactive 3D flip card with smooth rotation on hover using pure CSS.

## Design Tokens

| Token | Default |
|-------|---------|
| `--tm-flip-width` | `320px` |
| `--tm-flip-height` | `200px` |
| `--tm-flip-radius` | `16px` |
| `--tm-flip-transition` | `0.8s` |
| `--tm-flip-perspective` | `1000px` |

## Structure

- `.flip-card` — interactive card (hover/focus to flip)
- `.flip-front` — front face
- `.flip-back` — back face (auto-rotated 180deg)

Keyboard accessible via `tabindex`.
