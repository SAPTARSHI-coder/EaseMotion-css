# ease-pulse

Looping pulse animation using `scale` and `opacity` keyframes. Perfect for live indicators, ping effects, notification dots, and CTA buttons. Zero JavaScript required.

## Usage

```html
<!-- Basic pulse -->
<div class="ease-pulse">Pulsing element</div>

<!-- Ring/ping variant -->
<div class="ease-pulse-ring ease-pulse-primary" style="background:#6366f1;"></div>
```

## Variants

| Class | Description |
|---|---|
| `ease-pulse` | Base scale pulse animation |
| `ease-pulse-ring` | Expanding ring/ping effect via `::after` |
| `ease-pulse-primary` | Indigo color theme |
| `ease-pulse-danger` | Red color theme |
| `ease-pulse-success` | Green color theme |
| `ease-pulse-warning` | Amber color theme |
| `ease-pulse-fast` | 0.8s duration |
| `ease-pulse-slow` | 3.5s duration |
| `ease-pulse-pause` | Pauses animation on hover |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-pulse-color` | `#6366f1` | Ring color for ping variant |

## Notes

- Combine `ease-pulse` and `ease-pulse-ring` for a full ping effect
- Works great on notification dots, live status badges, and CTA buttons
- Use `ease-pulse-pause` on interactive elements so users can read the content

## Submission

- **Author:** sudha09-git
- **Issue:** #2357
- **Files:** `style.css`, `demo.html`
