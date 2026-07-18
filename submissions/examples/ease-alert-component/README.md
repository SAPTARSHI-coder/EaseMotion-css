# ease-alert — Alert / Notification Banner

Alert and notification banner component with success, danger, warning, and info variants. Includes an icon slot and a dismissible variant.

## Classes

| Class | Description |
|---|---|
| `ease-alert` | Base alert (animated entrance) |
| `ease-alert-success` | Green success variant |
| `ease-alert-danger` | Red danger/error variant |
| `ease-alert-warning` | Amber warning variant |
| `ease-alert-info` | Purple info variant |
| `ease-alert-dismissible` | Adds padding for dismiss button |
| `ease-alert-icon` | Icon slot |
| `ease-alert-dismiss` | Close button |

## Usage

```html
<!-- Basic -->
<div class="ease-alert ease-alert-success" role="alert">
  <span class="ease-alert-icon">✅</span>
  <div>Your changes have been saved.</div>
</div>

<!-- Dismissible -->
<div class="ease-alert ease-alert-info ease-alert-dismissible" role="alert">
  <span class="ease-alert-icon">ℹ️</span>
  <div>A new version is available.</div>
  <button class="ease-alert-dismiss" aria-label="Dismiss">✕</button>
</div>
```

## Why it fits EaseMotion CSS

Pure CSS with slide-in entrance animation. Uses design tokens for color, spacing, and radius. Respects `prefers-reduced-motion`.
