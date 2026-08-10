# CSS Scale-Hover Badge

A pure CSS badge component styled as a portfolio "skills" section, with a pop-in entrance and a smooth scale-up on hover. No JavaScript, no dependencies.

## How it works

Two separate CSS techniques are combined here:

- **Entrance:** each badge plays a `@keyframes` pop-in animation on load, staggered with `animation-delay` per badge using `nth-child`, so they appear one after another instead of all at once.
- **Hover:** a plain `transition` on `transform` and `background-color` scales the badge up smoothly and swaps its colors when hovered, no keyframes needed for this part since it's a two-state change.

## Files

- `demo.html` – a "skills & tools" badge group, portfolio-styled
- `style.css` – all styling, custom properties, keyframe entrance, and hover transition
- `README.md` – this file

## Custom properties

These live on `:root` in `style.css`:

- `--ease-badge-duration` – 0.25s
- `--ease-badge-easing` – ease
- `--ease-badge-radius` – 999px (pill shape)
- `--ease-badge-gap` – spacing between badges
- `--ease-badge-bg` – default background
- `--ease-badge-border` – border color
- `--ease-badge-text` – default text color
- `--ease-badge-hover-bg` – background color on hover
- `--ease-badge-hover-text` – text color on hover
- `--ease-badge-scale` – how much the badge scales up on hover (1.12 = 12%)

Override any of them to reskin, for example:

```css
:root {
  --ease-badge-hover-bg: #f97316;
  --ease-badge-scale: 1.2;
}
```

## Notes

- Fully responsive, with breakpoints at 768px and 480px
- Respects `prefers-reduced-motion` — both the entrance animation and hover transition are disabled for users who have that set
- Dark theme is a deliberate stylistic choice to match common portfolio aesthetics; all colcors are custom properties so it can be re-themed easily