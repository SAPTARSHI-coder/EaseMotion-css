# ease-z

Z-index scale utility classes with numeric steps, semantic names, negative values, and responsive breakpoint variants.

## What

Comprehensive z-index utility system:

- **Numeric scale**: 0, 10, 20 ... 1000 (steps of 10), plus 9999, max (2147483647), auto
- **Negative**: -1, -10, -20, -30, -40, -50, -100
- **Semantic**: dropdown (1000), sticky (1020), fixed (1030), offcanvas (1040), modal-backdrop (1050), modal (1060), popover (1070), tooltip (1080), toast (1090), notification (1100)
- **Responsive**: `ease-z-{breakpoint}-{value}` for sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)

## How

1. Include `style.css`.
2. Apply `.ease-z-{value}` to set z-index.

## Why

Provides a consistent, documented z-index scale that prevents stacking context conflicts across the framework. Semantic names encode intent so layers stay ordered properly.

## Stacking Order (Semantic)

| Class                   | Value | Use Case             |
| ----------------------- | ----- | -------------------- |
| `ease-z-dropdown`       | 1000  | Dropdown menus       |
| `ease-z-sticky`         | 1020  | Sticky headers       |
| `ease-z-fixed`          | 1030  | Fixed navbars        |
| `ease-z-offcanvas`      | 1040  | Off-canvas panels    |
| `ease-z-modal-backdrop` | 1050  | Modal overlay        |
| `ease-z-modal`          | 1060  | Modal dialog         |
| `ease-z-popover`        | 1070  | Popovers             |
| `ease-z-tooltip`        | 1080  | Tooltips             |
| `ease-z-toast`          | 1090  | Toast notifications  |
| `ease-z-notification`   | 1100  | Notification banners |
