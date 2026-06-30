# ease-toast — Animated Toast Notification Component

## What does this do?

Creates animated toast notifications with slide-in, auto-dismiss, and stacked positioning. Pure CSS animations with minimal JS for show/hide lifecycle.

## How is it used?

```html
<div class="ease-toast-container ease-toast-top-right">
  <div class="ease-toast">
    <div class="ease-toast-body">
      <strong>Success!</strong> Your changes were saved.
    </div>
    <button class="ease-toast-close">&times;</button>
  </div>
</div>
```

### Classes

| Class                      | Description                   |
| -------------------------- | ----------------------------- |
| `.ease-toast-container`    | Container for stacking toasts |
| `.ease-toast`              | Individual toast              |
| `.ease-toast-body`         | Content area                  |
| `.ease-toast-close`        | Dismiss button                |
| `.ease-toast-top-right`    | Position: top-right (default) |
| `.ease-toast-top-left`     | Position: top-left            |
| `.ease-toast-bottom-right` | Position: bottom-right        |
| `.ease-toast-bottom-left`  | Position: bottom-left         |
| `.ease-toast-success`      | Green accent                  |
| `.ease-toast-error`        | Red accent                    |
| `.ease-toast-warning`      | Yellow accent                 |
| `.ease-toast-info`         | Blue accent                   |

## Custom Properties

| Property                | Default | Description           |
| ----------------------- | ------- | --------------------- |
| `--ease-toast-duration` | `0.3s`  | Slide-in/out duration |
