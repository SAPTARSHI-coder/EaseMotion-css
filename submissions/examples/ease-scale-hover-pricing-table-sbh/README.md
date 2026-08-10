# ease-scale-hover-pricing-table

A SaaS pricing table whose cards scale up on hover or keyboard focus, and whose selected plan stays scaled up with an accent glow. Pure CSS — selection is driven by hidden radio inputs, so no JavaScript is required for the animation.

## What does this do?

Adds a **scale-hover pricing table**: glassmorphism pricing cards. Hovering or focusing a card scales it up (`transform: scale(1 → 1.05)`) with an accent ring; selecting a plan (via click or keyboard focus on its `<label>`) keeps it scaled up (`scale(1.08)`) with an accent-tinted background gradient and a colored `box-shadow` glow. Includes a "Recommended" badge on the Pro plan.

## How is it used?

1. Place N hidden `<input type="radio" class="plan-toggle">` (sharing one `name`) before the plan labels.
2. Each `.plan` is a `<label for="...">` pointing at its radio. The CSS `:hover`/`:focus-visible` scales any card; `:checked ~ .plan:nth-of-type(N)` keeps the selected plan scaled and glowing.

```html
<link rel="stylesheet" href="style.css" />

<input type="radio" name="shp" id="shp-1" class="plan-toggle" checked aria-hidden="true" />
<input type="radio" name="shp" id="shp-2" class="plan-toggle" aria-hidden="true" />
<input type="radio" name="shp" id="shp-3" class="plan-toggle" aria-hidden="true" />

<label for="shp-1" class="plan" tabindex="0" aria-label="Starter plan, $9 per month">
  <span class="plan__name">Starter</span>
  <span class="plan__price"><span class="plan__cur">$</span>9<span class="plan__per">/mo</span></span>
  <ul class="plan__features">…</ul>
</label>
<label for="shp-2" class="plan" tabindex="0" aria-label="Pro plan, $29 per month, recommended">
  <span class="plan__badge">Recommended</span>
  …
</label>
<label for="shp-3" class="plan" tabindex="0" aria-label="Enterprise plan, custom pricing">…</label>
```

## Why is this useful?

- **Animation-first** — the signature motion is the scale on hover/select: `transform: scale()` (`1 → 1.05` on hover/focus; `1.08` when selected) with a `box-shadow`/`border-color`/`background` transition. All via `transform`/`box-shadow`.
- **Glassmorphism aesthetic** — plans are frosted panels via `backdrop-filter: blur()`; the selected plan's glow is an accent halo.
- **Accessible** — plans are focusable labels (`tabindex="0"`) with descriptive `aria-label`s (including price and the "recommended" note); `:focus-visible` shows a ring and triggers the scale; selection works via click or keyboard. Full `prefers-reduced-motion` support (no scale transform).
- **Reusable** — configurable via CSS custom properties (`--scale-duration`, `--scale-ease`, `--scale-hover`, `--scale-selected`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS selection and animation, no JS. SaaS-themed pricing content.
- `style.css` — glassmorphism pricing cards, hover/focus scale + selected-plan scale/glow via radio `:checked ~`, "Recommended" badge, feature bullets, focus-visible states, responsive grid, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
