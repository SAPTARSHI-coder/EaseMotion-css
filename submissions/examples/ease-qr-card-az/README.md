# QR Code Card

Card displaying a QR code image (or placeholder) with title, description, and scan instructions. Available in vertical and compact horizontal layouts.

## Usage

```html
<div class="ease-qr-card-az">
  <img class="ease-qr-code-az" src="qr.png" alt="QR Code" />
  <div class="ease-qr-body-az">
    <h3 class="ease-qr-title-az">Scan to visit</h3>
    <p class="ease-qr-desc-az">Open on your mobile device.</p>
  </div>
  <div class="ease-qr-footer-az">
    <span class="ease-qr-footer-icon-az">&#x1f50a;</span>
    Point your camera at the QR code
  </div>
</div>
```

## Variants

- **Default**: Vertical centered layout
- **`--compact`**: Horizontal row with smaller QR code
- **Placeholder**: `.ease-qr-code-placeholder-az` (dashed border with icon)
- **Image**: Use `<img class="ease-qr-code-az">` with actual QR image

## CSS Variables

| Variable                 | Default   |
| ------------------------ | --------- |
| `--ease-space-*`         | spacing   |
| `--ease-radius-lg`       | 12px      |
| `--ease-radius-md`       | 8px       |
| `--ease-color-neutral-*` | grays     |
| `--ease-font-sans`       | system-ui |
