# Component: ease-fade-in-map-embed

This submission implements the `ease-fade-in-map-embed` component for GSSOC issue **#41462**.

## Description

A map embed component with smooth fade-in animation effect. Features a bouncing marker pin and pulsing animation after the map fades in.

## Usage

```html
<div class="ease-fade-map">
  <div class="map-frame">
    <div class="map-content">
      <!-- Map SVG or embed -->
      <svg class="map-svg">...</svg>
      <div class="map-marker">
        <div class="marker-pin"></div>
        <div class="marker-pulse"></div>
      </div>
    </div>
    <div class="map-overlay"></div>
  </div>
</div>
```

### Color Variants

```html
<div class="ease-fade-map ease-fade-primary">Primary</div>
<div class="ease-fade-map ease-fade-success">Success (Green)</div>
<div class="ease-fade-map ease-fade-warning">Warning (Yellow)</div>
<div class="ease-fade-map ease-fade-danger">Danger (Red)</div>
```

### Size Variants

```html
<div class="ease-fade-map ease-fade-sm">Small</div>
<div class="ease-fade-map ease-fade-lg">Large</div>
```

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--fade-color` | `#3b82f6` | Map accent color |
| `--fade-duration` | `1.5s` | Fade animation duration |
| `--map-width` | `300px` | Map width |
| `--map-height` | `200px` | Map height |

## Acceptance Criteria

- ✅ Uses EaseMotion CSS variables
- ✅ Smooth fade-in animation
- ✅ Bouncing marker pin effect
- ✅ Pulsing marker animation
- ✅ Live demo in demo.html
- ✅ README.md with usage instructions
- ✅ `prefers-reduced-motion` support
