# ease-3d-flip-feature-grid (SaaS Showcase)

A SaaS showcase feature grid whose cards flip 180° around the Y axis on hover or keyboard focus, revealing a benefits face on the back. Pure CSS — the flip is driven entirely by `:hover`/`:focus-visible`, so no JavaScript is required for the animation.

## What does this do?

Adds a **3D-flip feature grid** for SaaS showcase layouts: glassmorphism feature cards that flip in 3D (`transform: rotateY(0 → 180deg)`) on hover or keyboard focus, revealing a benefits/description face on the back. The card establishes a `perspective`, and its inner (with `transform-style: preserve-3d`) rotates; both faces use `backface-visibility: hidden` so only the facing side is visible.

## How is it used?

1. Each `.card` (with `tabindex="0"` and an `aria-label`) contains a `.card__inner` wrapper.
2. The inner holds two `.card__face` elements: `--front` (default) and `--back` (pre-rotated `180deg`).
3. The CSS flips `.card__inner` on `:hover` or `:focus-visible`.

```html
<link rel="stylesheet" href="style.css" />

<article class="card" tabindex="0" aria-label="Feature: Scalable infrastructure">
  <div class="card__inner">
    <div class="card__face card__face--front">
      <span class="card__emoji" aria-hidden="true">🚀</span>
      <h2 class="card__title">Scalable Infrastructure</h2>
      <p class="card__hint">Hover or focus for benefits</p>
    </div>
    <div class="card__face card__face--back">
      <h2 class="card__title">Scalable Infrastructure</h2>
      <p class="card__desc">Auto-scales to millions of requests with zero downtime deploys.</p>
    </div>
  </div>
</article>
```

## Why is this useful?

- **Animation-first** — the signature motion is the 3D flip: `transform: rotateY()` (`0 → 180deg`) on `.card__inner`, with `perspective` on the card and `transform-style: preserve-3d` + `backface-visibility: hidden` on the faces. All via `transform`.
- **Glassmorphism aesthetic** — both faces are frosted panels via `backdrop-filter: blur()`; the back face uses an accent-tinted gradient.
- **Accessible** — cards are focusable (`tabindex="0"`) with descriptive `aria-label`s; `:focus-visible` triggers the flip and shows a focus ring; the emoji is `aria-hidden`. Full `prefers-reduced-motion` support (flip snaps without transition).
- **Reusable** — configurable via CSS custom properties (`--flip-duration`, `--flip-ease`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS flip, no JS. SaaS-themed feature content.
- `style.css` — glassmorphism cards, 3D flip via `:hover`/`:focus-visible`, preserve-3d + backface-visibility, focus-visible states, responsive grid, reduced-motion rules.
- `README.md` — this documentation.

## Note on folder name

A `ease-3d-flip-feature-grid-sbh` submission already exists in the repo for a separate glassmorphism-themed issue (#64369, closed). This SaaS-showcase variant uses the `-saas-sbh` folder suffix to avoid a collision while clearly serving issue #62138.
