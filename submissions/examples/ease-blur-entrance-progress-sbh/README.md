# ease-blur-entrance-progress

A glassmorphism progress bar whose fill animates in from a blurred, dim state, sharpening and brightening as it grows toward its target value.

## What does this do?

Adds a **blur-entrance progress bar**: each bar's fill starts blurred and translucent, then animates to its target width while the blur clears and opacity rises — giving the impression of content "focusing into" place. Built on a frosted-glass panel.

## How is it used?

1. Set the target value via the `--val` CSS custom property on `.bar__fill` (e.g. `style="--val: 72%"`).
2. Set `aria-valuenow` on the `.bar` to match for screen readers.
3. Use modifier classes for color variants: `bar__fill--accent`, `bar__fill--success`.

```html
<link rel="stylesheet" href="style.css" />

<div class="bar" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" aria-label="Uploading">
  <div class="bar__fill" style="--val: 72%"></div>
</div>
```

A small inline "Replay" button resets and re-runs the entrance animation for demo purposes.

## Why is this useful?

- **Animation-first** — the signature motion is a `@keyframes blur-in` that interpolates `filter: blur(10px) → 0`, `opacity`, and `width` together, so the fill literally focuses into view.
- **Glassmorphism aesthetic** — frosted panel via `backdrop-filter: blur()` over a translucent gradient, fitting modern dashboard UIs.
- **Accessible** — proper `role="progressbar"` with `aria-valuenow/min/max`, `:focus-visible` outlines, and full `prefers-reduced-motion` support (fill jumps to final width with no blur/animation).
- **Reusable** — configurable via CSS custom properties (`--bar-duration`, `--bar-ease`, `--bar-delay`, `--val`, `--glass-blur`, color tokens).

## Files

- `demo.html` — self-contained interactive demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — glassmorphism panel, blur-entrance keyframes, color variants, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
