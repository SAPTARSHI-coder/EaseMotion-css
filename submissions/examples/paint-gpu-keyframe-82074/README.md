# Paint Complexity & GPU Layer Benchmark

A responsive CSS-only performance dashboard for visualizing paint complexity and GPU layer usage for keyframe-based animations.

## Features

- Frame-rate performance metric
- Paint-time metric
- GPU layer count
- Compositing efficiency indicator
- Paint complexity comparison
- GPU layer budget visualization
- Keyframe performance checks
- Responsive layout
- Reduced-motion support
- No JavaScript or external dependencies

## Example Metrics

| Metric | Value | Target |
|---|---:|---:|
| Frame Rate | 60 FPS | ≥ 55 FPS |
| Paint Time | 3.8 ms | ≤ 8 ms |
| GPU Layers | 12 | ≤ 20 |
| Compositing | 92% | High |

## Paint Complexity

The dashboard compares common animation properties:

- Transform
- Opacity
- Box Shadow
- Filter

Transform and opacity generally provide lower rendering costs, while effects such as filters can require additional paint work.

## GPU Layer Budget

The example uses:

```text
12 active layers
20 maximum layers