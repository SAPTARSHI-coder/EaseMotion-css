# Snackbar Action

A bottom-anchored snackbar with an action button, slide-up animation, swipe-to-dismiss, and queue management.

## Features

- Slides up from the bottom with spring-like easing
- Action button with hover highlight and press scale
- Swipe left to dismiss on touch devices
- Queue system — shows one snackbar at a time
- Fully customizable via CSS custom properties

## Usage

### HTML

```html
<div class="snackbars" id="snackbars"></div>
```

Call `show(message, actionLabel)` to display a snackbar.

### CSS Variables

| Variable | Default | Description |
|---|---|---|
| `--sa-duration` | `0.35s` | Slide-in/out transition duration |
| `--sa-bg` | `#1e293b` | Snackbar background |
| `--sa-text-color` | `#f1f5f9` | Text color |
| `--sa-action-color` | `#a78bfa` | Action button color |
| `--sa-radius` | `12px` | Border radius |

## Browser Support

Chrome, Firefox, Safari, Edge (latest 2 major versions).

## License

MIT
