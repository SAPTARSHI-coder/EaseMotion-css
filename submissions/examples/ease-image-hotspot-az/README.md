# Image Hotspot

Interactive image with positioned hotspot markers that reveal tooltip content on hover. Useful for product tours, infographics, feature showcases, and interactive diagrams.

## Usage

```html
<div class="ease-image-hotspot-az">
  <img src="photo.jpg" alt="Product" />
  <div class="ease-hotspot-marker-az" style="top:25%;left:20%;">
    <span class="ease-hotspot-icon-az">+</span>
    <div class="ease-hotspot-tooltip-az">
      <div class="ease-hotspot-title-az">Feature</div>
      <div class="ease-hotspot-desc-az">Description text</div>
    </div>
  </div>
</div>
```

## Variants

- **Tooltip direction**: `.--above`, `.--left`, `.--right` (default: below)
- **Tooltip style**: `.--light` (white background, dark text)

## CSS Variables

| Variable | Default |
|----------|---------|
| `--ease-space-3` | 12px |
| `--ease-space-4` | 16px |
| `--ease-radius-md` | 8px / 12px |
| `--ease-color-primary` | #6366f1 |
| `--ease-color-neutral-800` | #1f2937 |
| `--ease-font-sans` | system-ui |
