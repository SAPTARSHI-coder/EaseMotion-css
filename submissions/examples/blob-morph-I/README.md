 
# ease-blob-morph

Organic blob shape that continuously morphs using 8-value border-radius — fluid liquid-like breathing effect.

## Files

| File | Description |
|------|-------------|
| 📄 [demo.html](./demo.html) | Interactive demo |
| 🎨 [style.css](./style.css) | Blob morph styles |
| 📖 [README.md](./README.md) | Documentation |

## Classes

| Class | Speed | Description |
|-------|-------|-------------|
| `ease-blob-morph` | 6s | Normal morphing speed |
| `ease-blob-morph-fast` | 3s | Fast morphing |
| `ease-blob-morph-slow` | 10s | Slow morphing |
| `ease-blob-morph-gradient` | 6s | With gradient background |
| `ease-blob-morph-hover` | 6s | Pauses on hover |

## Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-blob-speed` | 6s | Animation speed |
| `--blob-color` | #667eea | Blob background color |

## 8-Value Border-Radius Magic

```css
border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;