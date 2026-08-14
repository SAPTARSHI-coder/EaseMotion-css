# ease-ripple-wave-hero-section

A SaaS showcase hero section with concentric ripple-wave rings expanding outward from the center on a loop, and content (eyebrow, title, subtitle, actions) that fades and lifts into view sequentially on load. Pure CSS — no JavaScript is required for the animation.

## What does this do?

Adds a **ripple-wave hero section**: a SaaS landing hero. Behind the content, three concentric ripple rings (`@keyframes rwh-ripple`: `scale(0.4 → 8)` + `opacity 0 → 0.8 → 0`, staggered by `animation-delay`) expand outward from the center on an infinite loop, evoking radiating waves. The content fades and lifts in sequentially (`@keyframes rwh-in`: `opacity 0 → 1` + `translateY`, staggered by index). Includes gradient buttons and a frosted ghost button.

## How is it used?

1. Build a `.hero` section with a `.hero__bg` backdrop, three `.hero__ripple` spans (the rings), and a `.hero__content` block.
2. The CSS animates the rings on a loop and staggers the content fade-in.

```html
<link rel="stylesheet" href="style.css" />

<section class="hero" aria-label="Product hero">
  <span class="hero__bg" aria-hidden="true"></span>
  <span class="hero__ripple hero__ripple--1" aria-hidden="true"></span>
  <span class="hero__ripple hero__ripple--2" aria-hidden="true"></span>
  <span class="hero__ripple hero__ripple--3" aria-hidden="true"></span>

  <div class="hero__content">
    <span class="hero__eyebrow">Now in general availability</span>
    <h1 class="hero__title">Ship reliable software, faster.</h1>
    <p class="hero__subtitle">…</p>
    <div class="hero__actions">
      <a class="hero__btn hero__btn--primary" href="#" tabindex="0">Start free trial</a>
      <a class="hero__btn hero__btn--ghost" href="#" tabindex="0">Book a demo</a>
    </div>
  </div>
</section>
```

## Why is this useful?

- **Animation-first** — the signature motion is the ripple-wave: `@keyframes rwh-ripple` drives `transform: scale()` (`0.4 → 8`) and `opacity` (`0 → 0.8 → 0`) on three rings staggered by `animation-delay` so waves radiate continuously. Content fades and lifts in via `@keyframes rwh-in` (`opacity` + `translateY`), staggered by index. All via `transform`/`opacity`.
- **Glassmorphism aesthetic** — the ghost button is a frosted pill via `backdrop-filter: blur()`; the backdrop uses layered radial gradients; the title uses an accent gradient `background-clip: text`.
- **Accessible** — the hero is a labelled `<section>` (`aria-label`); decorative rings and backdrop are `aria-hidden="true"`; buttons are real links with `:focus-visible` rings. Full `prefers-reduced-motion` support (no ripples; content appears instantly).
- **Reusable** — configurable via CSS custom properties (`--ripple-duration`, `--ripple-ease`, `--content-duration`, `--content-ease`, `--stagger`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS animation, no JS. SaaS-themed hero content.
- `style.css` — hero with gradient backdrop, concentric ripple-wave rings, staggered content fade-in, gradient + frosted buttons, focus-visible states, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
