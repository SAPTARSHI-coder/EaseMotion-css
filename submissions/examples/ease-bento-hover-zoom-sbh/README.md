# ease-bento-hover-zoom

A modern Bento grid where each tile smoothly scales up and illuminates its border with a vibrant gradient highlight on hover — a sleek dashboard/portfolio layout block.

## What does this do?

Adds a **bento-hover-zoom**: a responsive grid of glassmorphism tiles. On hover (and keyboard focus), a tile scales up slightly (`scale(1.035)`), its plain border fades out, and a gradient border (drawn via a masked `::before` layer) fades in, accompanied by a soft accent glow shadow. Tiles include a large feature tile (`--lg`) and a wide tile (`--wide`) for layout variety.

## How is it used?

1. Build a `.bento` grid of `.bento__tile` articles. Add `--lg` or `--wide` to span columns/rows.
2. Tiles are focusable (`tabindex="0"`) so keyboard users get the same zoom + highlight.

```html
<link rel="stylesheet" href="style.css" />

<section class="bento" aria-label="Dashboard bento grid">
  <article class="bento__tile bento__tile--lg" tabindex="0">
    <h2 class="bento__title">Revenue</h2>
    <p class="bento__value">$48,210</p>
    <p class="bento__sub">+12.4% vs last month</p>
  </article>
  <article class="bento__tile" tabindex="0">…</article>
</section>
```

## Why is this useful?

- **Animation-first** — the signature motion is the hover zoom (`transform: scale(1.035)`) paired with a border-highlight reveal: a `::before` pseudo-element paints a gradient border via the `padding` + `mask` (content-box/xor) technique, fading in (`opacity`) while the base border fades out. A soft `box-shadow` glow completes the lift. All via `transform`/`opacity`/`box-shadow`.
- **Glassmorphism aesthetic** — tiles are frosted panels via `backdrop-filter: blur()`; the hover border is an accent gradient.
- **Accessible** — tiles are focusable and the zoom + highlight fire on `:focus-visible` too (not just `:hover`), so keyboard users get identical feedback. Full `prefers-reduced-motion` support (no transform; highlight still toggles via opacity but instantly).
- **Reusable** — configurable via CSS custom properties (`--zoom-duration`, `--zoom-ease`, `--tile-hover-border`, `--glow`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS interaction, no JS.
- `style.css` — responsive Bento grid, hover zoom + gradient-border reveal via masked `::before`, focus-visible parity, glow shadow, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
