# ease-rotate-fade-card-grid

A CSS-only rotate-fade card grid component for fintech dashboard layouts.

## Description

The `ease-rotate-fade-card-grid` is a pure CSS card grid with rotate and fade entrance animations. Perfect for showcasing features, products, or data cards in fintech dashboards.

## Features

- **Rotate-Fade Entrance**: Cards animate in with a rotation and fade effect
- **3D Perspective**: Cards have depth with rotation on multiple axes
- **Hover Effects**: Interactive hover states with scale and glow
- **Responsive Grid**: Works seamlessly across all screen sizes
- **Accessibility**: Respects `prefers-reduced-motion` user preference
- **Pure CSS**: No JavaScript required

## Usage

```html
<div class="ease-card-grid">
  <div class="ease-card ease-card-rotate-fade">
    <h3>Card Title</h3>
    <p>Card content goes here.</p>
  </div>
</div>
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.ease-card-grid` | Grid container with responsive columns |
| `.ease-card` | Base card styles |
| `.ease-card-rotate-fade` | Rotate-fade entrance animation |
| `.ease-card-rotate-x` | Rotation on X-axis variant |
| `.ease-card-rotate-y` | Rotation on Y-axis variant |
| `.ease-card-rotate-3d` | 3D rotation variant |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ease-card-rotation` | `15deg` | Rotation angle |
| `--ease-card-duration` | `0.6s` | Animation duration |
| `--ease-card-delay` | `0.1s` | Stagger delay between cards |
| `--ease-card-scale` | `1.02` | Scale on hover |
