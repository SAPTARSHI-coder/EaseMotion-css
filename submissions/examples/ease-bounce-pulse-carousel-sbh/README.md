# ease-bounce-pulse-carousel

A carousel whose track bounces to the active slide (overshoot easing), and whose active slide bounces in (`scale` + `opacity`) then pulses a gentle scale breathing while active. Pure CSS — navigation is driven by hidden radio inputs, so no JavaScript is required for the animation.

## What does this do?

Adds a **bounce-pulse-carousel**: a glassmorphism carousel. When you select a slide (via dot navigation), the track translates to the active slide using an overshoot easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`) so it springs past rest and settles; the active slide bounces in (`@keyframes bpc-bounce`: `scale(0.9 → 1)` + `opacity 0.4 → 1`) and then pulses a gentle scale (`@keyframes bpc-pulse`: `scale(1 → 1.015 → 1)`) while active.

## How is it used?

1. Place N hidden `<input type="radio" class="slide-toggle">` (sharing one `name`) before the viewport and nav.
2. Each `.dot` is a `<label for="...">` pointing at its radio. The CSS `:checked ~` rules translate the track and apply the bounce/pulse to the active slide.

```html
<link rel="stylesheet" href="style.css" />

<input type="radio" name="bpc" id="bpc-1" class="slide-toggle" checked aria-hidden="true" />
<input type="radio" name="bpc" id="bpc-2" class="slide-toggle" aria-hidden="true" />
<input type="radio" name="bpc" id="bpc-3" class="slide-toggle" aria-hidden="true" />

<div class="carousel__viewport" aria-live="polite">
  <ul class="carousel__track">
    <li class="slide" role="group" aria-roledescription="slide" aria-label="1 of 3">…</li>
    <li class="slide" role="group" aria-roledescription="slide" aria-label="2 of 3">…</li>
    <li class="slide" role="group" aria-roledescription="slide" aria-label="3 of 3">…</li>
  </ul>
</div>

<div class="carousel__nav">
  <label for="bpc-1" class="dot" tabindex="0" aria-label="Go to slide 1"></label>
  <label for="bpc-2" class="dot" tabindex="0" aria-label="Go to slide 2"></label>
  <label for="bpc-3" class="dot" tabindex="0" aria-label="Go to slide 3"></label>
</div>
```

## Why is this useful?

- **Animation-first** — the signature motion is the bounce + pulse: the track translates with an overshoot easing, then the active slide bounces in (`@keyframes bpc-bounce`: `transform: scale()` + `opacity`) and pulses (`@keyframes bpc-pulse`: `transform: scale()`), delayed until the slide has landed. All via `transform`/`opacity`.
- **Glassmorphism aesthetic** — the viewport is a frosted panel via `backdrop-filter: blur()`; the pulse is a subtle scale breathing.
- **Accessible** — carousel semantics (`aria-roledescription="carousel"` + `aria-label`), slides with `role="group"`/`aria-roledescription="slide"`/`aria-label="N of M"`, `aria-live="polite"` viewport. Dots are focusable labels with `aria-label`s and `:focus-visible` rings. Full `prefers-reduced-motion` support (track snaps; no bounce/pulse).
- **Reusable** — configurable via CSS custom properties (`--slide-duration`, `--bounce-ease`, `--pulse-duration`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS navigation and animation, no JS.
- `style.css` — glassmorphism carousel, track bounce + slide bounce/pulse via radio `:checked ~`, dot navigation with active state, focus-visible states, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
