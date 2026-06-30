# ease-blob-morph

Organic blob shape that continuously morphs — like liquid breathing. Pure CSS, no JavaScript.

## Files

| File                        | Description       |
| --------------------------- | ----------------- |
| 📄 [demo.html](./demo.html) | Interactive demo  |
| 🎨 [style.css](./style.css) | Blob morph styles |
| 📖 [README.md](./README.md) | Documentation     |

## Classes

| Class                      | Speed | Description              |
| -------------------------- | ----- | ------------------------ |
| `ease-blob-morph`          | 6s    | Normal morphing speed    |
| `ease-blob-morph-fast`     | 3s    | Fast morphing            |
| `ease-blob-morph-slow`     | 10s   | Slow morphing            |
| `ease-blob-morph-gradient` | 6s    | With gradient background |

## Variables

| Variable            | Default | Description           |
| ------------------- | ------- | --------------------- |
| `--ease-blob-speed` | 6s      | Animation speed       |
| `--ease-blob-color` | #667eea | Blob background color |

## Usage

```html
<!-- Basic blob -->
<div class="ease-blob-morph"></div>

<!-- Custom speed -->
<div class="ease-blob-morph" style="--ease-blob-speed: 8s;"></div>

<!-- Custom color -->
<div class="ease-blob-morph" style="--ease-blob-color: #ff6b6b;"></div>

<!-- With content -->
<div class="ease-blob-morph">✨</div>
```
