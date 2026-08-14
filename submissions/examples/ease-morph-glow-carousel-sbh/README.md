# ease-morph-glow-carousel

A carousel whose active slide morphs its corner radius and pulses a soft accent glow. Pure CSS — navigation is driven by hidden radio inputs, so no JavaScript is required for the animation.

## What does this do?

Adds a **morph-glow-carousel**: a glassmorphism carousel that slides between slides. The active slide morphs its `border-radius` from a small idle value to a larger value and gains a soft accent `box-shadow` glow, while the active dot indicator fills and scales up. Clicking a dot (a `<label>` for a hidden radio) switches slides; the CSS uses `:checked ~` to shift the track and highlight the active slide.

## How is it used?

1. Place N hidden `<input type="radio" class="carousel__radio">` (all sharing one `name`) before the viewport and dots.
2. Each `.carousel__dot` is a `<label for="...">` pointing at its radio. The CSS `:checked ~` rules shift the track and glow the active slide.

```html
<link rel="stylesheet" href="style.css" />

<section class="carousel" aria-label="Featured products carousel">
  <input type="radio" name="mgc" id="mgc-1" class="carousel__radio" checked aria-hidden="true" />
  <input type="radio" name="mgc" id="mgc-2" class="carousel__radio" aria-hidden="true" />
  <input type="radio" name="mgc" id="mgc-3" class="carousel__radio" aria-hidden="true" />

  <div class="carousel__viewport" role="region" aria-roledescription="carousel" aria-label="Featured products">
    <ul class="carousel__track">
      <li class="slide" role="group" aria-roledescription="slide" aria-label="1 of 3">…</li>
      <li class="slide" role="group" aria-roledescription="slide" aria-label="2 of 3">…</li>
      <li class="slide" role="group" aria-roledescription="slide" aria-label="3 of 3">…</li>
    </ul>
  </div>

  <div class="carousel__dots" role="tablist" aria-label="Choose slide">
    <label for="mgc-1" class="carousel__dot" tabindex="0" role="tab" aria-selected="true">1</label>
    <label for="mgc-2" class="carousel__dot" tabindex="0" role="tab" aria-selected="false">2</label>
    <label for="mgc-3" class="carousel__dot" tabindex="0" role="tab" aria-selected="false">3</label>
  </div>
</section>
```

## Why is this useful?

- **Animation-first** — the signature motion is the track sliding via `transform: translateX()` (`0` → `-1/N` → `-2/N` of 100%) while the active slide morphs `border-radius` (`--radius-idle` → `--radius-active`) and gains a `box-shadow` glow, and the active dot scales up with a glow. All via `transform`/`border-radius`/`box-shadow`.
- **Glassmorphism aesthetic** — slides are frosted panels via `backdrop-filter: blur()`; the glow is an accent gradient.
- **Accessible** — `role="region"` + `aria-roledescription="carousel"` on the viewport, each slide `role="group"` + `aria-roledescription="slide"` + `aria-label="N of M"`, and a `role="tablist"` of dot labels. Dots are focusable labels with `:focus-visible` rings. Full `prefers-reduced-motion` support (track and slides snap without transition; the radius/glow still apply).
- **Reusable** — configurable via CSS custom properties (`--slide-duration`, `--slide-ease`, `--radius-active`, `--radius-idle`, `--glow`, `--slide-count`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS navigation, no JS required for the animation.
- `style.css` — glassmorphism carousel, track-slide + active-slide radius-morph + glow via radio `:checked ~`, dot indicators with active fill, focus-visible states, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation. Note: keeping `aria-selected` perfectly in sync with `:checked` requires a small JS; the demo's CSS drives the visual active state from `:checked`, and `aria-roledescription` slide labels convey position to AT.
