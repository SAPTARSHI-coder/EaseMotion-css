# ease-badge-subtle-elevate-sku

A polished, hardware-accelerated badge and chip component with smooth depth transitions, responsive light/dark themes, and high accessibility.

## What does this do?

This component provides a lightweight, interactive badge/chip container that elevates subtly on hover or keyboard focus, utilizing hardware-accelerated transformations and shadow shifts.

## How is it used?

### Basic Badge (Static)

```html
<span
  class="ease-badge-subtle-elevate-sku ease-badge-subtle-elevate-sku-default"
  >Default</span
>
<span
  class="ease-badge-subtle-elevate-sku ease-badge-subtle-elevate-sku-primary"
  >Primary</span
>
```

### Interactive Badges (Buttons & Links)

```html
<button
  class="ease-badge-subtle-elevate-sku ease-badge-subtle-elevate-sku-success"
  type="button"
>
  Interactive Button
</button>
<a
  href="#"
  class="ease-badge-subtle-elevate-sku ease-badge-subtle-elevate-sku-warning"
  >Interactive Anchor Link</a
>
```

### Dot Indicator

```html
<span
  class="ease-badge-subtle-elevate-sku ease-badge-subtle-elevate-sku-dot ease-badge-subtle-elevate-sku-danger"
  >Live Alert</span
>
```

### Sizes

- `.ease-badge-subtle-elevate-sku-sm` (Small)
- default size (Medium)
- `.ease-badge-subtle-elevate-sku-lg` (Large)

## Why is it useful?

It provides a lightweight interactive micro-animation that enhances user interaction affordance without layout shifting (CLS) by utilizing GPU-friendly translation and box shadow layers, while supporting dark/light coloring dynamically via unified HSL variables.

## Submission Details

- **Author:** shubhanshu-ux (sku)
- **Issue:** #73463
- **Files:** `style.css`, `demo.html`, `README.md`
