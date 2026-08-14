# CSS Slide-Up Progress Bar

A pure CSS progress bar set styled for a dashboard "project status" section. Each bar slides up into view, then fills to its target value. No JavaScript, no dependencies.

## How it works

Two animations run in sequence per bar:

1. The whole `.ease-progress-item` (label + track) slides up and fades in on load, staggered per item with `animation-delay`.
2. Once that settles, `.ease-progress-fill` animates its `width` from 0 to a target value, read from a `--ease-progress-value` custom property set inline per bar (e.g. `style="--ease-progress-value: 90%;"`).

Splitting the value into a CSS custom property set inline on each bar means the same `@keyframes` rule works for every bar regardless of its target percentage, instead of writing a separate keyframe per value.

## Files

- `demo.html` – four progress bars representing project stages
- `style.css` – all styling, custom properties, and both animations
- `README.md` – this file

## Custom properties

Global ones live on `:root` in `style.css`:

- `--ease-progress-duration` – 0.8s
- `--ease-progress-easing` – ease-out
- `--ease-progress-radius` – 999px (pill shape)
- `--ease-progress-gap` – spacing between bars
- `--ease-progress-track-bg` – track background
- `--ease-progress-track-height` – bar thickness
- `--ease-progress-text` – label text color
- `--ease-progress-muted-text` – percentage text color
- `--ease-progress-fill-start` / `--ease-progress-fill-end` – gradient colors for the fill

Per-bar, `--ease-progress-value` is set inline on each `.ease-progress-fill` to control its target width.

Example override:

```css
:root {
  --ease-progress-fill-start: #22c55e;
  --ease-progress-fill-end: #4ade80;
}
```

## Notes

- `role="progressbar"` with `aria-valuenow`/`aria-valuemin`/`aria-valuemax` on the track for screen reader support
- Fully responsive, with breakpoints at 768px and 480px
- Respects `prefers-reduced-motion` — bars appear instantly at their final position and fill width, no animation