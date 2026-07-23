# Component: Ripple Wave Map Embed

This submission implements the Ripple Wave Map Embed for GSSoC issue **#41995**.

## Description

Animated map location component with ripple wave effects for food delivery applications.

## Features

- **Ripple Wave Animation**: Expanding pulse rings from location pin
- **Delivery Route**: Animated route line between points
- **Location Pin**: Bouncing marker with icon
- **Info Panel**: Distance and time display
- **Mini Variants**: Compact cards for stores, restaurants, pickup
- **Pure CSS**: No JavaScript required

## Usage

```html
<div class="map-embed ripple-map">
  <div class="map-placeholder">
    <div class="map-grid"></div>
    <div class="map-pin">
      <div class="pin-marker">
        <div class="pin-icon">📍</div>
        <div class="pin-pulse"></div>
        <div class="pin-pulse delay"></div>
      </div>
      <span class="pin-label">Location</span>
    </div>
  </div>
  <div class="map-info">
    <span>15 min away</span>
  </div>
</div>
```

## Animations

| Element | Animation | Duration |
|---------|-----------|----------|
| Pin Icon | `pinBounce` | 1s infinite |
| Pulse Ring 1 | `rippleWave` | 2s infinite |
| Pulse Ring 2 | `rippleWave` | 2s infinite, 1s delay |
| Route Dot | `routePulse` | 1.5s infinite |
| Route Line | `routeFlow` | 2s infinite |

## Mini Variants

```html
<div class="map-embed ripple-map mini">
  <div class="map-pin small">
    <div class="pin-icon">🏪</div>
    <div class="pin-pulse"></div>
  </div>
</div>
```

## Info Row

```html
<div class="info-row">
  <span class="info-icon">🚗</span>
  <span class="info-text">15 min away</span>
</div>
```

## CSS Custom Properties

```css
--color-primary: #3b82f6;
--color-success: #22c55e;
--color-orange: #f97316;
```

## Acceptance Criteria

- ✅ Ripple wave animation from pin
- ✅ Delivery route visualization
- ✅ Bouncing location marker
- ✅ Info panel with distance/time
- ✅ Mini variant for compact use
- ✅ Pure CSS animations
- ✅ README.md included
