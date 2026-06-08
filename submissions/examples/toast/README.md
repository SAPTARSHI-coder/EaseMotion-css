# Toast Notification Component

A fixed-position toast notification system with slide-in/slide-out animations, 4 color variants (success, danger, warning, info), dismiss close button, and 4 position options (top-right, top-left, bottom-right, bottom-left). Includes inline JavaScript for dynamic show/dismiss.

## Classes

| Class | Description |
|---|---|
| `ease-toast-container` | Fixed container for stacking toasts |
| `ease-toast-container--top-left` | Top-left position |
| `ease-toast-container--bottom-right` | Bottom-right position |
| `ease-toast-container--bottom-left` | Bottom-left position |
| `ease-toast` | Individual toast notification |
| `ease-toast--success` | Green accent (success) |
| `ease-toast--danger` | Red accent (error/danger) |
| `ease-toast--warning` | Amber accent (warning) |
| `ease-toast--info` | Blue accent (info) |
| `ease-toast-icon` | Icon circle |
| `ease-toast-msg` | Notification message |
| `ease-toast-close` | Dismiss button |
| `ease-toast--exit` | Exit animation state (added via JS) |

## Usage

```html
<div class="ease-toast-container" id="toast-container">
  <div class="ease-toast ease-toast--success" role="alert">
    <span class="ease-toast-icon">&#10003;</span>
    <span class="ease-toast-msg">File uploaded successfully</span>
    <button class="ease-toast-close" aria-label="Dismiss">&times;</button>
  </div>
</div>
```

See `demo.html` for the full JS setup (dynamic creation, auto-dismiss after 4s, close button handler).

## Why it fits EaseMotion CSS

Smooth slide-in entrance animation (`ease-kf-toast-in`) and fade-out exit animation, 4 color variants with accent borders and icon backgrounds, position modifiers for all 4 corners, and stacking container. Respects `prefers-reduced-motion`.
