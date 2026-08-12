# Shimmer-Sweep Pricing Table

## What does this do?
A 3-tier pricing table where the featured plan is a dark card with a "Recommended" ribbon that shimmers on a slow ambient loop, plus a light sweep across the whole card surface while it's hovered or keyboard-focused.

## How is it used?
Add the `ease-pricing-shimmer-vt` class to the plan card you want to feature, and include the ribbon and shine elements as its first two children:

```html
<article class="ease-pricing-shimmer-vt pricing-card pricing-card--featured">
  <span class="ease-pricing-shimmer-vt__ribbon">Recommended</span>
  <span class="ease-pricing-shimmer-vt__shine" aria-hidden="true"></span>

  <h2 class="pricing-card__name">Pro</h2>
  <p class="pricing-card__price">
    <span class="pricing-card__amount">$24</span>
    <span class="pricing-card__period">/ month</span>
  </p>
  <!-- description, feature list, CTA -->
</article>
```

Regular (non-featured) cards only need the shared `pricing-card` classes — see `demo.html` for the full 3-card layout.

## CSS custom properties

| Property | Default | Controls |
|---|---|---|
| `--shimmer-band-color` | `rgba(255,255,255,0.45)` | Color/opacity of the light band |
| `--shimmer-hover-duration` | `650ms` | Length of the hover sweep across the card |
| `--shimmer-hover-easing` | `ease-out` | Easing for the hover sweep |
| `--shimmer-loop-duration` | `3600ms` | Length of one ambient ribbon sweep + pause cycle |
| `--pt-accent` | `#4A55E0` | CTA and shimmer tint color |
| `--pt-ink` | `#14161C` | Featured card background |

## Features
- **Two shimmer layers, two techniques** — the ribbon uses an infinite `@keyframes` loop (sweep, then pause, repeat); the full-card shine uses a `transition` on `transform` that's driven purely by `:hover` / `:focus-within`, so it plays once and settles back the moment focus leaves.
- **Performant** — both shimmer bands are pseudo-elements animated only on `transform` and `opacity`; nothing triggers layout or repaint.
- **Keyboard accessible** — the card-wide sweep also responds to `:focus-within`, so tabbing to the CTA inside the featured card triggers the same effect as hovering it.
- **Fully responsive** — the grid uses `auto-fit`/`minmax`, so it reflows from 3 columns down to 1 with no manual breakpoints beyond a mobile safety rule that also removes the featured card's `scale(1.035)` lift.
- **`prefers-reduced-motion` support** — both shimmer animations are disabled; the ribbon and card remain fully visible with no motion.

## Why it's useful
Pricing tables are one of the highest-attention areas of a marketing site, and a restrained shimmer is a common way premium products draw the eye to a recommended plan without shouting. Keeping it to two small, independently-tunable pseudo-elements — rather than animating the whole page — fits EaseMotion's philosophy of small, token-driven motion that a site can restyle or disable by overriding a couple of custom properties.
