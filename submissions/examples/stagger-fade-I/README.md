# Staggered Fade Entrance

Items fade in one after another with increasing delays — perfect for lists, cards, and galleries.

## Files

| File                        | Description           |
| --------------------------- | --------------------- |
| 📄 [demo.html](./demo.html) | Interactive demo      |
| 🎨 [style.css](./style.css) | Staggered fade styles |
| 📖 [README.md](./README.md) | Documentation         |

## Classes

### Normal Speed (1s total)

| Class            | Delay |
| ---------------- | ----- |
| `ease-stagger-1` | 0.1s  |
| `ease-stagger-2` | 0.2s  |
| `ease-stagger-3` | 0.3s  |
| `ease-stagger-4` | 0.4s  |
| `ease-stagger-5` | 0.5s  |
| `ease-stagger-6` | 0.6s  |

### Fast Speed (0.5s total)

| Class                 | Delay |
| --------------------- | ----- |
| `ease-stagger-fast-1` | 0.05s |
| `ease-stagger-fast-2` | 0.1s  |
| `ease-stagger-fast-3` | 0.15s |

### Slow Speed (2s total)

| Class                 | Delay |
| --------------------- | ----- |
| `ease-stagger-slow-1` | 0.2s  |
| `ease-stagger-slow-2` | 0.4s  |
| `ease-stagger-slow-3` | 0.6s  |

### Direction Variants

| Class                     | Effect    |
| ------------------------- | --------- |
| `ease-stagger-up-1/2/3`   | Fade up   |
| `ease-stagger-left-1/2/3` | Fade left |
| `ease-stagger-zoom-1/2/3` | Zoom in   |

## Usage

```html
<!-- Basic staggered items -->
<div class="ease-stagger-1">First item</div>
<div class="ease-stagger-2">Second item</div>
<div class="ease-stagger-3">Third item</div>

<!-- Fast speed -->
<div class="ease-stagger-fast-1">Fast 1</div>
<div class="ease-stagger-fast-2">Fast 2</div>

<!-- Different directions -->
<div class="ease-stagger-up-1">Fade up</div>
<div class="ease-stagger-left-1">Fade left</div>
```
