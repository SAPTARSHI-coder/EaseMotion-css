# ease-message-inline-alert

Inline alert component with colored icon. Supports three variants: success (green), error (red), and warning (yellow). Alerts fade and slide in/out when visibility is toggled.

## Features

- Three color-coded variants: success, error, warning
- Colored icon with checkmark, cross, or warning symbol
- Fade and slide-left transition on dismiss
- Dismiss button on each alert

## CSS Custom Property Control

- `--visible`: Set to `1` to show the alert, `0` to hide it with a fade + slide + max-height transition. Controlled by the dismiss button on each alert.
