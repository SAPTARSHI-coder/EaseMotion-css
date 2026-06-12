# Skew on Hover Animation

Element skews horizontally or vertically on hover — dynamic and playful effect.

## Files

| File                        | Description      |
| --------------------------- | ---------------- |
| 📄 [demo.html](./demo.html) | Interactive demo |
| 🎨 [style.css](./style.css) | Skew styles      |
| 📖 [README.md](./README.md) | Documentation    |

## Classes

| Class                    | Skew  | Axis | Speed |
| ------------------------ | ----- | ---- | ----- |
| `ease-skew-hover`        | 10°   | X    | 0.3s  |
| `ease-skew-x-5/10/15/20` | 5-20° | X    | 0.3s  |
| `ease-skew-y-5/10/15/20` | 5-20° | Y    | 0.3s  |
| `ease-skew-xy-5/10/15`   | 5-15° | Both | 0.3s  |
| `ease-skew-left`         | -15°  | X    | 0.3s  |
| `ease-skew-right`        | 15°   | X    | 0.3s  |
| `ease-skew-up`           | -15°  | Y    | 0.3s  |
| `ease-skew-down`         | 15°   | Y    | 0.3s  |
| `ease-skew-x-10-fast`    | 10°   | X    | 0.15s |
| `ease-skew-x-10-slow`    | 10°   | X    | 0.6s  |

## Usage

```html
<!-- Horizontal skew -->
<div class="ease-skew-x-10">Skew 10° on X-axis</div>

<!-- Vertical skew -->
<div class="ease-skew-y-15">Skew 15° on Y-axis</div>

<!-- Both axes -->
<div class="ease-skew-xy-10">Skew 10° both axes</div>

<!-- Direction variants -->
<div class="ease-skew-left">Skew left</div>
<div class="ease-skew-right">Skew right</div>
```
