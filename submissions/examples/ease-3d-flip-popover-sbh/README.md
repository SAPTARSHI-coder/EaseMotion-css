# ease-3d-flip-popover

A popover that flips in 3D space (Y-axis rotation) to reveal details on the card's back face. Minimalist dark aesthetic for tech layouts.

## What does this do?

Adds a **3D flip popover**: each card has a front face (icon + title) and a back face (details). Clicking or pressing Enter/Space flips the card 180° around its vertical axis to reveal the back content; clicking again, pressing the close button, or pressing Escape flips it back.

## How is it used?

1. Use the `.flip` element as the card container with `tabindex="0"` and `role="button"` for keyboard access.
2. Inside, place a `.flip__inner` wrapper holding two `.flip__face` elements: `--front` and `--back`.
3. The back face holds a `[data-close]` button to flip back.

```html
<link rel="stylesheet" href="style.css" />

<article class="flip" tabindex="0" role="button" aria-pressed="false" aria-label="Flip card: Details">
  <div class="flip__inner">
    <div class="flip__face flip__face--front">
      <span class="flip__icon">&#9728;</span>
      <h2 class="flip__title">Details</h2>
      <p class="flip__hint">Click to flip</p>
    </div>
    <div class="flip__face flip__face--back">
      <h2 class="flip__title flip__title--back">Details</h2>
      <p class="flip__text">Your revealed content here.</p>
      <button type="button" class="flip__close" data-close aria-label="Flip back">&times;</button>
    </div>
  </div>
</article>
```

A tiny inline script toggles the `is-flipped` class and syncs `aria-pressed`; it supports click, keyboard (Enter/Space/Escape), and the close button.

## Why is this useful?

- **Animation-first** — the defining interaction is a true 3D Y-axis flip using `transform-style: preserve-3d` and `rotateY(180deg)`, with `backface-visibility: hidden` for clean face culling.
- **Minimalist tech aesthetic** — dark gradient cards suited to dashboards and developer tooling.
- **Accessible** — `role="button"`, `aria-pressed`, full keyboard support, `:focus-visible` outlines, and `prefers-reduced-motion` (the flip still swaps faces via transform but with no transition duration).
- **Reusable** — card size, duration, easing, and colors are configurable via CSS custom properties (`--flip-duration`, `--flip-ease`, `--flip-card-w`, `--flip-card-h`, `--flip-accent`).

## Files

- `demo.html` — self-contained interactive demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — 3D flip card styles, faces, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
