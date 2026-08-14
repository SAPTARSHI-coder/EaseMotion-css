# ease-zoom-in-hero-section

A SaaS showcase hero section whose content (eyebrow, title, subtitle, actions) zooms in — fading in while scaling up from `0.8` to `1` — sequentially on load. Pure CSS — no JavaScript is required for the animation.

## What does this do?

Adds a **zoom-in hero section** for SaaS showcase layouts: a SaaS landing hero. On load, each content element fades in while scaling up (`@keyframes zih-in`: `opacity 0 → 1` + `transform: scale(0.8 → 1)`), staggered by index. Includes a gradient backdrop, an accent eyebrow pill, a gradient-clipped title, and gradient + frosted buttons.

## How is it used?

1. Build a `.hero` section with a `.hero__bg` backdrop and a `.hero__content` block.
2. The CSS applies the zoom-in entrance to the eyebrow, title, subtitle, and actions, staggered by `animation-delay`.

```html
<link rel="stylesheet" href="style.css" />

<section class="hero" aria-label="Product hero">
  <span class="hero__bg" aria-hidden="true"></span>
  <div class="hero__content">
    <span class="hero__eyebrow">New · v3.0</span>
    <h1 class="hero__title">Data that moves at the speed of your team.</h1>
    <p class="hero__subtitle">…</p>
    <div class="hero__actions">
      <a class="hero__btn hero__btn--primary" href="#" tabindex="0">Start free trial</a>
      <a class="hero__btn hero__btn--ghost" href="#" tabindex="0">Watch demo</a>
    </div>
  </div>
</section>
```

## Why is this useful?

- **Animation-first** — the signature motion is the zoom-in entrance: `@keyframes zih-in` drives `opacity` (`0 → 1`) and `transform: scale()` (`0.8 → 1`), staggered by `animation-delay` so each element resolves in sequence. All via `opacity`/`transform`.
- **Glassmorphism aesthetic** — the ghost button is a frosted pill via `backdrop-filter: blur()`; the backdrop uses layered radial gradients; the title uses an accent gradient `background-clip: text`.
- **Accessible** — the hero is a labelled `<section>` (`aria-label`); the backdrop is `aria-hidden="true"`; buttons are real links with `:focus-visible` rings. Full `prefers-reduced-motion` support (content appears instantly with no zoom).
- **Reusable** — configurable via CSS custom properties (`--in-duration`, `--in-ease`, `--stagger`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS animation, no JS. Reload to replay the entrance. SaaS-themed hero content.
- `style.css` — hero with gradient backdrop, staggered zoom-in content entrance, gradient + frosted buttons, focus-visible states, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
