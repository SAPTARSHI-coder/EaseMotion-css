# Component: ease-holographic-step-indicator

This submission implements the `ease-holographic-step-indicator` component for GSSOC issue **#41614**.

## Description

A step indicator component with holographic gradient effects. Features animated gradient backgrounds and glowing effects for active/completed states.

## Usage

```html
<div class="ease-holo-step-indicator">
  <div class="holo-step is-active">
    <div class="step-circle">1</div>
    <div class="step-glow"></div>
  </div>
  <div class="step-connector completed"></div>
  <div class="holo-step">
    <div class="step-circle">2</div>
    <div class="step-glow"></div>
  </div>
  <!-- More steps -->
</div>
```

### State Classes

| Class | Description |
|-------|-------------|
| `is-active` | Current step with holographic animation |
| `is-completed` | Completed step with checkmark |
| `completed` | Applied to connector to show progress |

### Color Variants

```html
<div class="ease-holo-step-indicator ease-holo-primary">...</div>
<div class="ease-holo-step-indicator ease-holo-success">...</div>
```

### Size Variants

```html
<div class="ease-holo-step-indicator ease-holo-lg">...</div>
```

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--step-size` | `40px` | Circle diameter |
| `--step-duration` | `0.4s` | Animation duration |
| `--holo-gradient` | Multi-color | Holographic gradient |

## Acceptance Criteria

- ✅ Uses EaseMotion CSS variables
- ✅ Holographic animated gradient
- ✅ Pure CSS (no JavaScript required)
- ✅ Live demo in demo.html
- ✅ README.md with usage instructions
- ✅ Responsive design
- ✅ `prefers-reduced-motion` support
