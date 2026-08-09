# Component: ease-orbit-map-embed

This submission implements the `ease-orbit-map-embed` component for GSSOC issue **#41503**.

## Description

A map embed component with orbital animation effect. Features rotating orbit rings and animated dots that create a satellite-orbit visualization around a central map area.

## Usage

```html
<div class="ease-orbit-map">
  <div class="map-container">
    <div class="map-placeholder">
      <!-- Map content or embed -->
      <svg class="map-icon">...</svg>
      <span class="map-text">Map</span>
    </div>
    <div class="orbit-ring orbit-ring-1"></div>
    <div class="orbit-ring orbit-ring-2"></div>
    <div class="orbit-ring orbit-ring-3"></div>
    <div class="orbit-dot orbit-dot-1"></div>
    <div class="orbit-dot orbit-dot-2"></div>
  </div>
</div>
```

### Color Variants

```html
<div class="ease-orbit-map ease-orbit-primary">Primary</div>
<div class="ease-orbit-map ease-orbit-success">Success (Green)</div>
<div class="ease-orbit-map ease-orbit-warning">Warning (Yellow)</div>
<div class="ease-orbit-map ease-orbit-danger">Danger (Red)</div>
```

### Size Variants

```html
<div class="ease-orbit-map ease-orbit-sm">Small</div>
<div class="ease-orbit-map ease-orbit-lg">Large</div>
```

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--orbit-color` | `#3b82f6` | Orbit ring and dot color |
| `--map-size` | `200px` | Total component size |

## Acceptance Criteria

- ✅ Uses EaseMotion CSS variables
- ✅ Orbital ring animation
- ✅ Animated orbit dots
- ✅ Live demo in demo.html
- ✅ README.md with usage instructions
- ✅ Responsive design
- ✅ `prefers-reduced-motion` support
