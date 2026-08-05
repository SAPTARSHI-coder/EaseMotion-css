# ease-scale-hover-drawer-bh

A CSS-only scale-hover drawer component for fintech dashboard layouts.

## Description

The `ease-scale-hover-drawer-bh` is a pure CSS drawer component with smooth scale and hover effects. Perfect for fintech dashboards where elegant side panels and drawers are essential.

## Features

- **Scale Hover Effect**: Drawer scales smoothly on hover
- **Multiple Positions**: Left, Right, Top, Bottom drawer variants
- **Responsive Design**: Works across all screen sizes
- **Accessibility**: Supports `prefers-reduced-motion`
- **Pure CSS**: No JavaScript required

## Usage

```html
<div class="ease-drawer ease-drawer-right ease-drawer-scale">
  <div class="ease-drawer-content">
    Drawer content here
  </div>
</div>
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.ease-drawer` | Base drawer styles |
| `.ease-drawer-right` | Right-aligned drawer |
| `.ease-drawer-left` | Left-aligned drawer |
| `.ease-drawer-top` | Top-aligned drawer |
| `.ease-drawer-bottom` | Bottom-aligned drawer |
| `.ease-drawer-scale` | Scale hover effect |
| `.ease-drawer-content` | Drawer inner content |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ease-drawer-width` | `320px` | Drawer width |
| `--ease-drawer-bg` | `#1e293b` | Drawer background |
| `--ease-drawer-scale` | `1.02` | Scale factor on hover |
