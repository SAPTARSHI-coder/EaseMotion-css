# ease-shimmer-sweep-hero-section

A glassmorphism hero section whose headline sweeps a diagonal shimmer across its letters on a loop, like light passing over polished glass. A matching sheen also sweeps across the whole panel.

## What does this do?

Adds a **shimmer-sweep hero section**: a frosted-glass hero panel. The headline uses a `background-clip: text` gradient with a bright sheen band that travels left-to-right across the letters on an infinite loop. A separate, fainter diagonal sheen sweeps across the entire panel in sync, reinforcing the "light passing over glass" feel.

## How is it used?

1. Build a `.hero` section with a `.hero__title`. The title's text is the visible content; the shimmer is applied via a `background-clip: text` gradient, so no extra markup is required.
2. Tune the loop via the `--shimmer-duration` custom property.

```html
<link rel="stylesheet" href="style.css" />

<section class="hero" aria-label="Hero">
  <span class="hero__eyebrow">Shimmer · v2.4</span>
  <h1 class="hero__title">Motion that glows.</h1>
  <p class="hero__lead">A glassmorphism hero whose headline sweeps a shimmer…</p>
  <div class="hero__actions">
    <a class="hero__cta" href="#start">Get started</a>
    <a class="hero__cta hero__cta--ghost" href="#docs">Read the docs</a>
  </div>
</section>
```

## Why is this useful?

- **Animation-first** — the signature motion is two synced shimmer sweeps: `@keyframes sh-text` animates a `background-position` on a `background-clip: text` gradient (a bright sheen band moving across the letters), while `@keyframes sh-sweep` animates a faint diagonal `linear-gradient` sheen across the whole panel. Both loop infinitely with a shared `--shimmer-duration`.
- **Glassmorphism aesthetic** — frosted panel via `backdrop-filter: blur()`; the sweeping sheen reads as light glancing off the glass.
- **Accessible** — `aria-label` on the hero, `tabindex` + `:focus-visible` rings on CTAs, and full `prefers-reduced-motion` support (shimmer disabled; headline falls back to a static gradient).
- **Reusable** — configurable via CSS custom properties (`--shimmer-duration`, `--shimmer-ease`, `--shimmer-delay`, `--sheen`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — glassmorphism hero, text + panel shimmer-sweep keyframes, CTA states, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
