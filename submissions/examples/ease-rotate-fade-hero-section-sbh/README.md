# ease-rotate-fade-hero-section

A glassmorphism hero section whose headline, lead, eyebrow, and actions rotate and fade into view on load, staggered for a confident, unfolding reveal.

## What does this do?

Adds a **rotate-fade hero section**: a frosted-glass hero panel with a soft conic glow behind it. Each text block (eyebrow → title → lead → actions) enters rotated slightly counter-clockwise (`rotate(-5deg)`) and shifted down, then animates to its upright, resting position while fading in — staggered so the hero unfolds top-to-bottom.

## How is it used?

1. Build a `.hero` section with `.hero__eyebrow`, `.hero__title`, `.hero__lead`, and `.hero__actions`.
2. Each block carries a `--rf` modifier that assigns its stagger slot.
3. Tune the timing via the `--rf-stagger` custom property.

```html
<link rel="stylesheet" href="style.css" />

<section class="hero" aria-label="Hero">
  <span class="hero__eyebrow hero__eyebrow--rf">New · v3.0</span>
  <h1 class="hero__title hero__title--rf">Motion that turns heads.</h1>
  <p class="hero__lead hero__lead--rf">A glassmorphism hero…</p>
  <div class="hero__actions hero__actions--rf">
    <a class="hero__cta" href="#start">Get started</a>
    <a class="hero__cta hero__cta--ghost" href="#docs">Read the docs</a>
  </div>
</section>
```

## Why is this useful?

- **Animation-first** — the signature motion is `@keyframes rf-in` interpolating `rotate(-5deg) → 0deg` together with `opacity` and `translateY`, applied per block with an increasing `animation-delay` via `--rf-stagger`.
- **Glassmorphism aesthetic** — frosted panel via `backdrop-filter: blur()` with a blurred conic-gradient glow behind it.
- **Accessible** — `aria-label` on the hero, `tabindex` + `:focus-visible` rings on CTAs, and full `prefers-reduced-motion` support (blocks appear instantly with no rotate/fade).
- **Reusable** — configurable via CSS custom properties (`--rf-duration`, `--rf-ease`, `--rf-stagger`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — glassmorphism hero, rotate-fade staggered keyframes, conic glow, CTA states, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
