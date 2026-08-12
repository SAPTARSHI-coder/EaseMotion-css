# ease-rotate-fade-progress

Circular progress rings whose dial rotates and fades in on load, then the stroke draws (rotates around the ring) and fades up to the target value. Pure CSS — no JavaScript required for the animation.

## What does this do?

Adds a **rotate-fade progress** ring: on load each dial rotates in from `-90deg` and fades (`@keyframes rfp-in`), then the colored stroke draws around the ring via `stroke-dashoffset` (`@keyframes rfp-draw`) while fading in (`@keyframes rfp-stroke-fade`), stopping at the target value. Includes color variants and a numeric readout in the center.

## How is it used?

1. Set the target value via the `--val` CSS custom property on `.ring__fill` (e.g. `style="--val: 55"`, a number 0–100).
2. Set `aria-valuenow` on `.ring__dial` to match for screen readers.
3. Use modifier classes for color variants: `ring__fill--violet`, `ring__fill--emerald`.

```html
<link rel="stylesheet" href="style.css" />

<figure class="ring">
  <div class="ring__dial" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" aria-label="Onboarding progress">
    <svg class="ring__svg" viewBox="0 0 120 120" aria-hidden="true">
      <circle class="ring__track" cx="60" cy="60" r="52"></circle>
      <circle class="ring__fill" cx="60" cy="60" r="52" style="--val: 55"></circle>
    </svg>
    <span class="ring__val">55%</span>
  </div>
  <figcaption class="ring__caption">Onboarding</figcaption>
</figure>
```

## Why is this useful?

- **Animation-first** — the signature motion is twofold: the whole dial rotates in and fades (`@keyframes rfp-in`: `rotate(-90deg) → 0` + `opacity 0 → 1` + `scale`), then the stroke draws around the ring via `stroke-dashoffset` (`@keyframes rfp-draw`, from full circumference to `(1 - val/100) * circumference`) while fading (`@keyframes rfp-stroke-fade`). All via `transform`/`opacity`/`stroke-dashoffset`.
- **Glassmorphism aesthetic** — the dial is a frosted disc via `backdrop-filter: blur()`; the stroke is an accent color.
- **Accessible** — `role="progressbar"` + `aria-valuenow/min/max` + `aria-label` on the dial; the SVG is `aria-hidden="true"` (the numeric readout + ARIA convey the value). Full `prefers-reduced-motion` support (dial appears instantly; stroke jumps to final offset).
- **Reusable** — configurable via CSS custom properties (`--rotate-duration`, `--rotate-ease`, `--fade-duration`, `--val-duration`, `--circumference`, color tokens).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS animation, no JS.
- `style.css` — glassmorphism dial, rotate-in + draw + stroke-fade keyframes, color variants, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation. The `--circumference` is `2πr` for `r=52`; if the maintainer changes the ring radius, update `--circumference` accordingly.
