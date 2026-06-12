# ease-rubber-band

Rubber band stretch effect on click — element squashes and stretches like a rubber band.

## Files

| File                        | Description        |
| --------------------------- | ------------------ |
| 📄 [demo.html](./demo.html) | Interactive demo   |
| 🎨 [style.css](./style.css) | Rubber band styles |
| 📖 [README.md](./README.md) | Documentation      |

## Classes

| Class                   | Duration     |
| ----------------------- | ------------ |
| `ease-rubber-band`      | 0.4 seconds  |
| `ease-rubber-band-fast` | 0.25 seconds |
| `ease-rubber-band-slow` | 0.6 seconds  |

## Animation Sequence

1. **Stretch** - `scaleX(1.25)` + `scaleY(0.75)`
2. **Reverse stretch** - `scaleX(0.75)` + `scaleY(1.25)`
3. **Snap back** - `scaleX(1)` + `scaleY(1)`

## Usage

```html
<!-- Basic rubber band -->
<div class="ease-rubber-band">Click me</div>

<!-- Different speeds -->
<button class="ease-rubber-band-fast">Fast</button>
<button class="ease-rubber-band-slow">Slow</button>

<!-- On any element -->
<img class="ease-rubber-band" src="icon.svg" alt="Icon" />
```
