# ease-badge-pulse

Notification badge with expanding ring animation — perfect for alerts, notifications, and status indicators.

## Files

| File | Description |
|------|-------------|
| 📄 [demo.html](./demo.html) | Interactive demo |
| 🎨 [style.css](./style.css) | Badge styles |
| 📖 [README.md](./README.md) | Documentation |

## Classes

| Class | Description |
|-------|-------------|
| `ease-badge-pulse` | Base badge with pulse ring |
| `ease-badge-danger` | Red variant |
| `ease-badge-success` | Green variant |
| `ease-badge-warning` | Yellow variant |
| `ease-badge-info` | Blue variant |
| `ease-badge-top-left` | Position top-left |
| `ease-badge-bottom-right` | Position bottom-right |
| `ease-badge-bottom-left` | Position bottom-left |
| `ease-badge-small` | Small size |
| `ease-badge-large` | Large size |
| `ease-badge-pulse-fast` | Fast pulse speed |
| `ease-badge-pulse-slow` | Slow pulse speed |

## Usage

```html
<!-- Basic badge -->
<div class="badge-container">
    <button>Messages</button>
    <div class="ease-badge-pulse">3</div>
</div>

<!-- Color variants -->
<div class="ease-badge-pulse ease-badge-danger">!</div>
<div class="ease-badge-pulse ease-badge-success">✓</div>

<!-- Just a dot -->
<div class="ease-badge-pulse"></div>
