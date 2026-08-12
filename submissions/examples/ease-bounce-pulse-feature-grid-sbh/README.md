# ease-bounce-pulse-feature-grid

A glassmorphism feature grid whose cards bounce in on load with a spring overshoot and then softly pulse their glow to stay alive.

## What does this do?

Adds a **bounce-pulse feature grid**: each frosted-glass card enters with a spring overshoot (`translateY` + `scale`), staggered per card, then settles into a gentle, continuous glow `box-shadow` pulse so the grid never feels static.

## How is it used?

1. Build a `.grid` of `.card` elements.
2. Assign each card a stagger variant (`card--p1` … `card--p6`) to control the bounce order.
3. Add `tabindex="0"` so cards are keyboard-focusable.

```html
<link rel="stylesheet" href="style.css" />

<section class="grid" aria-label="Features">
  <article class="card card--p1" tabindex="0">
    <span class="card__icon">&#128171;</span>
    <h2 class="card__title">Boost</h2>
    <p class="card__text">Accelerate workflows.</p>
  </article>
  <!-- more cards with --p2, --p3, ... -->
</section>
```

## Why is this useful?

- **Animation-first** — two layered motions per card: `@keyframes bp-bounce` uses a spring `cubic-bezier(0.34, 1.56, 0.64, 1)` for the entrance overshoot (`translateY` + `scale`); `@keyframes bp-pulse` gently breathes the glow `box-shadow` on an infinite loop, started after the bounce finishes. Staggered via `--bp-stagger`.
- **Glassmorphism aesthetic** — frosted cards via `backdrop-filter: blur()` over a translucent gradient.
- **Accessible** — `tabindex="0"` for keyboard focus, `:focus-visible` highlights, and full `prefers-reduced-motion` support (bounce and pulse both disabled when requested; cards appear instantly).
- **Reusable** — configurable via CSS custom properties (`--bp-bounce-duration`, `--bp-pulse-duration`, `--bp-ease`, `--bp-stagger`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — glassmorphism grid, bounce + pulse keyframes with stagger, hover/focus highlight, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
