# ease-swing

Pendulum swing animation anchored at the top center — element swings like a pendulum.

## Files

| File | Description |
|------|-------------|
| 📄 [demo.html](./demo.html) | Interactive demo |
| 🎨 [style.css](./style.css) | Swing animation styles |
| 📖 [README.md](./README.md) | Documentation |

## Classes

| Class | Angle | Speed | Mode |
|-------|-------|-------|------|
| `ease-swing` | 15° | 2s | Continuous |
| `ease-swing-small` | 5° | 2s | Continuous |
| `ease-swing-large` | 25° | 2s | Continuous |
| `ease-swing-fast` | 15° | 1s | Continuous |
| `ease-swing-slow` | 15° | 4s | Continuous |
| `ease-swing-hover` | 15° | 0.6s | One-shot (on hover) |
| `ease-swing-custom` | Custom | 2s | Continuous |

## Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-swing-angle` | 15deg | Controls swing angle |

## Usage

```html
<!-- Basic swing (continuous) -->
<div class="ease-swing">Swinging content</div>

<!-- Different angles -->
<div class="ease-swing-small">5° swing</div>
<div class="ease-swing-large">25° swing</div>

<!-- One-shot on hover -->
<div class="ease-swing-hover">Swing on hover</div>

<!-- Custom angle -->
<div class="ease-swing-custom" style="--ease-swing-angle: 20deg;">
    20° swing
</div> 
