# CSS Shimmer Loading Animation

1. **What does this do?** Creates a lightweight, hardware-accelerated shimmer sweep animation for skeleton UI elements using CSS gradients and translations.
2. **How is it used?** Apply the class `.skeleton-shimmer` to any block or text line (e.g. combined with `.skeleton-circle`, `.skeleton-rect`, or `.skeleton-text`).
3. **Why is it useful?** It significantly enhances perceived loading speeds, operates with GPU compositing layers (using `transform` rather than `background-position`), and supports built-in fallback modes for reduced-motion preferences.

---

## Customization Options

You can customize the animation's look, speed, and timing using CSS custom properties on `:root` or directly on any element's `style` attribute.

| CSS Variable | Default Value | Description |
|---|---|---|
| `--shimmer-base-color` | `#e4e7eb` | The background color of the skeleton loader shape. |
| `--shimmer-glare-color` | `rgba(255, 255, 255, 0.6)` | The highlights/glare band color sweeping across the skeleton. |
| `--shimmer-duration` | `1.6s` | The time it takes to complete one sweep animation loop. |
| `--shimmer-angle` | `110deg` | The angle of the gradient sweep. |
| `--shimmer-timing` | `ease-in-out` | The CSS transition timing function of the sweep. |

### Example Override

```html
<div class="skeleton-shimmer skeleton-circle" 
     style="--shimmer-duration: 1s; --shimmer-glare-color: rgba(99, 102, 241, 0.3);">
</div>
```
