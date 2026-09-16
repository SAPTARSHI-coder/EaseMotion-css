# ease-elastic-slide-feature-grid

A glassmorphism feature grid whose cards slide in from the left with an elastic spring overshoot, staggered per card.

## What does this do?

Adds an **elastic-slide feature grid**: each frosted-glass card enters from the left (`translateX(-60px)`), overshoots its resting position to the right, then settles back — a classic spring/elastic feel. Each card is delayed slightly more than the previous, so the grid slides into place as a sequence.

## How is it used?

1. Build a `.grid` of `.card` elements.
2. Assign each card a stagger variant (`card--e1` … `card--e6`) to control the slide order.
3. Add `tabindex="0"` so cards are keyboard-focusable.

```html
<link rel="stylesheet" href="style.css" />

<section class="grid" aria-label="Features">
  <article class="card card--e1" tabindex="0">
    <span class="card__icon">&#128640;</span>
    <h2 class="card__title">Launch</h2>
    <p class="card__text">Zero to deployed in one command.</p>
  </article>
  <!-- more cards with --e2, --e3, ... -->
</section>
```

## Why is this useful?

- **Animation-first** — the signature motion is `@keyframes es-slide` using a spring `cubic-bezier(0.34, 1.56, 0.64, 1)` for the entrance, with a multi-step keyframe that overshoots right (`translateX(10px)`) then settles back through a small recoil (`-4px`) before resting at 0. Staggered via `--es-stagger`.
- **Glassmorphism aesthetic** — frosted cards via `backdrop-filter: blur()` over a translucent gradient.
- **Accessible** — `tabindex="0"` for keyboard focus, `:focus-visible` highlights, and full `prefers-reduced-motion` support (cards appear in place instantly with no slide).
- **Reusable** — configurable via CSS custom properties (`--es-duration`, `--es-ease`, `--es-stagger`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — glassmorphism grid, elastic-slide spring keyframes + stagger, hover/focus highlight, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
