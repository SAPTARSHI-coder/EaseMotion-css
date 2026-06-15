# ease-reveal-up

Scroll reveal direction variant that starts with translateY(40px) hidden state. Pairs with IntersectionObserver-based reveal triggers.

## Usage

```html
<div class="ease-reveal-up ease-reveal">Content</div>
```

## Variants

| Class | Description |
|---|---|
| `ease-reveal-up` | Reveal from below (translateY 40px) |
| `ease-reveal-down` | Reveal from above (translateY -40px) |
| `ease-reveal-left` | Reveal from right (translateX -40px) |
| `ease-reveal-right` | Reveal from left (translateX 40px) |
| `ease-reveal-scale` | Reveal with scale(0.9) |

## Notes

- Uses transition (not animation) triggered by `.ease-reveal-active`
- Pairs with scroll-driven animations or IntersectionObserver
- Each direction defines the hidden starting state
- Respects `prefers-reduced-motion`

## Submission

- **Author:** SAPTARSHI-coder
- **Files:** `style.css`, `demo.html`
