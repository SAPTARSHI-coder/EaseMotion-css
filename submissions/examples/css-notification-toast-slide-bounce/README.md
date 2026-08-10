# CSS Notification Toast — Slide + Bounce

A pure CSS toast notification stack that slides in from the side and settles with a bounce, rather than a plain fade or straight slide. No JavaScript, no dependencies.

## How it works

Each toast plays a single `@keyframes` animation on load, staggered per toast with `animation-delay`. The bounce isn't just from the easing curve — the keyframe itself overshoots slightly past its resting position (translateX goes negative, then a touch positive) before settling at 0, which reads as a bouncy landing rather than a smooth glide.

## Files

- `demo.html` – three toast variants (success, info, alert)
- `style.css` – all styling, custom properties, and the slide-bounce keyframe
- `README.md` – this file

## Custom properties

Set on `:root` in `style.css`:

- `--ease-toast-duration` – 0.7s
- `--ease-toast-easing` – cubic-bezier(0.34, 1.56, 0.64, 1)
- `--ease-toast-radius` – 10px
- `--ease-toast-gap` – spacing between stacked toasts
- `--ease-toast-bg` – toast background
- `--ease-toast-border` – border color
- `--ease-toast-text` – title color
- `--ease-toast-muted-text` – message color
- `--ease-toast-success` / `--ease-toast-info` / `--ease-toast-alert` – accent colors per type
- `--ease-toast-slide-distance` – how far offscreen the toast starts (60px)

Example override:

```css
:root {
  --ease-toast-slide-distance: 100px;
  --ease-toast-duration: 0.5s;
}
```

## Notes

- Fully responsive, with breakpoints at 768px and 480px
- Respects `prefers-reduced-motion` — toasts appear instantly at rest position with no slide or bounce