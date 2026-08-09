# ease-bounce-pulse-pricing-table

A SaaS pricing table whose selected plan bounces in with an elastic spring (overshoot scale) then pulses a gentle scale breathing while active, with an accent glow. Pure CSS — selection is driven by hidden radio inputs, so no JavaScript is required for the animation.

## What does this do?

Adds a **bounce-pulse pricing table**: glassmorphism pricing cards. When a plan is selected (via click or keyboard focus on its `<label>`), it bounces in (`@keyframes bpp-bounce`: `scale(0.92 → 1.03)` with an overshoot easing) and then pulses a gentle scale (`@keyframes bpp-pulse`: `scale(1.03 → 1.05 → 1.03)`), delayed until the bounce has settled, plus an accent-tinted background gradient and a colored `box-shadow` glow. Includes a "Recommended" badge on the Pro plan.

## How is it used?

1. Place N hidden `<input type="radio" class="plan-toggle">` (sharing one `name`) before the plan labels.
2. Each `.plan` is a `<label for="...">` pointing at its radio. The CSS `:checked ~ .plan:nth-of-type(N)` rules bounce/pulse/glow the selected plan.

```html
<link rel="stylesheet" href="style.css" />

<input type="radio" name="bpp" id="bpp-1" class="plan-toggle" checked aria-hidden="true" />
<input type="radio" name="bpp" id="bpp-2" class="plan-toggle" aria-hidden="true" />
<input type="radio" name="bpp" id="bpp-3" class="plan-toggle" aria-hidden="true" />

<label for="bpp-1" class="plan" tabindex="0" aria-label="Starter plan, $9 per month">
  <span class="plan__name">Starter</span>
  <span class="plan__price"><span class="plan__cur">$</span>9<span class="plan__per">/mo</span></span>
  <ul class="plan__features">…</ul>
</label>
<label for="bpp-2" class="plan" tabindex="0" aria-label="Pro plan, $29 per month, recommended">
  <span class="plan__badge">Recommended</span>
  …
</label>
<label for="bpp-3" class="plan" tabindex="0" aria-label="Enterprise plan, custom pricing">…</label>
```

## Why is this useful?

- **Animation-first** — the signature motion is the bounce + pulse: the selected plan bounces in (`@keyframes bpp-bounce`: `transform: scale()` with an overshoot easing) and then pulses a gentle scale (`@keyframes bpp-pulse`: `transform: scale()`), delayed until the bounce settles, plus an accent glow (`box-shadow` + background gradient). All via `transform`/`box-shadow`.
- **Glassmorphism aesthetic** — plans are frosted panels via `backdrop-filter: blur()`; the selected plan's glow is an accent halo.
- **Accessible** — plans are focusable labels (`tabindex="0"`) with descriptive `aria-label`s (including price and the "recommended" note); `:focus-visible` shows a ring; selection works via click or keyboard. Full `prefers-reduced-motion` support (no bounce/pulse; no transform).
- **Reusable** — configurable via CSS custom properties (`--bounce-duration`, `--bounce-ease`, `--pulse-duration`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS selection and animation, no JS. SaaS-themed pricing content.
- `style.css` — glassmorphism pricing cards, bounce-in + pulse via radio `:checked ~`, "Recommended" badge, feature bullets, focus-visible states, responsive grid, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
