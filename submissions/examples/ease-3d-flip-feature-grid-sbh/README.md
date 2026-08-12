# ease-3d-flip-feature-grid

A glassmorphism feature grid whose cards flip 180° around the Y axis on hover or keyboard focus, revealing a details face on the back.

## What does this do?

Adds a **3D-flip feature grid**: each card has a front face (icon + title) and a back face (title + description). On hover/focus the card rotates `rotateY(180deg)` using `transform-style: preserve-3d` + `backface-visibility: hidden`, so the front rotates away as the back rotates in. The front face is decorated and `aria-hidden`; an off-screen `.card__sr` text carries the full description for screen readers so the flip is a visual enhancement, not a content gate.

## How is it used?

1. Build a `.grid` of `.card` elements, each with a `.card__inner` wrapper (the 3D context).
2. Inside `.card__inner`, place two `.card__face` elements: `--front` and `--back`.
3. Add `tabindex="0"` so cards are keyboard-focusable (focus triggers the same flip as hover).
4. Add a visually-hidden `.card__sr` with the full text for assistive tech.

```html
<link rel="stylesheet" href="style.css" />

<section class="grid" aria-label="Features">
  <article class="card" tabindex="0">
    <div class="card__inner" aria-hidden="true">
      <div class="card__face card__face--front">
        <span class="card__icon">&#9889;</span>
        <h2 class="card__title">Fast</h2>
      </div>
      <div class="card__face card__face--back">
        <h3 class="card__back-title">Fast</h3>
        <p class="card__back-text">Sub-50ms interactions.</p>
      </div>
    </div>
    <span class="card__sr">Fast. Sub-50ms interactions.</span>
  </article>
  <!-- more cards -->
</section>
```

## Why is this useful?

- **Animation-first** — the signature motion is a Y-axis 3D flip via `rotateY(180deg)` with `preserve-3d` and `backface-visibility: hidden`; both faces are positioned absolutely and the inner wrapper carries the transform.
- **Glassmorphism aesthetic** — frosted faces via `backdrop-filter: blur()`; the back face gets a tinted gradient accent so the flip is visually obvious.
- **Accessible** — the decorative flip faces are `aria-hidden`; a visually-hidden `.card__sr` exposes the full description to screen readers regardless of flip state. `tabindex="0"` + `:focus-visible` ring, and full `prefers-reduced-motion` support (flip still swaps faces via transform, no transition duration).
- **Reusable** — configurable via CSS custom properties (`--flip-duration`, `--flip-ease`, `--glass-blur`, color tokens).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — glassmorphism 3D flip cards, front/back faces, hover/focus flip, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
