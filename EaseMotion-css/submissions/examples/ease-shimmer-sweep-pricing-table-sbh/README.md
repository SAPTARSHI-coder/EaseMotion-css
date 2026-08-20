# ease-shimmer-sweep-pricing-table

A SaaS pricing table whose selected plan gets a sweeping shimmer highlight band that travels diagonally across the card on a loop, plus an accent glow. Pure CSS — selection is driven by hidden radio inputs, so no JavaScript is required for the animation.

## What does this do?

Adds a **shimmer-sweep pricing table**: glassmorphism pricing cards. When a plan is selected (via click or keyboard focus on its `<label>`), a translucent diagonal highlight band sweeps across the card (`@keyframes ssp-shimmer`: `background-position` `180% → -80%` with an `opacity` fade-in/out) on an infinite loop, plus an accent-tinted background gradient and a colored `box-shadow` glow. Includes a "Recommended" badge on the Pro plan.

## How is it used?

1. Place N hidden `<input type="radio" class="plan-toggle">` (sharing one `name`) before the plan labels.
2. Each `.plan` is a `<label for="...">` pointing at its radio, and contains a `.plan__shimmer` span (the band). The CSS `:checked ~ .plan:nth-of-type(N)` rules glow the selected plan and animate its shimmer band.

```html
<link rel="stylesheet" href="style.css" />

<input type="radio" name="ssp" id="ssp-1" class="plan-toggle" checked aria-hidden="true" />
<input type="radio" name="ssp" id="ssp-2" class="plan-toggle" aria-hidden="true" />
<input type="radio" name="ssp" id="ssp-3" class="plan-toggle" aria-hidden="true" />

<label for="ssp-1" class="plan" tabindex="0" aria-label="Starter plan, $9 per month">
  <span class="plan__shimmer" aria-hidden="true"></span>
  <span class="plan__name">Starter</span>
  <span class="plan__price"><span class="plan__cur">$</span>9<span class="plan__per">/mo</span></span>
  <ul class="plan__features">…</ul>
</label>
<label for="ssp-2" class="plan" tabindex="0" aria-label="Pro plan, $29 per month, recommended">
  <span class="plan__shimmer" aria-hidden="true"></span>
  <span class="plan__badge">Recommended</span>
  …
</label>
<label for="ssp-3" class="plan" tabindex="0" aria-label="Enterprise plan, custom pricing">…</label>
```

## Why is this useful?

- **Animation-first** — the signature motion is the shimmer-sweep: `@keyframes ssp-shimmer` drives `background-position` (`180% → -80%`) of a translucent diagonal highlight band with an `opacity` fade-in/out, on the selected plan. All via `background-position`/`opacity`/`box-shadow`.
- **Glassmorphism aesthetic** — plans are frosted panels via `backdrop-filter: blur()`; the selected plan's glow is an accent halo; the shimmer band is a translucent white sweep.
- **Accessible** — plans are focusable labels (`tabindex="0"`) with descriptive `aria-label`s (including price and the "recommended" note); the shimmer band is `aria-hidden="true"`; `:focus-visible` shows a ring; selection works via click or keyboard. Full `prefers-reduced-motion` support (no shimmer; no glow transition).
- **Reusable** — configurable via CSS custom properties (`--shimmer-duration`, `--shimmer-ease`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS selection and animation, no JS. SaaS-themed pricing content.
- `style.css` — glassmorphism pricing cards, shimmer-sweep via radio `:checked ~`, "Recommended" badge, feature bullets, focus-visible states, responsive grid, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
