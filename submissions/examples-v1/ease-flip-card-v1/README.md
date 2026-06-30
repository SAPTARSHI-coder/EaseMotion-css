# ease-flip-card

3D flip card that rotates 180° on hover — reveal content on the back.

## Files

| File | Description |
|------|-------------|
| 📄 [demo.html](./demo.html) | Interactive demo |
| 🎨 [style.css](./style.css) | Flip card styles |
| 📖 [README.md](./README.md) | Documentation |

## Classes

| Class | Direction | Speed |
|-------|-----------|-------|
| `ease-flip-card` | Horizontal (Y-axis) | Normal (0.6s) |
| `ease-flip-card-horizontal` | Left-Right | Normal (0.6s) |
| `ease-flip-card-vertical` | Up-Down | Normal (0.6s) |
| `ease-flip-card-diagonal` | Diagonal | Normal (0.6s) |
| `ease-flip-card-fast` | Horizontal | Fast (0.3s) |
| `ease-flip-card-slow` | Horizontal | Slow (1s) |

## Usage

```html
<!-- Basic flip card -->
<div class="flip-card ease-flip-card">
    <div class="flip-card-front">Front content</div>
    <div class="flip-card-back">Back content</div>
</div>

<!-- Vertical flip -->
<div class="flip-card ease-flip-card-vertical">
    <div class="flip-card-front">Front</div>
    <div class="flip-card-back">Back</div>
</div>
