# Button Loading State

## What does this do?

Adds a CSS-only loading state indicator (`ease-btn-loading`) that appends a spinner to buttons and disables pointer click interactions.

## How is it used?

Add `.ease-btn-loading` directly to a button:

```html
<button class="ease-btn ease-btn-primary ease-btn-loading">Saving</button>
```

### Key Features

- **Pointer Events Disabled**: Adds `pointer-events: none` to automatically prevent double-clicks during request processing.
- **Color Inherited**: The spinner inherits text color via CSS `currentColor`.
- **Proportional Sizing**: Spinner sizing uses `em` units (`0.85em`) so it automatically scales cleanly in small, medium, or large button variants.

## Why is it useful?

When triggering actions (e.g. form submissions, checkout transactions, file uploads), indicating active processing is key to preventing redundant requests. Implementing this indicator natively in CSS avoids importing heavy javascript icons, keeping component bundles lightweight.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to view the button loading state animation.

## Contribution Notes

- Class naming: `ease-btn-loading`.
