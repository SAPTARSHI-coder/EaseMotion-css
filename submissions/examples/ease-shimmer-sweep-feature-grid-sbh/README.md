# ease-shimmer-sweep-feature-grid

A glassmorphism feature grid whose cards sweep a shimmer highlight diagonally across their surface on hover or keyboard focus.

## What does this do?

Adds a **shimmer-sweep feature grid**: each frosted-glass card lifts slightly on hover/focus while a bright diagonal shimmer band sweeps across the card from left to right, giving a polished sheen effect. No JavaScript required — the shimmer is a pure CSS `@keyframes` animation triggered by `:hover` / `:focus-visible`.

## How is it used?

1. Build a `.grid` of `.card` elements.
2. Inside each card, place a `.card__shine` element (the shimmer band) plus your icon, title, and text.
3. Add `tabindex="0"` so cards are keyboard-focusable (focus also triggers the shimmer).

```html
<link rel="stylesheet" href="style.css" />

<section class="grid" aria-label="Features">
  <article class="card" tabindex="0">
    <div class="card__shine" aria-hidden="true"></div>
    <span class="card__icon">&#9889;</span>
    <h2 class="card__title">Fast</h2>
    <p class="card__text">Sub-50ms interactions.</p>
  </article>
  <!-- more cards -->
</section>
```

## Why is this useful?

- **Animation-first** — the signature motion is the `@keyframes ss-sweep` that translates a `skewX`-gradient band across the card (`left: -75% → 150%`) with an opacity rise/fall, combined with a gentle lift on `transform`.
- **Glassmorphism aesthetic** — frosted cards via `backdrop-filter: blur()` over a translucent gradient.
- **Accessible** — `tabindex="0"` for keyboard focus, `:focus-visible` triggers the same shimmer as hover, and full `prefers-reduced-motion` support (lift and shimmer both disabled when requested).
- **Reusable** — configurable via CSS custom properties (`--ss-hover-duration`, `--ss-ease`, `--glass-blur`, color tokens).

## Files

- `demo.html` — self-contained interactive demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — glassmorphism grid, shimmer-sweep keyframes, hover/focus lift, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
