 
# Hover Sweep Background Effect

Background color sweeps in from one side on hover — smooth gradient transition.

## Files

| File | Description |
|------|-------------|
| 📄 [demo.html](./demo.html) | Interactive demo |
| 🎨 [style.css](./style.css) | Sweep styles |
| 📖 [README.md](./README.md) | Documentation |

## Classes

| Class | Direction | Speed |
|-------|-----------|-------|
| `ease-hover-sweep-left` | Left to right | 0.4s |
| `ease-hover-sweep-right` | Right to left | 0.4s |
| `ease-hover-sweep-top` | Top to bottom | 0.4s |
| `ease-hover-sweep-bottom` | Bottom to top | 0.4s |
| `ease-hover-sweep-left-fast` | Left to right | 0.2s |
| `ease-hover-sweep-left-slow` | Left to right | 0.8s |

## Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--sweep-color` | #667eea | Sweep background color |

## Usage

```html
<!-- Sweep from left to right -->
<button class="ease-hover-sweep-left">Hover Me</button>

<!-- Sweep from right to left -->
<button class="ease-hover-sweep-right">Hover Me</button>

<!-- Custom color -->
<div class="ease-hover-sweep-left" style="--sweep-color: #ff6b6b;">
    Custom Color
</div>