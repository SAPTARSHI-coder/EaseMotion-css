# ease-skew-active-pricing

A glassmorphism pricing table whose cards skew (tilt) when active — hovered or keyboard-focused — for a tactile, playful feel.

## What does this do?

Adds a **skew-active pricing table**: each frosted-glass plan card tilts slightly (`skewX(-4deg)`) and lifts up when hovered or focused, then snaps back when inactive. The skew is GPU-only (`transform`), so it stays smooth. The featured plan is scaled up and violet-tinted, and its active state combines skew + scale.

## How is it used?

1. Build a `.table` grid of `.plan` cards.
2. Mark the featured plan with `plan--featured` and add a `.plan__badge`.
3. Add `tabindex="0"` so cards are keyboard-focusable (focus triggers the same skew as hover).
4. Tune the skew angle via the `--skew-angle` custom property.

```html
<link rel="stylesheet" href="style.css" />

<section class="table" aria-label="Pricing plans">
  <article class="plan" tabindex="0">
    <h2 class="plan__name">Bronze</h2>
    <p class="plan__price"><span class="plan__cur">$</span>8<span class="plan__per">/mo</span></p>
    <ul class="plan__features"><li>1 project</li><li>Community support</li></ul>
    <button type="button" class="plan__cta">Choose Bronze</button>
  </article>
  <!-- more plans; mark one plan--featured -->
</section>
```

## Why is this useful?

- **Animation-first** — the signature motion is a `transform: skewX()` transition on hover/focus, combined with a synchronized `translateY` lift and border/shadow shift. Pure `transform`/opacity only, so it's GPU-accelerated.
- **Glassmorphism aesthetic** — frosted cards via `backdrop-filter: blur()`; the featured card gets a violet-tinted gradient accent.
- **Accessible** — `tabindex="0"` + `aria-label` on the featured plan, `:focus-visible` triggers the same skew + lift as hover, and full `prefers-reduced-motion` support (skew disabled when requested).
- **Reusable** — configurable via CSS custom properties (`--skew-angle`, `--skew-duration`, `--skew-ease`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — glassmorphism plans, skew-active transition, hover/focus skew + lift, featured styling, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
