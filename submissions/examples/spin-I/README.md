# Continuous Rotation Utility (ease-spin)

Continuous 360° rotation with linear timing — perfect for loaders, icons, and decorative elements.

## Files

| File                        | Description      |
| --------------------------- | ---------------- |
| 📄 [demo.html](./demo.html) | Interactive demo |
| 🎨 [style.css](./style.css) | Spin styles      |
| 📖 [README.md](./README.md) | Documentation    |

## Classes

| Class               | Speed         | Direction         |
| ------------------- | ------------- | ----------------- |
| `ease-spin`         | 1s            | Clockwise         |
| `ease-spin-fast`    | 0.5s          | Clockwise         |
| `ease-spin-slow`    | 2s            | Clockwise         |
| `ease-spin-reverse` | 1s            | Counter-clockwise |
| `ease-spin-hover`   | 1s (on hover) | Clockwise         |

## Variables

| Variable       | Default | Description    |
| -------------- | ------- | -------------- |
| `--spin-speed` | 1s      | Rotation speed |

## Usage

```html
<!-- Basic continuous spin -->
<div class="ease-spin">🔄</div>

<!-- Different speeds -->
<div class="ease-spin-fast">Fast spin (0.5s)</div>
<div class="ease-spin-slow">Slow spin (2s)</div>

<!-- Reverse spin -->
<div class="ease-spin-reverse">Counter-clockwise</div>

<!-- Custom speed -->
<div class="ease-spin" style="--spin-speed: 3s;">Custom speed</div>

<!-- Hover to spin -->
<div class="ease-spin-hover">Hover to spin</div>
```
