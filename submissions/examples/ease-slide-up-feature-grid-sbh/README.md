# ease-slide-up-feature-grid

A glassmorphism feature grid whose cards slide up into place from below in a staggered sequence.

## What does this do?

Adds a **slide-up feature grid**: each frosted-glass card starts below its resting position and translated down, then slides up to its slot with an increasing delay per card — creating a rising cascade. Hovering or focusing a card lifts it slightly and highlights its border.

## How is it used?

1. Build a `.grid` of `.card` elements.
2. Assign each card a stagger variant (`card--s1` … `card--s6`) to control the slide order.
3. Add `tabindex="0"` so cards are keyboard-focusable.

```html
<link rel="stylesheet" href="style.css" />

<section class="grid" aria-label="Features">
  <article class="card card--s1" tabindex="0">
    <span class="card__tag">Core</span>
    <h2 class="card__title">Edge runtime</h2>
    <p class="card__text">Executes in milliseconds near your users.</p>
  </article>
  <!-- more cards with --s2, --s3, ... -->
</section>
```

## Why is this useful?

- **Animation-first** — the signature motion is `@keyframes su-up` (a larger `translateY(48px) → 0` than a fade, with opacity gating) applied per card with an increasing `animation-delay` via `--su-stagger`, so the grid rises into place as a sequence. Hover adds an interactive lift on `transform`.
- **Glassmorphism aesthetic** — frosted cards via `backdrop-filter: blur()` over a translucent gradient.
- **Accessible** — `tabindex="0"` for keyboard focus, `:focus-visible` highlights, and full `prefers-reduced-motion` support (cards appear in place instantly with no slide).
- **Reusable** — configurable via CSS custom properties (`--su-duration`, `--su-ease`, `--su-stagger`, `--glass-blur`, color tokens).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — glassmorphism grid, slide-up cascade keyframes + stagger, hover/focus lift, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
