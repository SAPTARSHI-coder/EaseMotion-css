# ease-carousel-fade

A crossfading carousel — slides dissolve into one another on an automatic loop, with clickable dots for manual navigation.

## What does this do?

Adds a **carousel-fade**: a glassmorphism panel holding stacked slides. Slides auto-crossfade in turn on a loop (`@keyframes cf-fade` with staggered `animation-delay`s), so each slide fades in, holds, fades out, and the next takes over — no abrupt cuts. Clicking a dot activates that slide and stops the loop so the selection sticks.

## How is it used?

1. Build a `.carousel` with a `.carousel__slides` list of `.carousel__slide` items and a `.carousel__dots` list of `.carousel__dot` buttons.
2. Mark the initially-visible slide with `carousel__slide--active` and its dot with `is-active`.
3. The auto crossfade is pure CSS; a tiny included script wires the dots to switch slides on click.

```html
<link rel="stylesheet" href="style.css" />

<section class="carousel" aria-roledescription="carousel" aria-label="Featured testimonials">
  <ol class="carousel__slides" aria-live="polite">
    <li class="carousel__slide carousel__slide--active" role="group" aria-roledescription="slide" aria-label="1 of 3">…</li>
    <li class="carousel__slide" role="group" aria-roledescription="slide" aria-label="2 of 3">…</li>
    <li class="carousel__slide" role="group" aria-roledescription="slide" aria-label="3 of 3">…</li>
  </ol>
  <ul class="carousel__dots" role="tablist" aria-label="Choose slide">
    <li role="presentation"><button class="carousel__dot is-active" data-slide="0" aria-label="Go to slide 1"></button></li>
    …
  </ul>
</section>
```

## Why is this useful?

- **Animation-first** — the signature motion is `@keyframes cf-fade` driving each slide's `opacity` on a loop, with `animation-delay` staggered by `calc(var(--fade-cycle) / n)` so slides take turns. Slides are absolutely stacked and crossfade via `opacity` only (no layout shifts). Manual activation sets `--active`, which stops that slide's loop.
- **Glassmorphism aesthetic** — the carousel is a frosted panel via `backdrop-filter: blur()`.
- **Accessible** — full ARIA carousel roles (`aria-roledescription`, `role="group"` per slide, `aria-label="k of n"`), `aria-live="polite"` on the slide list, and `aria-label`s on dots. `:focus-visible` on dots. Full `prefers-reduced-motion` support (no loop/transition; the active slide is simply visible).
- **Reusable** — configurable via CSS custom properties (`--fade-cycle`, `--fade-duration`, `--fade-ease`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Includes a tiny optional script that wires dots to switch slides on click.
- `style.css` — glassmorphism carousel, crossfade keyframes with staggered delays, dot nav, focus-visible states, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
