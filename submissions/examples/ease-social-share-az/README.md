# Social Share Buttons

Social share button group with platform-branded colors, optional share counts, compact and outline variants.

## Usage

```html
<div class="ease-social-share-az">
  <span class="ease-share-label-az">Share via</span>
  <button class="ease-share-btn-az --facebook">
    <span class="share-icon-az">&#x1f4ac;</span>
    Facebook
    <span class="share-count-az">1.2k</span>
  </button>
  <button class="ease-share-btn-az --twitter">...</button>
  <button class="ease-share-btn-az --linkedin">...</button>
</div>
```

## Variants

- **Brand fill**: `.ease-share-btn-az.--facebook`, `.--twitter`, `.--linkedin`, `.--whatsapp`, `.--email`
- **Copy button**: `.ease-share-btn-az.--copy` (neutral background)
- **Outline**: `.ease-share-btn-az.--outline` (bordered, no fill)
- **Compact**: `.ease-social-share-az.compact` (smaller padding, hides counts)

## CSS Variables

| Variable                 | Default   |
| ------------------------ | --------- |
| `--ease-space-1`         | 4px       |
| `--ease-space-2`         | 8px       |
| `--ease-space-3`         | 12px      |
| `--ease-radius-md`       | 8px       |
| `--ease-font-sans`       | system-ui |
| `--ease-color-neutral-*` | grays     |
