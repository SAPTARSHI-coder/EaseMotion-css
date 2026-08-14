# ease-fade-in-feature-grid (SaaS Showcase)

A SaaS showcase feature grid whose cards fade and lift into view sequentially on load (staggered fade-in entrance). Pure CSS — no JavaScript is required for the animation.

## What does this do?

Adds a **fade-in feature grid** for SaaS showcase layouts: glassmorphism feature cards. On load, each card starts faded and slightly lifted, then fades in with a gentle upward lift (`@keyframes fig-fade`: `opacity 0 → 1` + `translateY(16px → 0)`), staggered by its index (`--i`) so cards resolve one after another. Hover or keyboard focus lifts the card further with an accent ring.

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

- **Animation-first** — the signature motion is the staggered fade-in: `@keyframes fig-fade` drives `opacity` (`0 → 1`) and `transform: translateY()` (`16px → 0`), delayed by `calc(var(--stagger) * var(--i))` so each card resolves in sequence. Hover/focus adds a `transform`/`box-shadow` lift. All via `opacity`/`transform`/`box-shadow`.
- **Glassmorphism aesthetic** — cards are frosted panels via `backdrop-filter: blur()`; the hover adds an accent-tinted ring.
- **Accessible** — cards are focusable (`tabindex="0"`) with descriptive `aria-label`s; `:focus-visible` shows a ring; the emoji is `aria-hidden`. Full `prefers-reduced-motion` support (cards appear instantly with no stagger).
- **Reusable** — configurable via CSS custom properties (`--fade-duration`, `--fade-ease`, `--stagger`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS animation, no JS. Reload to replay the entrance. SaaS-themed feature content.
- `style.css` — glassmorphism cards, staggered fade-in + lift keyframes, hover/focus lift, focus-visible states, responsive grid, reduced-motion rules.
- `README.md` — this documentation.

## Note on folder name

A `ease-fade-in-feature-grid-sbh` submission already exists in the repo for a separate glassmorphism-themed issue (#64365, closed). This SaaS-showcase variant uses the `-saas-sbh` folder suffix to avoid a collision while clearly serving issue #62134.
