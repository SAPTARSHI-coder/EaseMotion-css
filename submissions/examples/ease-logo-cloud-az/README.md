# Logo Cloud

Horizontal row of client/partner/sponsor logos with grayscale-to-color hover effect. Supports text labels and image logos with compact variant.

## Usage

```html
<div class="ease-logo-cloud-az">
  <span class="ease-logo-item-az">BrandName</span>
  <span class="ease-logo-item-az">
    <img class="ease-logo-img-az" src="logo.png" alt="Brand" />
  </span>
</div>
```

## Variants

- **`--compact`**: Reduced spacing and smaller logo images
- **`--with-divider`**: Top and bottom border lines
- **`--grayscale-off`**: Skip grayscale filter on images
- **Text logos**: Use `.ease-logo-item-az` with text content
- **Image logos**: Use `<img class="ease-logo-img-az">` inside item
- **Label**: `.ease-logo-cloud-label-az` at the top

## CSS Variables

| Variable                 | Default   |
| ------------------------ | --------- |
| `--ease-space-*`         | spacing   |
| `--ease-color-neutral-*` | grays     |
| `--ease-font-sans`       | system-ui |
