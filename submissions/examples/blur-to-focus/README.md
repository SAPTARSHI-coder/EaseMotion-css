# ease-blur-to-focus

Cinematic blur-to-focus entrance animation using CSS `filter: blur()` keyframes. Zero JavaScript.

## Usage

```html
<div class="ease-blur-to-focus">Reveals in focus</div>
```

## Variants

| Class                   | Description                  |
| ----------------------- | ---------------------------- |
| `ease-blur-to-focus`    | Default blur-to-focus (12px) |
| `ease-blur-to-focus-sm` | Subtle blur reveal (6px)     |
| `ease-blur-to-focus-lg` | Strong blur reveal (24px)    |
| `ease-blur-pulse-loop`  | Infinite pulsing blur loop   |
| `ease-blur-fast`        | 350ms duration               |
| `ease-blur-slow`        | 1200ms duration              |

## Notes

- Combine with `ease-delay-*` classes for staggered group reveals
- Works on text, images, cards — any element
- Respects `prefers-reduced-motion`

## Submission

- **Author:** SAPTARSHI-coder
- **Issue:** #4696
- **Files:** `style.css`, `demo.html`
