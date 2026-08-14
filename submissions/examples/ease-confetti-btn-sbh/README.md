# ease-confetti-btn

A button that, on click, bursts a small shower of colored confetti particles outward before they fall and fade — a celebratory micro-interaction for confirmation actions like "Submit," "Subscribe," or "Complete Order."

## What does this do?

Adds a **confetti-btn**: a button containing a cluster of 12 particle `<span>`s. On click, the particles burst outward in all directions (each rotated to a position around the circle), travel up and out, then fall and fade. Particles are staggered by index (`--i`) for a natural spread and cycle through six colors. A tiny included script re-triggers the burst on each click by toggling a class; the motion itself is pure CSS.

## How is it used?

1. Build a `<button class="confetti-btn">` containing a `.confetti-btn__label` span and a `.confetti` span with 12 `.confetti__p` particles (each with `style="--i:n"`).
2. The included script adds `is-bursting` on click to (re)play the burst.

```html
<link rel="stylesheet" href="style.css" />

<button type="button" class="confetti-btn">
  <span class="confetti-btn__label">Submit</span>
  <span class="confetti" aria-hidden="true">
    <span class="confetti__p" style="--i:0"></span>
    <span class="confetti__p" style="--i:1"></span>
    …
    <span class="confetti__p" style="--i:11"></span>
  </span>
</button>
```

## Why is this useful?

- **Animation-first** — the signature motion is `@keyframes cb-burst`: each particle is rotated to its angle (`rotate(calc(var(--i) * 30deg))`) and animates `translateY` from `0` to `-46px` along that axis, scaling down and rotating as it travels, while `opacity` fades. Staggered `animation-delay` (`calc(var(--i) * 0.012s)`) spreads the burst. Six particle colors via `nth-child`. All via `transform`/`opacity`.
- **Glassmorphism aesthetic** — the ghost variant is a frosted button on the dark background; the primary variant is an accent gradient.
- **Accessible** — it's a real `<button type="button">`, so it's keyboard-operable (Enter/Space trigger `click`, which fires the burst). The confetti particles are `aria-hidden="true"` (purely decorative). `:focus-visible` ring. `:active` press feedback. Full `prefers-reduced-motion` support (no burst; button still functions).
- **Reusable** — configurable via CSS custom properties (`--burst-duration`, `--burst-ease`, `--particle-size`, color tokens `--c1`…`--c6`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Includes a tiny optional script that re-triggers the burst on click.
- `style.css` — button base + ghost variant, 12-particle confetti cluster, burst keyframes with index-driven rotation/stagger, focus-visible/active states, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation. The burst replay requires the small JS in `demo.html`; the maintainer may adapt this when curating into the framework.
