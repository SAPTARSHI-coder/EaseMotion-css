# ease-glitch-flicker-hero-section

A glassmorphism hero section with a glitch-flicker headline — the title RGB-splits and flickers on load, then settles into a steady state with occasional twitches. A scanline overlay completes the retro-terminal feel.

## What does this do?

Adds a **glitch-flicker hero section**: a frosted-glass hero panel. The headline uses `::before`/`::after` pseudo-elements cloned from `data-text` to create red/cyan RGB-split copies that jitter into place on load (stepped keyframes for a digital glitch), then settle and occasionally twitch on an infinite loop. The eyebrow badge flickers, and a subtle scanline texture overlays the panel.

## How is it used?

1. Build a `.hero` section. The `.hero__title` must carry a `data-text` attribute equal to its visible text — the pseudo-elements read it to render the RGB-split clones.
2. Keep the visible text in a `.hero__title-main` span so only the pseudo-elements animate.

```html
<link rel="stylesheet" href="style.css" />

<section class="hero" aria-label="Hero">
  <span class="hero__eyebrow">SYSTEM ONLINE</span>
  <h1 class="hero__title" data-text="BUILD THE FUTURE">
    <span class="hero__title-main">BUILD THE FUTURE</span>
  </h1>
  <p class="hero__lead">A glassmorphism hero with a glitch-flicker headline…</p>
  <div class="hero__actions">
    <a class="hero__cta" href="#start">Initialize</a>
    <a class="hero__cta hero__cta--ghost" href="#docs">View manifest</a>
  </div>
</section>
```

## Why is this useful?

- **Animation-first** — the signature motion is two-layer glitch: `@keyframes gf-glitch-r`/`gf-glitch-b` run a stepped (`steps(8, end)`) intro that RGB-splits and jitters the headline into place, followed by `@keyframes gf-twitch-r`/`gf-twitch-b` infinite loops that fire brief twitches. The eyebrow runs `gf-flicker` for an intermittent opacity blink. All via `transform`/`opacity`/`clip-path`.
- **Glassmorphism aesthetic** — frosted panel via `backdrop-filter: blur()` with a repeating scanline overlay.
- **Accessible** — the visible `.hero__title-main` carries the real text for screen readers; the pseudo-element clones are decorative. `tabindex` + `:focus-visible` rings on CTAs, and full `prefers-reduced-motion` support (glitch/flicker disabled; clones shown as a static, low-opacity RGB split).
- **Reusable** — configurable via CSS custom properties (`--gf-intro-duration`, `--gf-twitch-duration`, `--glitch-r`, `--glitch-b`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — glassmorphism hero, RGB-split glitch keyframes (intro + twitch), eyebrow flicker, scanline overlay, CTA states, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
