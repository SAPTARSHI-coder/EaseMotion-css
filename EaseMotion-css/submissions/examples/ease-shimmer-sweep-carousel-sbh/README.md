# ease-shimmer-sweep-carousel

A carousel whose track slides to the active slide, then a translucent diagonal shimmer band sweeps once across the active slide as it lands. Pure CSS — navigation is driven by hidden radio inputs, so no JavaScript is required for the animation.

## What does this do?

Adds a **shimmer-sweep-carousel**: a glassmorphism carousel. When you select a slide (via dot navigation), the track slides horizontally (`transform: translateX`) to bring the active slide into view, and `@keyframes ssc-shimmer` sweeps a translucent diagonal highlight band across the active slide (`background-position` `180% → -80%`, fading in and out) once it has landed.

## How is it used?

1. Place N hidden `<input type="radio" class="slide-toggle">` (sharing one `name`) before the viewport and nav.
2. Each `.dot` is a `<label for="...">` pointing at its radio. The CSS `:checked ~` rules translate the track to the active slide and replay the shimmer on the active slide.

```html
<link rel="stylesheet" href="style.css" />

<input type="radio" name="ssc" id="ssc-1" class="slide-toggle" checked aria-hidden="true" />
<input type="radio" name="ssc" id="ssc-2" class="slide-toggle" aria-hidden="true" />
<input type="radio" name="ssc" id="ssc-3" class="slide-toggle" aria-hidden="true" />

<div class="carousel__viewport" aria-live="polite">
  <ul class="carousel__track">
    <li class="slide" role="group" aria-roledescription="slide" aria-label="1 of 3">…</li>
    <li class="slide" role="group" aria-roledescription="slide" aria-label="2 of 3">…</li>
    <li class="slide" role="group" aria-roledescription="slide" aria-label="3 of 3">…</li>
  </ul>
</div>

<div class="carousel__nav">
  <label for="ssc-1" class="dot" tabindex="0" aria-label="Go to slide 1"></label>
  <label for="ssc-2" class="dot" tabindex="0" aria-label="Go to slide 2"></label>
  <label for="ssc-3" class="dot" tabindex="0" aria-label="Go to slide 3"></label>
</div>
```

## Why is this useful?

- **Animation-first** — the signature motion is twofold: the track slides to the active slide (`transform: translateX` via `:checked ~`), then `@keyframes ssc-shimmer` sweeps a translucent diagonal band across the active slide via `background-position` (`180% → -80%`) with an `opacity` fade-in/out, delayed until the slide has landed. All via `transform`/`background-position`/`opacity`.
- **Glassmorphism aesthetic** — the viewport is a frosted panel via `backdrop-filter: blur()`; the shimmer is an overlay-blended highlight.
- **Accessible** — carousel semantics (`aria-roledescription="carousel"` + `aria-label`), slides with `role="group"`/`aria-roledescription="slide"`/`aria-label="N of M"`, `aria-live="polite"` viewport so slide changes are announced. Dots are focusable labels with `aria-label`s and `:focus-visible` rings. Full `prefers-reduced-motion` support (track snaps; no shimmer).
- **Reusable** — configurable via CSS custom properties (`--slide-duration`, `--slide-ease`, `--shimmer-duration`, `--shimmer-ease`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS navigation and animation, no JS.
- `style.css` — glassmorphism carousel, track slide + shimmer-sweep via radio `:checked ~`, dot navigation with active state, focus-visible states, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
