# ease-scale-hover-carousel

A carousel whose active slide scales up (`scale 1.08`) while neighbors scale down (`scale 0.9`) and dim, creating a sense of depth as the track slides to the active position. Pure CSS — navigation is driven by hidden radio inputs, so no JavaScript is required for the animation.

## What does this do?

Adds a **scale-hover-carousel**: a glassmorphism carousel. When you select a slide (via dot navigation), the track translates to bring the active slide to center and that slide scales up (`transform: scale(1 → 1.08)`) while the neighbors remain scaled down (`scale 0.9`) and dimmed (`opacity 0.6`), so the active card pops forward. Hovering a dot scales it for feedback.

## How is it used?

1. Place N hidden `<input type="radio" class="slide-toggle">` (sharing one `name`) before the viewport and nav.
2. Each `.dot` is a `<label for="...">` pointing at its radio. The CSS `:checked ~` rules translate the track and apply the active scale to the matching slide.

```html
<link rel="stylesheet" href="style.css" />

<input type="radio" name="shc" id="shc-1" class="slide-toggle" checked aria-hidden="true" />
<input type="radio" name="shc" id="shc-2" class="slide-toggle" aria-hidden="true" />
<input type="radio" name="shc" id="shc-3" class="slide-toggle" aria-hidden="true" />

<div class="carousel__viewport" aria-live="polite">
  <ul class="carousel__track">
    <li class="slide" role="group" aria-roledescription="slide" aria-label="1 of 3">…</li>
    <li class="slide" role="group" aria-roledescription="slide" aria-label="2 of 3">…</li>
    <li class="slide" role="group" aria-roledescription="slide" aria-label="3 of 3">…</li>
  </ul>
</div>

<div class="carousel__nav">
  <label for="shc-1" class="dot" tabindex="0" aria-label="Go to slide 1"></label>
  <label for="shc-2" class="dot" tabindex="0" aria-label="Go to slide 2"></label>
  <label for="shc-3" class="dot" tabindex="0" aria-label="Go to slide 3"></label>
</div>
```

## Why is this useful?

- **Animation-first** — the signature motion is the scale contrast: the active slide scales up (`transform: scale(1.08)`) while neighbors stay scaled down (`scale 0.9`) and dimmed (`opacity 0.6`), and the track translates (`translateX`) to center the active slide. Hovering a dot scales it. All via `transform`/`opacity`.
- **Glassmorphism aesthetic** — the viewport is a frosted panel via `backdrop-filter: blur()`; the media area uses an accent-tinted gradient.
- **Accessible** — carousel semantics (`aria-roledescription="carousel"` + `aria-label`), slides with `role="group"`/`aria-roledescription="slide"`/`aria-label="N of M"`, `aria-live="polite"` viewport. Dots are focusable labels with `aria-label`s and `:focus-visible` rings. Full `prefers-reduced-motion` support (track and scale snap without transition).
- **Reusable** — configurable via CSS custom properties (`--slide-duration`, `--slide-ease`, `--scale-active`, `--scale-inactive`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS navigation and animation, no JS.
- `style.css` — glassmorphism carousel, active-slide scale-up + neighbor scale-down via radio `:checked ~`, dot navigation with active state, focus-visible states, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
