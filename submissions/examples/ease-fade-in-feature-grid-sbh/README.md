# ease-fade-in-feature-grid

A glassmorphism feature grid whose cards fade in and lift into view one after another with a staggered cascade.

## What does this do?

Adds a **fade-in feature grid**: each frosted-glass card starts invisible and shifted down, then animates to full opacity and its resting position — with each card delayed slightly more than the previous, creating a cascading reveal. Hovering or focusing a card highlights its border.

## How is it used?

1. Build a `.grid` of `.card` elements.
2. Assign each card a delay variant (`card--d1` … `card--d6`) to control the stagger order.
3. Add `tabindex="0"` so cards are keyboard-focusable.

```html
<link rel="stylesheet" href="style.css" />

<section class="grid" aria-label="Features">
  <article class="card card--d1" tabindex="0">
    <span class="card__icon">&#128640;</span>
    <h2 class="card__title">Ship faster</h2>
    <p class="card__text">One-command deploys.</p>
  </article>
  <!-- more cards with --d2, --d3, ... -->
</section>
```

## Why is this useful?

- **Animation-first** — the signature motion is `@keyframes fi-in` (opacity + `translateY`) applied per card with an increasing `animation-delay` via `--fi-stagger`, so the grid reveals as a cascade rather than all at once.
- **Glassmorphism aesthetic** — frosted cards via `backdrop-filter: blur()` over a translucent gradient.
- **Accessible** — `tabindex="0"` for keyboard focus, `:focus-visible` highlights, and full `prefers-reduced-motion` support (cards appear instantly with no fade/translate).
- **Reusable** — configurable via CSS custom properties (`--fi-duration`, `--fi-ease`, `--fi-stagger`, `--glass-blur`, color tokens).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — glassmorphism grid, fade-in cascade keyframes + stagger, hover/focus highlight, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
