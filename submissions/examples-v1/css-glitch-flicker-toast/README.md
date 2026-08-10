# CSS Glitch-Flicker Toast

A pure CSS toast notification component with a glitch-flicker entrance animation, built for a creative portfolio "recent activity" section. No JavaScript, no dependencies.

## How it works

Each toast plays a single `@keyframes` animation on load. Instead of a smooth linear fade, the keyframe steps through several rapid opacity and horizontal-position jumps before settling into its resting state, giving a glitch-like flicker rather than a plain fade-in.

Since toasts are meant to appear once rather than stay toggleable, this doesn't use the checkbox-hack pattern from other submissions — a single `animation` on each `.ease-toast` element, staggered with `animation-delay`, is enough.

## Files

- `demo.html` – three toast variants (success, info, alert) styled as portfolio activity notifications
- `style.css` – all styling, custom properties, and the glitch-flicker keyframe
- `README.md` – this file

## Custom properties

These live on `:root` in `style.css`:

- `--ease-toast-duration` – 0.9s
- `--ease-toast-easing` – ease-out
- `--ease-toast-radius` – 10px
- `--ease-toast-gap` – spacing between stacked toasts
- `--ease-toast-bg` – toast background color
- `--ease-toast-border` – border color
- `--ease-toast-text` – title text color
- `--ease-toast-muted-text` – message text color
- `--ease-toast-success` / `--ease-toast-info` / `--ease-toast-alert` – accent colors per toast type

Override any of them to reskin, for example:

```css
:root {
  --ease-toast-duration: 0.6s;
  --ease-toast-info: #38bdf8;
}
```

## Notes

- Fully responsive, with breakpoints at 768px and 480px
- Respects `prefers-reduced-motion` — the animation is disabled entirely and toasts appear instantly at full opacity for users who have that set
- Dark theme is a deliberate stylistic choice to match common portfolio aesthetics; all colors are custom properties so it can be re-themed easilycl