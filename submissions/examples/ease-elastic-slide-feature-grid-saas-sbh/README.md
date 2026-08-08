# ease-elastic-slide-feature-grid (SaaS Showcase)

A SaaS showcase feature grid whose cards slide into view with an elastic spring (overshoot easing) sequentially on load. Pure CSS — no JavaScript is required for the animation.

## What does this do?

Adds an **elastic-slide feature grid** for SaaS showcase layouts: glassmorphism feature cards. On load, each card starts below its final position and slides up with an elastic overshoot spring (`@keyframes esfg-slide`: `opacity 0 → 1` + `translateY(36px → 0)` using `cubic-bezier(0.34, 1.56, 0.64, 1)` so it overshoots past rest and settles), staggered by its index (`--i`) so cards spring in one after another. Hover or keyboard focus lifts the card further with an accent ring.

## How is it used?

1. Build a `.grid` of `.card` articles, each carrying its index via `style="--i: N"` (0-based) to drive the stagger.
2. Cards are focusable (`tabindex="0"`) with descriptive `aria-label`s.

```html
<link rel="stylesheet" href="style.css" />

<section class="grid" aria-label="SaaS features">
  <article class="card" style="--i: 0" tabindex="0" aria-label="Feature: Scalable infrastructure">
    <span class="card__emoji" aria-hidden="true">🚀</span>
    <h2 class="card__title">Scalable Infrastructure</h2>
    <p class="card__desc">Auto-scales to millions of requests with zero downtime deploys.</p>
  </article>
  …
</section>
```

## Why is this useful?

- **Animation-first** — the signature motion is the elastic slide-in: `@keyframes esfg-slide` drives `opacity` (`0 → 1`) and `transform: translateY()` (`36px → 0`) with an overshoot easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`) so each card springs past rest and settles, delayed by `calc(var(--stagger) * var(--i))`. Hover/focus adds a `transform`/`box-shadow` lift. All via `opacity`/`transform`/`box-shadow`.
- **Glassmorphism aesthetic** — cards are frosted panels via `backdrop-filter: blur()`; the hover adds an accent-tinted ring.
- **Accessible** — cards are focusable (`tabindex="0"`) with descriptive `aria-label`s; `:focus-visible` shows a ring; the emoji is `aria-hidden`. Full `prefers-reduced-motion` support (cards appear instantly with no slide).
- **Reusable** — configurable via CSS custom properties (`--slide-duration`, `--elastic-ease`, `--stagger`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS animation, no JS. Reload to replay the entrance. SaaS-themed feature content.
- `style.css` — glassmorphism cards, elastic slide-in keyframes with overshoot easing, hover/focus lift, focus-visible states, responsive grid, reduced-motion rules.
- `README.md` — this documentation.

## Note on folder name

A `ease-elastic-slide-feature-grid-sbh` submission already exists in the repo for a separate glassmorphism-themed issue (#64373, closed). This SaaS-showcase variant uses the `-saas-sbh` folder suffix to avoid a collision while clearly serving issue #62142.
