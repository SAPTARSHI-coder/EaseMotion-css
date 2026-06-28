# ease-alert

Notification alert banners with color variants and dismissible option.

## Files

| File | Description |
|------|-------------|
| 📄 [demo.html](./demo.html) | Interactive demo |
| 🎨 [style.css](./style.css) | Alert styles |
| 📖 [README.md](./README.md) | Documentation |

## Classes

| Class | Description |
|-------|-------------|
| `ease-alert` | Base alert |
| `ease-alert-success` | Green success alert |
| `ease-alert-danger` | Red danger/error alert |
| `ease-alert-warning` | Yellow warning alert |
| `ease-alert-info` | Blue info alert |
| `ease-alert-dismissible` | Alert with close button |
| `ease-alert-small` | Small size |
| `ease-alert-large` | Large size |
| `ease-alert-rounded` | Rounded corners |

## Usage

```html
<!-- Basic alert -->
<div class="ease-alert">
    <span class="alert-icon">ℹ️</span>
    <span class="alert-message">Alert message</span>
</div>

<!-- Success alert -->
<div class="ease-alert-success">
    <span class="alert-icon">✓</span>
    <span class="alert-message">Success!</span>
</div>

<!-- Dismissible alert -->
<div class="ease-alert ease-alert-dismissible">
    <span class="alert-message">Message</span>
    <button class="alert-close" onclick="this.parentElement.remove()">×</button>
</div>

<!-- Alert with title -->
<div class="ease-alert">
    <div class="alert-content">
        <div class="alert-title">Title</div>
        <div class="alert-message">Message</div>
    </div>
</div> 
