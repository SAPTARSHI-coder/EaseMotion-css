# Modal Confirm Dialog (#36821)

A confirm dialog overlay that shakes to reject the destructive action, providing haptic-like feedback.

## CSS Custom Properties

| Prop | Default | Description |
|------|---------|-------------|
| `--modal-bg` | `#1a1a24` | Dialog background color |
| `--overlay-bg` | `rgba(0,0,0,0.7)` | Backdrop overlay color |
| `--confirm-color` | `#6c5ce7` | Confirm (destructive) button color |
| `--shake-duration` | `0.4s` | Duration of the shake animation |

## Usage

```html
<div class="modal-overlay" style="--modal-bg: #1a1a24; --confirm-color: #e74c3c;">
  <div class="modal-dialog">
    <!-- header, body, footer -->
  </div>
</div>
```

## Features

- Smooth scale-in entrance animation
- Shake rejection on confirm click
- Click-outside and ESC to close
- Fully customizable via CSS variables
