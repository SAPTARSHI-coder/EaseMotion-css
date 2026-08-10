# ease-rotate-fade-hero-section (SaaS Showcase)

A SaaS showcase hero section whose content (eyebrow, title, subtitle, actions) fades and rotates into view sequentially on load — each element starts tilted (`rotate(-3deg)`) and faded, settling upright and opaque. Pure CSS — no JavaScript is required for the animation.

## What does this do?

Adds a **rotate-fade hero section** for SaaS showcase layouts: a SaaS landing hero. On load, each content element fades in while rotating from a slight tilt (`-3deg`) to upright (`@keyframes rfh-in`: `opacity 0 → 1` + `translateY(10px → 0)` + `rotate(-3deg → 0deg)`), staggered by index. Includes a gradient backdrop, an accent eyebrow pill, a gradient-clipped title, and gradient + frosted buttons.

## How is it used?

1. Build a `.hero` section with a `.hero__bg` backdrop and a `.hero__content` block.
2. The CSS applies the rotate-fade entrance to the eyebrow, title, subtitle, and actions, staggered by `animation-delay`.

```html
<link rel="stylesheet" href="style.css" />

<section class="hero" aria-label="Product hero">
  <span class="hero__bg" aria-hidden="true"></span>
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

- **Animation-first** — the signature motion is the rotate-fade entrance: `@keyframes rfh-in` drives `opacity` (`0 → 1`) and `transform: translateY()` + `rotate()` (`-3deg → 0deg`), staggered by `animation-delay` so each element resolves in sequence. All via `opacity`/`transform`.
- **Glassmorphism aesthetic** — the ghost button is a frosted pill via `backdrop-filter: blur()`; the backdrop uses layered radial gradients; the title uses an accent gradient `background-clip: text`.
- **Accessible** — the hero is a labelled `<section>` (`aria-label`); the backdrop is `aria-hidden="true"`; buttons are real links with `:focus-visible` rings. Full `prefers-reduced-motion` support (content appears instantly with no rotate/fade).
- **Reusable** — configurable via CSS custom properties (`--in-duration`, `--in-ease`, `--stagger`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS animation, no JS. Reload to replay the entrance. SaaS-themed hero content.
- `style.css` — hero with gradient backdrop, staggered rotate-fade content entrance, gradient + frosted buttons, focus-visible states, reduced-motion rules.
- `README.md` — this documentation.

## Note on folder name

A `ease-rotate-fade-hero-section-sbh` submission already exists in the repo for a separate glassmorphism-themed issue (#64340, closed). This SaaS-showcase variant uses the `-saas-sbh` folder suffix to avoid a collision while clearly serving issue #62109.
