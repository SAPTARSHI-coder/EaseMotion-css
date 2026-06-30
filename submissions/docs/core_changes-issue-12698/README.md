# Alert Component

Adds CSS-only alert banners for user feedback — success, info, warning, and danger variants with optional title and dismiss button.

## Variants

| Class                    | Purpose                          |
| ------------------------ | -------------------------------- |
| `ease-alert`             | Base alert container             |
| `ease-alert-info`        | Blue info alert                  |
| `ease-alert-success`     | Green success alert              |
| `ease-alert-warning`     | Amber warning alert              |
| `ease-alert-danger`      | Red danger/error alert           |
| `ease-alert-dismissible` | Adds padding for close button    |
| `ease-alert-title`       | Optional bold title inside alert |

## Usage

```html
<!-- Info alert -->
<div class="ease-alert ease-alert-info">
  <div class="ease-alert-content">
    <div class="ease-alert-title">Info</div>
    This is an informational alert.
  </div>
</div>

<!-- Dismissible success alert -->
<div class="ease-alert ease-alert-success ease-alert-dismissible">
  <div class="ease-alert-content">Saved successfully.</div>
  <button class="ease-alert-close" onclick="this.parentElement.remove()">
    &times;
  </button>
</div>
```

## Animation

All alerts have a slide-in entrance animation (`ease-alert-slide-in`). Dismissible alerts can be removed with the close button.

Fixes #12698
