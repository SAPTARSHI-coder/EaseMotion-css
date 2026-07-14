# Smart Notification

A notification banner system that slides in from the top with auto-dismiss and a shrinking progress bar. Supports multiple types and stacking.

## Features

- Slide-in from top with spring-like easing
- Four notification types: info, success, warning, error
- Auto-dismiss with animated progress bar
- Action button and close button
- Stackable — multiple notifications queue visually
- Fully customizable via CSS custom properties

## Usage

### HTML

```html
<div class="notifications" id="notifications"></div>
```

Call `show('info')` / `show('success')` / `show('warning')` / `show('error')` to trigger a notification.

### CSS Variables

| Variable | Default | Description |
|---|---|---|
| `--sn-duration` | `0.4s` | Slide-in/out transition duration |
| `--sn-bg` | `#1e293b` | Notification background |
| `--sn-text-color` | `#f1f5f9` | Text color |
| `--sn-action-color` | `#60a5fa` | Action button accent color |
| `--sn-radius` | `12px` | Border radius |

## Browser Support

Chrome, Firefox, Safari, Edge (latest 2 major versions).

## License

MIT
