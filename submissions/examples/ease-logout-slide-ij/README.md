# Logout Slide

Slide-out confirmation panel for logout actions with a blurred backdrop overlay.

## Features

- Logout button in app header triggers slide-out panel from the right
- Panel slides with `translateX` + `opacity` transition
- Backdrop uses `backdrop-filter: blur()` for a frosted-glass effect
- Confirm / Cancel actions
- Success state with checkmark animation after confirmation
- Escape key and backdrop click to dismiss
- Responsive (max-width 380px panel)

## Usage

Include `style.css` and `demo.html`. Customize via CSS custom properties.

### Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ls-duration` | `0.35s` | Slide transition duration |
| `--ls-btn-color` | `#ef4444` | Logout button / confirm color |
| `--ls-panel-bg` | `#1e293b` | Slide panel background |
| `--ls-blur` | `6px` | Backdrop blur radius |
| `--ls-radius` | `16px` | Border radius for app shell |
| `--ls-shadow` | `0 20px 60px rgba(0,0,0,0.5)` | Panel box shadow |

### Accessibility

- `role="dialog"` and `aria-modal="true"` on the panel
- Escape key closes the panel
- Focus management via button elements

## Browser Support

Chromium, Firefox, Safari. Requires `backdrop-filter` support.
