# ease-rotate-fade-carousel

A carousel where each slide transitions with a combined rotate + fade motion — the outgoing slide fades while rotating away, and the incoming slide fades in while rotating to center.

## What does this do?

Adds a **rotate-fade carousel**: slides are absolutely stacked; only the active slide is visible. Navigating (next/prev buttons, dot tabs, or arrow keys) rotates and fades the outgoing slide out while the new slide rotates back to zero and fades in, creating a smooth 3D-feeling transition.

## How is it used?

1. Stack `.slide` elements inside a `.carousel__track` within a `.carousel__viewport`.
2. Mark the initially visible slide with `is-active`.
3. Wire next/prev buttons (`[data-next]` / `[data-prev]`) and dot tabs (`[data-dot="index"]`).

```html
<link rel="stylesheet" href="style.css" />

<section class="carousel" aria-label="Highlights">
  <div class="carousel__viewport">
    <div class="carousel__track" id="track">
      <div class="slide is-active" role="group" aria-roledescription="slide" aria-label="1 of 4">
        <span class="slide__badge">01</span>
        <h2 class="slide__title">First slide</h2>
        <p class="slide__text">Slide content here.</p>
      </div>
      <!-- more slides -->
    </div>
  </div>
  <div class="carousel__nav">
    <button type="button" class="nav-btn" data-prev aria-label="Previous">&larr;</button>
    <div class="dots" role="tablist" aria-label="Choose slide">
      <button type="button" class="dot is-active" data-dot="0" role="tab" aria-selected="true" aria-label="Slide 1"></button>
      <!-- more dots -->
    </div>
    <button type="button" class="nav-btn" data-next aria-label="Next">&rarr;</button>
  </div>
</section>
```

A tiny inline script toggles the `is-active` class on slides/dots and handles next/prev/dot/arrow-key navigation.

## Why is this useful?

- **Animation-first** — the signature transition is a combined `rotate(-12deg) scale(0.92)` → `rotate(0) scale(1)` paired with `opacity`, on a `cubic-bezier(0.22, 1, 0.36, 1)` ease for a polished, modern feel.
- **Minimalist tech aesthetic** — dark gradient stage suited to product showcases and dashboards.
- **Accessible** — `aria-roledescription="carousel"`, per-slide `aria-label`, `role="tab"` dots with `aria-selected`, keyboard arrow navigation, `:focus-visible` outlines, and full `prefers-reduced-motion` support.
- **Reusable** — configurable via CSS custom properties (`--car-duration`, `--car-ease`, `--car-w`, `--car-h`, `--car-accent`).

## Files

- `demo.html` — self-contained interactive demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — carousel layout, slide rotate-fade transition, nav/dots, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
