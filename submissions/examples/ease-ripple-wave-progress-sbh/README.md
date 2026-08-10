# ease-ripple-wave-progress

A glassmorphism progress bar with a continuous ripple wave traveling along the fill as it grows toward its target value.

## What does this do?

Adds a **ripple-wave progress bar**: the fill grows from 0 to its target width, and a bright translucent wave continuously sweeps across the fill's surface — like a ripple moving through water — to signal active, ongoing progress.

## How is it used?

1. Set the target value via the `--val` CSS custom property on `.bar__fill` (e.g. `style="--val: 63%"`).
2. Set `aria-valuenow` on the `.bar` to match for screen readers.
3. Use modifier classes for color variants: `bar__fill--violet`, `bar__fill--emerald`.

```html
<link rel="stylesheet" href="style.css" />

<div class="bar" role="progressbar" aria-valuenow="63" aria-valuemin="0" aria-valuemax="100" aria-label="Syncing">
  <div class="bar__fill" style="--val: 63%"></div>
</div>
```

A small inline "Replay" button resets and re-runs the grow animation for demo purposes; the wave loops indefinitely via CSS.

## Why is this useful?

- **Animation-first** — two layered motions: `@keyframes rw-grow` animates the fill `width` to `--val`, while `@keyframes rw-wave` continuously translates a radial-gradient highlight across the fill for the living "ripple" effect.
- **Glassmorphism aesthetic** — frosted panel via `backdrop-filter: blur()` over a translucent gradient.
- **Accessible** — proper `role="progressbar"` with `aria-valuenow/min/max`, `:focus-visible` outlines, and full `prefers-reduced-motion` support (fill jumps to final width; wave hidden entirely).
- **Reusable** — configurable via CSS custom properties (`--rw-duration`, `--rw-ease`, `--rw-wave-duration`, `--val`, `--glass-blur`, color tokens).

## Files

- `demo.html` — self-contained interactive demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — glassmorphism panel, grow + ripple-wave keyframes, color variants, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
