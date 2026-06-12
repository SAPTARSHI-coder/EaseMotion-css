# ease-hover-tilt

CSS-only 3D perspective tilt on hover — popular card tilt effect without JavaScript.

## Files

| File                        | Description        |
| --------------------------- | ------------------ |
| 📄 [demo.html](./demo.html) | Interactive demo   |
| 🎨 [style.css](./style.css) | Tilt effect styles |
| 📖 [README.md](./README.md) | Documentation      |

## Classes

| Class                    | Tilt Angle | Direction  |
| ------------------------ | ---------- | ---------- |
| `ease-hover-tilt`        | 10°        | Both axes  |
| `ease-hover-tilt-subtle` | 5°         | Both axes  |
| `ease-hover-tilt-strong` | 15°        | Both axes  |
| `ease-hover-tilt-left`   | 15°        | Left only  |
| `ease-hover-tilt-right`  | 15°        | Right only |
| `ease-hover-tilt-up`     | 15°        | Up only    |
| `ease-hover-tilt-down`   | 15°        | Down only  |

## Usage

```html
<!-- Basic 3D tilt -->
<div class="ease-hover-tilt">
  <h3>Card Title</h3>
  <p>Hover to see the 3D tilt effect</p>
</div>

<!-- Subtle tilt -->
<div class="ease-hover-tilt-subtle">Subtle 5° tilt</div>

<!-- Strong tilt -->
<div class="ease-hover-tilt-strong">Strong 15° tilt</div>

<!-- Directional tilt -->
<div class="ease-hover-tilt-left">Tilts left</div>
<div class="ease-hover-tilt-right">Tilts right</div>
```
