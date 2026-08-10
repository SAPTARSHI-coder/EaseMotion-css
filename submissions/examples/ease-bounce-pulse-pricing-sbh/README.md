# ease-bounce-pulse-pricing

A glassmorphism pricing table where the featured plan bounces in on load and continuously pulses its glow to draw attention.

## What does this do?

Adds a **bounce-pulse pricing table**: three frosted-glass plan cards. The featured ("Pro") plan scales up slightly, bounces in with a spring overshoot on page load, and then softly pulses its box-shadow glow forever after — making it the visual focal point.

## How is it used?

1. Build a `.table` grid of `.plan` cards.
2. Mark the featured plan with `plan--featured`; add a `.plan__badge` for the "Most popular" tag.
3. Each plan holds name, price, feature list, and CTA button.

```html
<link rel="stylesheet" href="style.css" />

<section class="table" aria-label="Pricing plans">
  <article class="plan plan--featured" tabindex="0">
    <span class="plan__badge">Most popular</span>
    <h2 class="plan__name">Pro</h2>
    <p class="plan__price"><span class="plan__cur">$</span>29<span class="plan__per">/mo</span></p>
    <ul class="plan__features"><li>Unlimited projects</li><li>Priority support</li></ul>
    <button type="button" class="plan__cta plan__cta--featured">Choose Pro</button>
  </article>
  <!-- more plans -->
</section>
```

## Why is this useful?

- **Animation-first** — two layered motions: `@keyframes bp-bounce` uses a spring `cubic-bezier(0.34, 1.56, 0.64, 1)` for the entrance overshoot; `@keyframes bp-pulse` gently breathes the glow `box-shadow` on a loop.
- **Glassmorphism aesthetic** — frosted cards via `backdrop-filter: blur()`; the featured card gets a tinted gradient accent.
- **Accessible** — `tabindex="0"` + `aria-label` on the featured plan, `:focus-visible` outlines on cards and CTAs, and full `prefers-reduced-motion` support (bounce and pulse both disabled when requested).
- **Reusable** — configurable via CSS custom properties (`--bp-bounce-duration`, `--bp-pulse-duration`, `--bp-ease`, `--glass-blur`, color tokens).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — glassmorphism plans, bounce + pulse keyframes, featured styling, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
