# ease-rotate-fade-pricing

A glassmorphism pricing table whose cards rotate and fade into view on load, staggered per card.

## What does this do?

Adds a **rotate-fade pricing table**: each frosted-glass plan card enters rotated slightly counter-clockwise (`rotate(-6deg)`) and shifted down, then animates to its upright, resting position while fading in — with each card delayed slightly more than the previous. The featured plan is scaled up and tinted.

## How is it used?

1. Build a `.table` grid of `.plan` cards.
2. Assign each plan a stagger variant (`plan--r1`, `plan--r2`, `plan--r3`) to control the entrance order.
3. Mark the featured plan with `plan--featured` and add a `.plan__badge`.

```html
<link rel="stylesheet" href="style.css" />

<section class="table" aria-label="Pricing plans">
  <article class="plan plan--r1" tabindex="0">
    <h2 class="plan__name">Solo</h2>
    <p class="plan__price"><span class="plan__cur">$</span>12<span class="plan__per">/mo</span></p>
    <ul class="plan__features"><li>3 projects</li><li>Email support</li></ul>
    <button type="button" class="plan__cta">Choose Solo</button>
  </article>
  <!-- more plans with --r2, --r3 -->
</section>
```

## Why is this useful?

- **Animation-first** — the signature motion is `@keyframes rf-in` interpolating `rotate(-6deg) → 0deg` together with `opacity` and `translateY`, applied per card with an increasing `animation-delay` via `--rf-stagger`. The featured plan's keyframe also folds in its `scale(1.05)` so it settles at the larger size.
- **Glassmorphism aesthetic** — frosted cards via `backdrop-filter: blur()`; the featured card gets a tinted gradient accent.
- **Accessible** — `tabindex="0"` + `aria-label` on the featured plan, `:focus-visible` outlines on cards and CTAs, and full `prefers-reduced-motion` support (cards appear upright instantly with no rotate/fade).
- **Reusable** — configurable via CSS custom properties (`--rf-duration`, `--rf-ease`, `--rf-stagger`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — glassmorphism plans, rotate-fade keyframes + stagger, featured styling, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
