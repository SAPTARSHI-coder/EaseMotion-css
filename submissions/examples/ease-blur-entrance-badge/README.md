# ease-blur-entrance-badge

A CSS-only blur-entrance badge component for fintech dashboard layouts.

## Description

The `ease-blur-entrance-badge` is a pure CSS animation that creates a smooth blur-to-focus entrance effect for badge elements. Perfect for notification indicators, status badges, and promotional tags in fintech dashboards.

## Features

- **Blur-to-Focus Animation**: Elements start with a blur filter and animate to sharp focus
- **Multiple Color Variants**: Available in success, warning, error, info, and neutral variants
- **Responsive Design**: Works seamlessly across all screen sizes
- **Accessibility**: Respects `prefers-reduced-motion` user preference
- **Pure CSS**: No JavaScript required

## Usage

```html
<link rel="stylesheet" href="style.css" />

<span class="ease-badge ease-badge-blur ease-badge-success">
  New
</span>
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.ease-badge` | Base badge styles |
| `.ease-badge-blur` | Blur entrance animation |
| `.ease-badge-success` | Green success variant |
| `.ease-badge-warning` | Orange warning variant |
| `.ease-badge-error` | Red error variant |
| `.ease-badge-info` | Blue info variant |
| `.ease-badge-neutral` | Gray neutral variant |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ease-animation-duration` | `0.6s` | Animation duration |
| `--ease-animation-delay` | `0ms` | Animation delay |
| `--ease-animation-timing` | `ease-out` | Animation timing function |
