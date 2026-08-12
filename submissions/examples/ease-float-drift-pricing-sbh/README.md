# ease-float-drift-pricing

A glassmorphism pricing table whose cards gently float and drift up and down, each at its own rhythm and phase, for a calm, living feel.

## What does this do?

Adds a **float-drift pricing table**: three frosted-glass plan cards that continuously drift vertically with a tiny rotation, each on a different delay so they never move in lockstep. The featured plan is scaled up and tinted.

## How is it used?

1. Build a `.table` grid of `.plan` cards.
2. Assign each a drift variant class (`plan--a`, `plan--b`, `plan--c`) so they animate out of phase.
3. Mark the featured plan with `plan--featured` and add a `.plan__badge`.

```html
<link rel="stylesheet" href="style.css" />

<section class="table" aria-label="Pricing plans">
  <article class="plan plan--a" tabindex="0">
    <h2 class="plan__name">Hobby</h2>
    <p class="plan__price"><span class="plan__cur">$</span>0<span class="plan__per">/mo</span></p>
    <ul class="plan__features"><li>1 project</li><li>Community support</li></ul>
    <button type="button" class="plan__cta">Get started</button>
  </article>
  <!-- more plans with --b, --c -->
</section>
```

## Why is this useful?

- **Animation-first** — three distinct `@keyframes` (`fd-drift-a/b/c`) with staggered `animation-delay` values so the cards drift at their own cadence and phase, avoiding mechanical sync. Each combines a small `translateY` with a subtle `rotate`.
- **Glassmorphism aesthetic** — frosted cards via `backdrop-filter: blur()`; the featured card gets a violet-tinted gradient accent.
- **Accessible** — `tabindex="0"` + `aria-label` on the featured plan, `:focus-visible` outlines on cards and CTAs, and full `prefers-reduced-motion` support (drift disabled when requested — cards sit still).
- **Reusable** — configurable via CSS custom properties (`--fd-duration`, `--fd-ease`, `--glass-blur`, color tokens).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — glassmorphism plans, three drift keyframes, featured styling, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
