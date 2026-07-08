# ease-fade-in-sn

Smooth fade-in animation utilities with configurable speed via CSS custom properties.

## Files

| File | Description |
|------|-------------|
| 📄 [demo.html](./demo.html) | Interactive demo |
| 🎨 [style.css](./style.css) | Fade animation styles |
| 📖 [README.md](./README.md) | Documentation |

## Classes

| Class | Description | Default Duration |
|-------|-------------|-----------------|
| `.fade-in` | Standard fade-in from opacity 0 to 1 | 0.6s |
| `.fade-in-fast` | Fast fade-in | 0.3s |
| `.fade-in-slow` | Slow fade-in | 1.2s |
| `.hover-fade` | Fades out on hover | 0.4s |

## Usage

```html
<div class="fade-in">Fades in over 0.6s</div>
<div class="fade-in" style="--fade-duration: 2s">Custom duration</div>
<div class="hover-fade">Hover to fade out</div>
```
