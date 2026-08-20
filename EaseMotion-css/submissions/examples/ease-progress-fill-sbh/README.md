# ease-progress-fill

A progress bar that smoothly fills to a target width, with an animated shimmer sweeping across the filled area and a striped variant whose diagonal stripes march rightward. Great for loading states, downloads, and task completion.

## What does this do?

Adds a **progress-fill**: a glassmorphism track with an inner `.progress__fill` bar. The fill animates its `width` from `0` to a `--target` custom property (e.g. `42%`), so you set the value declaratively and the bar fills smoothly on load. The `--shimmer` variant adds a light band sweeping across the filled area; the `--striped` variant adds marching diagonal stripes for an "indeterminate activity" feel.

## How is it used?

1. Build a `.progress` track (a `role="progressbar"` with `aria-valuenow/min/max`) and put a `.progress__fill` inside it.
2. Set the target via the `--target` inline custom property (a percentage), and add `--shimmer` or `--striped` for the activity effect.

```html
<link rel="stylesheet" href="style.css" />

<div class="progress" role="progressbar" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100" aria-label="Download progress">
  <div class="progress__fill progress__fill--shimmer" style="--target: 42%"></div>
</div>
```

## Why is this useful?

- **Animation-first** — the signature motion is `@keyframes pf-grow` animating the fill's `width` from `0` to `var(--target)`. The shimmer variant layers `@keyframes pf-shimmer` to sweep a translucent band across the filled area (via `background-position`), and the striped variant layers `@keyframes pf-march` to advance diagonal stripes rightward. All via `width`/`background-position`.
- **Glassmorphism aesthetic** — the track is a frosted, translucent bar on the dark background; the fill is an accent gradient.
- **Accessible** — semantic `role="progressbar"` with `aria-valuenow`/`aria-valuemin`/`aria-valuemax` and an `aria-label`, so screen readers announce the value. The animation is decorative; the value is conveyed via ARIA regardless of motion. Full `prefers-reduced-motion` support (fill snaps to target width; shimmer/stripes stop).
- **Reusable** — configurable via CSS custom properties (`--fill-duration`, `--fill-ease`, `--fill-color`, `--target`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS animation, no JS.
- `style.css` — glassmorphism track, width-grow keyframes, shimmer + striped activity variants, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
