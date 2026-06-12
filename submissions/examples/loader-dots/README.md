# ease-loader-dots

Staggered bouncing dots loader. Uses three dots with cascading `animation-delay` values for the classic "waiting" animation pattern.

## Usage

```html
<div class="ease-loader-dots">
  <span class="ease-loader-dot"></span>
  <span class="ease-loader-dot"></span>
  <span class="ease-loader-dot"></span>
</div>
```

## Variants

| Class | Description |
|---|---|
| `ease-loader-dots` | Default three-dot bouncing loader |
| `ease-loader-dots-sm` | Smaller dots variant |
| `ease-loader-dots-lg` | Larger dots variant |

## Notes

- Requires three `.ease-loader-dot` children
- Staggered delays create cascading bounce effect
- Respects `prefers-reduced-motion`

## Submission

- **Author:** SAPTARSHI-coder
- **Issue:** TBD
- **Files:** `style.css`, `demo.html`
