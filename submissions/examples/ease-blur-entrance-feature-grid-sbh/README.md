# ease-blur-entrance-feature-grid

A glassmorphism feature grid whose cards enter from a blurred, dim state and focus into clarity in a staggered cascade.

## What does this do?

Adds a **blur-entrance feature grid**: each frosted-glass card starts blurred (`filter: blur(10px)`) and translucent, then animates to sharp focus and full opacity — with each card delayed slightly more than the previous, so the grid "focuses into" place card by card.

## How is it used?

1. Build a `.grid` of `.card` elements.
2. Assign each card a stagger variant (`card--b1` … `card--b6`) to control the focus order.
3. Add `tabindex="0"` so cards are keyboard-focusable.

```html
<link rel="stylesheet" href="style.css" />

<section class="grid" aria-label="Features">
  <article class="card card--b1" tabindex="0">
    <span class="card__icon">&#127919;</span>
    <h2 class="card__title">Goals</h2>
    <p class="card__text">Track progress with live updates.</p>
  </article>
  <!-- more cards with --b2, --b3, ... -->
</section>
```

## Why is this useful?

- **Animation-first** — the signature motion is `@keyframes be-in` interpolating `filter: blur(10px) → 0` together with `opacity` and a small `translateY`, applied per card with an increasing `animation-delay` via `--be-stagger` for a focusing cascade.
- **Glassmorphism aesthetic** — frosted cards via `backdrop-filter: blur()` over a translucent gradient.
- **Accessible** — `tabindex="0"` for keyboard focus, `:focus-visible` highlights, and full `prefers-reduced-motion` support (cards appear sharp instantly with no blur/translate).
- **Reusable** — configurable via CSS custom properties (`--be-duration`, `--be-ease`, `--be-stagger`, `--glass-blur`, color tokens).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — glassmorphism grid, blur-entrance cascade keyframes + stagger, hover/focus highlight, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
