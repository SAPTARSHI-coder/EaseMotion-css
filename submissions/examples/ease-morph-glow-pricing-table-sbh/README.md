# ease-morph-glow-pricing-table

A SaaS pricing table whose selected plan morphs (border-radius + scale) and glows. Pure CSS — selection is driven by hidden radio inputs, so no JavaScript is required for the animation.

## What does this do?

Adds a **morph-glow pricing table**: glassmorphism pricing cards. When a plan is selected (via click or keyboard focus on its `<label>`), it morphs (`border-radius` `1rem → 1.6rem` + `transform: scale(1 → 1.05)`) and glows (an accent-tinted background gradient + a soft colored `box-shadow` halo), with a "Recommended" badge on the Pro plan.

## How is it used?

1. Place N hidden `<input type="radio" class="plan-toggle">` (sharing one `name`) before the plan labels.
2. Each `.plan` is a `<label for="...">` pointing at its radio. The CSS `:checked ~ .plan:nth-of-type(N)` rules morph and glow the selected plan.

```html
<link rel="stylesheet" href="style.css" />

<input type="radio" name="mgp" id="mgp-1" class="plan-toggle" checked aria-hidden="true" />
<input type="radio" name="mgp" id="mgp-2" class="plan-toggle" aria-hidden="true" />
<input type="radio" name="mgp" id="mgp-3" class="plan-toggle" aria-hidden="true" />

<label for="mgp-1" class="plan" tabindex="0" aria-label="Starter plan, $9 per month">
  <span class="plan__name">Starter</span>
  <span class="plan__price"><span class="plan__cur">$</span>9<span class="plan__per">/mo</span></span>
  <ul class="plan__features">…</ul>
</label>
<label for="mgp-2" class="plan" tabindex="0" aria-label="Pro plan, $29 per month, recommended">
  <span class="plan__badge">Recommended</span>
  …
</label>
<label for="mgp-3" class="plan" tabindex="0" aria-label="Enterprise plan, custom pricing">…</label>
```

## Why is this useful?

- **Animation-first** — the signature motion is the morph + glow: the selected plan transitions `border-radius` (`1rem → 1.6rem`) and `transform: scale()` (`1 → 1.05`) with an overshoot easing, plus a colored `box-shadow` halo and accent-tinted background gradient. All via `border-radius`/`transform`/`box-shadow`.
- **Glassmorphism aesthetic** — plans are frosted panels via `backdrop-filter: blur()`; the selected plan's glow is an accent halo.
- **Accessible** — plans are focusable labels (`tabindex="0"`) with descriptive `aria-label`s (including price and the "recommended" note); `:focus-visible` shows a ring; selection works via click or keyboard. Full `prefers-reduced-motion` support (morph snaps without transition).
- **Reusable** — configurable via CSS custom properties (`--morph-duration`, `--morph-ease`, `--glow-duration`, `--glow-ease`, `--selected-radius`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS selection and animation, no JS. SaaS-themed pricing content.
- `style.css` — glassmorphism pricing cards, morph + glow via radio `:checked ~`, "Recommended" badge, feature bullets, focus-visible states, responsive grid, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
