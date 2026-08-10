# Component: ease-wobble-countdown-timer

This submission implements the `ease-wobble-countdown-timer` component for GSSOC issue **#41505**.

## Description

An animated countdown timer with wobble effect. Features a 3D rotation animation on hover and a blinking separator effect.

## Usage

```html
<div class="ease-wobble-countdown">
  <div class="countdown-segment">
    <span class="countdown-value">12</span>
    <span class="countdown-label">Hours</span>
  </div>
  <span class="countdown-separator">:</span>
  <div class="countdown-segment">
    <span class="countdown-value">45</span>
    <span class="countdown-label">Minutes</span>
  </div>
  <span class="countdown-separator">:</span>
  <div class="countdown-segment">
    <span class="countdown-value">30</span>
    <span class="countdown-label">Seconds</span>
  </div>
</div>
```

### Color Variants

```html
<div class="ease-wobble-countdown ease-wobble-primary">Primary</div>
<div class="ease-wobble-countdown ease-wobble-danger">Danger (Red)</div>
<div class="ease-wobble-countdown ease-wobble-warning">Warning (Yellow)</div>
<div class="ease-wobble-countdown ease-wobble-success">Success (Green)</div>
```

### Size Variants

```html
<div class="ease-wobble-countdown ease-wobble-lg">Large</div>
```

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--countdown-accent` | `#3b82f6` | Timer accent color |
| `--segment-width` | `70px` | Segment width |
| `--segment-height` | `80px` | Segment height |
| `--wobble-duration` | `2s` | Wobble animation duration |

## Acceptance Criteria

- ✅ Uses EaseMotion CSS variables
- ✅ Wobble hover animation
- ✅ Blinking separator effect
- ✅ Live demo in demo.html
- ✅ README.md with usage instructions
- ✅ Responsive design
- ✅ `prefers-reduced-motion` support
