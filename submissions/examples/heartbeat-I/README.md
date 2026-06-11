 
# Heartbeat Double-Pulse Animation

Double-pulse rhythm animation mimicking a real heartbeat — scale: 1 → 1.1 → 1 → 1.15 → 1.

## Files

| File | Description |
|------|-------------|
| 📄 [demo.html](./demo.html) | Interactive demo |
| 🎨 [style.css](./style.css) | Heartbeat styles |
| 📖 [README.md](./README.md) | Documentation |

## Classes

| Class | Speed | Trigger |
|-------|-------|---------|
| `ease-heartbeat` | 1.2s | Auto |
| `ease-heartbeat-fast` | 0.6s | Auto |
| `ease-heartbeat-slow` | 2s | Auto |
| `ease-heartbeat-hover-trigger` | 1.2s | Hover |
| `ease-heartbeat-red/pink/purple/blue/green/orange` | 1.2s | Auto |

## Animation Sequence

| Step | Scale |
|------|-------|
| 0% | 1 |
| 15% | 1.1 |
| 30% | 1 |
| 45% | 1.15 |
| 60% | 1 |
| 100% | 1 |

## Usage

```html
<!-- Basic heartbeat -->
<div class="ease-heartbeat">❤️</div>

<!-- Different speeds -->
<div class="ease-heartbeat-fast">Fast heartbeat</div>
<div class="ease-heartbeat-slow">Slow heartbeat</div>

<!-- Color variants -->
<div class="ease-heartbeat-red">❤️</div>
<div class="ease-heartbeat-pink">❤️</div>

<!-- Hover trigger -->
<div class="ease-heartbeat-hover-trigger">❤️</div>