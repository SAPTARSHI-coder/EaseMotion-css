# Gauge Meter Fill — Needle Sweep (#36682)

A dashboard-style gauge with an animated fill arc and sweeping needle.

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--gauge-bg` | `#1e1e28` | Background color of the gauge track |
| `--fill-color` | `#4fc3a1` | Color of the animated fill arc |
| `--needle-color` | `#e8e8ed` | Color of the needle and center cap |
| `--fill-duration` | `1.8s` | Duration of the sweep animation |

## Behavior

- Click the "Sweep" button to trigger the animation.
- A JavaScript `requestAnimationFrame` loop drives stroke-dasharray on the arc path and rotation on the needle.
- Ease-out cubic easing for a natural deceleration feel.
- Percentage readout updates in real time.
