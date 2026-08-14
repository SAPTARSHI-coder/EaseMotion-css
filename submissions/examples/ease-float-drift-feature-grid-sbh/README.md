# ease-float-drift-feature-grid

A SaaS showcase feature grid whose cards float and drift gently while idle (a staggered vertical + rotational bob), settling flat and lifting on hover or focus. Pure CSS — no JavaScript is required for the animation.

## What does this do?

Adds a **float-drift feature grid**: glassmorphism feature cards. While idle, each card drifts on a loop (`@keyframes fdg-drift`: `translateY` + a slight `rotate`), staggered by its index (via negative `animation-delay`) so they bob out of sync. On hover or keyboard focus, the drift pauses and the card settles flat and lifts (`translateY(-6px) scale(1.03)`) with an accent ring.

## How is it used?

1. Build a `.grid` of `.card` articles (with `tabindex="0"` and an `aria-label`).
2. The CSS applies the drift loop to every card and staggers them via `nth-child` delays.

```html
<link rel="stylesheet" href="style.css" />

<section class="grid" aria-label="Features">
  <article class="card" tabindex="0" aria-label="Feature: Scalable infrastructure">
    <span class="card__emoji" aria-hidden="true">🚀</span>
    <h2 class="card__title">Scalable Infrastructure</h2>
    <p class="card__desc">Auto-scales to millions of requests with zero downtime deploys.</p>
  </article>
  …
</section>
```

## Why is this useful?

- **Animation-first** — the signature motion is the float-drift: `@keyframes fdg-drift` drives `transform: translateY()` + `rotate()` on a loop, staggered by `nth-child` negative `animation-delay` so cards bob out of sync. On hover/focus, `animation-play-state: paused` halts the drift and a `transform`/`box-shadow` transition lifts and settles the card. All via `transform`/`box-shadow`.
- **Glassmorphism aesthetic** — cards are frosted panels via `backdrop-filter: blur()`; the hover adds an accent-tinted ring.
- **Accessible** — cards are focusable (`tabindex="0"`) with descriptive `aria-label`s; `:focus-visible` triggers the settle/lift and shows a ring; the emoji is `aria-hidden`. Full `prefers-reduced-motion` support (no drift; hover/focus does not transform).
- **Reusable** — configurable via CSS custom properties (`--drift-duration`, `--drift-ease`, `--settle-duration`, `--settle-ease`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS animation, no JS. SaaS-themed feature content.
- `style.css` — glassmorphism cards, staggered float-drift loop, hover/focus settle + lift, focus-visible states, responsive grid, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
