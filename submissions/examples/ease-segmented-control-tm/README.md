# Segmented Control Component

**Issue:** [#71837](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/71837)

iOS-style segmented control with sliding indicator and active state using pure CSS.

## Design Tokens

| Token | Default |
|-------|---------|
| `--seg-btn-active-bg` | `#6366f1` |
| `--seg-btn-radius` | `8px` |
| `--seg-transition` | `0.3s` |
| `--seg-shadow` | `0 4px 16px rgba(99,102,241,0.3)` |

## Structure

- `.seg-group` — control container with role="group"
- `.seg-btn` — individual segment button
- `.seg-btn.active` — active segment state

Wire up active state via JS (shown in demo.html).
