# Card 3D Flip Component

**Issue:** [#71823](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/71823)

Interactive 3D flip card with smooth rotation on hover using pure CSS.

## Design Tokens

| Token | Default |
|-------|---------|
| `--flip-card-width` | `320px` |
| `--flip-card-height` | `200px` |
| `--flip-card-radius` | `16px` |
| `--flip-card-transition` | `0.8s` |
| `--flip-card-perspective` | `1000px` |

## Structure

- `.flip3d-card` — interactive card (hover/focus to flip)
- `.flip3d-front` — front face
- `.flip3d-back` — back face (auto-rotated 180deg)

Keyboard accessible via `tabindex`.
