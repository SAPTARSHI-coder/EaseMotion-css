# ease-reveal

Elements reveal with animation when they enter the viewport — scroll-triggered entrance effects.

## Files

| File | Description |
|------|-------------|
| 📄 [demo.html](./demo.html) | Interactive demo |
| 🎨 [style.css](./style.css) | Reveal styles |
| 📖 [README.md](./README.md) | Documentation |

## Classes

| Class | Effect |
|-------|--------|
| `ease-reveal` | Slide up from bottom |
| `ease-reveal-left` | Slide in from left |
| `ease-reveal-right` | Slide in from right |
| `ease-reveal-up` | Slide up from bottom |
| `ease-reveal-down` | Slide down from top |
| `ease-reveal-fade` | Fade only |
| `ease-reveal-zoom` | Zoom in |
| `ease-reveal-flip` | 3D flip |
| `ease-reveal-blur` | Blur to clear |
| `ease-reveal-delay-1` | With 0.1s delay |
| `ease-reveal-delay-2` | With 0.2s delay |
| `ease-reveal-delay-3` | With 0.3s delay |

## Usage

```html
<!-- Basic reveal on scroll -->
<div class="ease-reveal">Content reveals when scrolled into view</div>

<!-- Different directions -->
<div class="ease-reveal-left">Reveals from left</div>
<div class="ease-reveal-right">Reveals from right</div>

<!-- Different effects -->
<div class="ease-reveal-zoom">Zoom in reveal</div>
<div class="ease-reveal-flip">3D flip reveal</div>

<!-- With delay -->
<div class="ease-reveal-delay-1">Reveals after delay</div> 
