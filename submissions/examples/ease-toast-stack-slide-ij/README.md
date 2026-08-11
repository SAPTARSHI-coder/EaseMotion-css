# Toast Stack Slide

A CSS-animated toast notification system with slide-in and slide-out transitions.

## Features

- Four toast types: success, error, info, warning
- Toasts slide in from the right using `translateX`
- Toasts stack vertically with a gap
- Auto-dismiss after 4 seconds
- Manual close button on each toast
- Configurable CSS custom properties

## CSS Custom Properties

| Property                   | Default    | Description              |
| -------------------------- | ---------- | ------------------------ |
| `--toast-duration`         | `0.3s`     | Slide animation duration |
| `--toast-slide-distance`   | `100px`    | Slide distance           |
| `--toast-success-bg`       | `#22c55e`  | Success toast background |
| `--toast-error-bg`         | `#ef4444`  | Error toast background   |
| `--toast-info-bg`          | `#3b82f6`  | Info toast background    |
| `--toast-warning-bg`       | `#f59e0b`  | Warning toast background |
| `--toast-text-color`       | `#ffffff`  | Toast text color         |

## Usage

Open `demo.html` in a browser and click any button to trigger a toast notification.
