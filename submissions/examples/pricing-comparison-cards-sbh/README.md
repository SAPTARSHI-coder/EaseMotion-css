# pricing-comparison-cards

A three-tier pricing card matrix with smooth pop-up scale transitions on hover and prominent glowing purchase buttons. The featured plan is pre-elevated above the rest; every card lifts and softens its shadow on hover. Pure CSS.

## What does this do?

- **Responsive grid** of pricing cards (`auto-fit, minmax(15rem, 1fr)`) that collapses gracefully on small screens.
- **Featured plan pops up by default** — `translateY(-1rem) scale(1.05)` with a gradient border ring and elevated shadow, plus a floating "Most popular" badge.
- **Hover pop-up transition** — every card `translateY` + `scale` up with a softer, accent-tinted shadow (`cubic-bezier(0.22, 1, 0.36, 1)`).
- **Glowing primary CTA** — the Pro plan's button is a gradient with a layered `box-shadow` glow that intensifies (brighter, larger radius) on hover.
- Checkmark feature bullets, price with currency/per-month superscripts.

## How is it used?

1. Link the stylesheet.
2. Use the markup below. Add `card--featured` to the plan you want elevated; put `btn--primary` on its CTA for the glow.

```html
<link rel="stylesheet" href="style.css" />

<section class="pricing">
  <article class="card">
    <h2 class="card__name">Starter</h2>
    <p class="card__blurb">For side projects.</p>
    <div class="card__price"><span class="card__cur">$</span>0<span class="card__per">/mo</span></div>
    <ul class="card__features"><li>1 project</li><li>Community support</li></ul>
    <button class="btn">Get started</button>
  </article>

  <article class="card card--featured">
    <span class="card__badge">Most popular</span>
    <h2 class="card__name">Pro</h2>
    <p class="card__blurb">For growing teams.</p>
    <div class="card__price"><span class="card__cur">$</span>24<span class="card__per">/mo</span></div>
    <ul class="card__features"><li>Unlimited projects</li><li>Priority support</li></ul>
    <button class="btn btn--primary">Buy Pro</button>
  </article>

  <article class="card">
    <h2 class="card__name">Enterprise</h2>
    <p class="card__blurb">For organizations.</p>
    <div class="card__price"><span class="card__cur">$</span>99<span class="card__per">/mo</span></div>
    <ul class="card__features"><li>Everything in Pro</li><li>SSO &amp; SAML</li></ul>
    <button class="btn">Contact sales</button>
  </article>
</section>
```

## Why is this useful?

- **Universal SaaS pattern** — pricing matrices appear on nearly every product landing page; this is a ready, polished reference.
- **Animation-first** — the pop-up scale + glowing CTA are exactly the "smooth transitions + glowing buttons" the issue requests, all in CSS (`transform`, `box-shadow`).
- **Accessible** — real `<button>`s and `<ul>` semantics; full `prefers-reduced-motion` support disables the elevations and glow scaling.
- **Reusable** — configurable via CSS custom properties (`--pc-accent`, `--pc-radius`, `--pc-shadow-up`, `--pc-dur`, etc.); `card--featured` and `btn--primary` modifiers opt into the elevated/glowing treatments.

## Files

- `demo.html` — self-contained showcase (open directly in a browser; no server, CDNs, or frameworks). Starter / Pro (featured) / Enterprise tiers.
- `style.css` — responsive grid, card base + hover pop-up, featured elevation + gradient ring + badge, checkmark bullets, primary CTA glow, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
