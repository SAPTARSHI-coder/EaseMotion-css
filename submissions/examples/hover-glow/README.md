# ease-hover-glow

Adds a glowing drop-shadow effect on hover using `filter: drop-shadow()`. Unlike box-shadow, drop-shadow is not clipped by parent `overflow: hidden` containers.

## Usage

```html
<button class="ease-btn ease-hover-glow">Hover me</button>
```

## Variants

| Class | Description |
|---|---|
| `ease-hover-glow` | Default purple glow on hover |
| `ease-hover-glow-sm` | Subtle smaller glow |
| `ease-hover-glow-lg` | Stronger larger glow |

## Notes

- Uses `--ease-color-primary` token for the glow color
- Respects `prefers-reduced-motion`
- Works on buttons, cards, icons — any interactive element

## Submission

- **Author:** SAPTARSHI-coder
- **Issue:** TBD
- **Files:** `style.css`, `demo.html`
