# ease-scale-hover-feature-grid

A glassmorphism feature grid whose cards scale up smoothly on hover or keyboard focus, pushing depth forward.

## What does this do?

Adds a **scale-hover feature grid**: each frosted-glass card grows by a configurable factor (`--sh-scale`, default 1.06) on hover/focus, with its border brightening and shadow deepening to sell the lift. The transform is GPU-only (`scale`), so it stays smooth.

## How is it used?

1. Build a `.grid` of `.card` elements.
2. Add `tabindex="0"` so cards are keyboard-focusable (focus triggers the same scale as hover).
3. Tune the scale via the `--sh-scale` custom property.

```html
<link rel="stylesheet" href="style.css" />

<section class="grid" aria-label="Features">
  <article class="card" tabindex="0">
    <span class="card__icon">&#128161;</span>
    <h2 class="card__title">Smart ideas</h2>
    <p class="card__text">Context-aware suggestions.</p>
  </article>
  <!-- more cards -->
</section>
```

## Why is this useful?

- **Animation-first** — the signature motion is a `transform: scale()` transition on hover/focus, combined with a synchronized border-color and box-shadow shift for a coherent depth push. Pure `transform`/opacity only, so it's GPU-accelerated.
- **Glassmorphism aesthetic** — frosted cards via `backdrop-filter: blur()` over a translucent gradient.
- **Accessible** — `tabindex="0"` for keyboard focus, `:focus-visible` triggers the same scale + glow as hover, and full `prefers-reduced-motion` support (scale disabled when requested).
- **Reusable** — configurable via CSS custom properties (`--sh-scale`, `--sh-duration`, `--sh-ease`, `--glass-blur`, color tokens).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — glassmorphism grid, scale-hover transition, hover/focus glow, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
