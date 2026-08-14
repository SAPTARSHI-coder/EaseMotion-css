# CSS Toast Notification Stack

A responsive, animated toast notification stack created using pure HTML
and CSS.

This component is part of the EaseMotion CSS project.

## Features

- Pure CSS implementation
- No JavaScript required
- Multiple stacked notifications
- Automatic dismiss animation
- Manual dismiss buttons
- Success, information, warning, and error variants
- Responsive design
- CSS custom properties for easy theming
- Light and dark mode support
- Animated progress indicator
- Keyboard-focusable close controls
- Reduced-motion support
- Zero external dependencies

## Demo

Open `demo.html` in a modern browser.

## Toast Types

The example contains four notification types:

- Success
- Information
- Warning
- Error

Each notification uses a different CSS custom property.

```css
.toast--success {
  --toast-color: var(--toast-success);
}

.toast--info {
  --toast-color: var(--toast-info);
}

.toast--warning {
  --toast-color: var(--toast-warning);
}

.toast--error {
  --toast-color: var(--toast-error);
}