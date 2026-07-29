# Component: ease-ping-animation

This submission implements the `ease-ping-animation` component for GSSoC issue **#45021**.

## Description

A standalone ping animation showcase featuring animated ripple indicators for online status, notifications, and monitoring interfaces.

## Usage

```html
<div class="ease-ping">
  <span class="ping-dot"></span>
  <span class="ping-ring"></span>
</div>
```

### Color Variants

```html
<div class="ease-ping ease-ping-primary">Primary</div>
<div class="ease-ping ease-ping-success">Success (Green)</div>
<div class="ease-ping ease-ping-warning">Warning (Yellow)</div>
<div class="ease-ping ease-ping-danger">Danger (Red)</div>
```

### Size Variants

```html
<div class="ease-ping ease-ping-sm">Small</div>
<div class="ease-ping">Default</div>
<div class="ease-ping ease-ping-lg">Large</div>
```

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--ping-color` | `#3b82f6` | Ping indicator color |
| `--ping-duration` | `1.5s` | Animation duration |

## Features

- CSS ripple animation using transform and opacity
- Four color variants
- Three size variants
- Pure HTML & CSS implementation
- No JavaScript required
- `prefers-reduced-motion` support

## Use Cases

- Online status indicators
- Notification badges
- User presence indicators
- Server monitoring status
- Live activity feedback

## Acceptance Criteria

- ✅ Uses EaseMotion CSS variables
- ✅ CSS ripple animation
- ✅ Four color variants
- ✅ Responsive card layout
- ✅ Live demo in demo.html
- ✅ README.md with usage instructions
- ✅ Pure HTML & CSS
- ✅ `prefers-reduced-motion` support
