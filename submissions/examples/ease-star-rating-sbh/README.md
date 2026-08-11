# ease-star-rating

A star rating widget where stars smoothly fill with color on hover and selection — instant, tactile feedback for reviews, feedback forms, and e-commerce.

## What does this do?

Adds a **star-rating**: five star-shaped labels driven by hidden radio inputs. Hovering a star previews the fill up to that point, and clicking selects that rating (the fill persists). Stars are CSS-masked SVG stars whose gold gradient `background-size` animates from `0%` to `100%`, so the fill wipes in smoothly. The row is `flex-direction: row-reverse` so a simple `:checked ~ label` (and `:hover ~ label`) selects all stars to the left of the target.

## How is it used?

1. Build a `.star-rating` with `role="radiogroup"`, containing five `<input type="radio">` + `<label class="star-rating__star">` pairs in descending value order (5 → 1).
2. Each label's `for` points to its input; each input shares the same `name` so only one rating is selected.
3. Hover previews the fill; clicking a star sets `:checked`, which fills that star and all to its left.

```html
<link rel="stylesheet" href="style.css" />

<div class="star-rating" role="radiogroup" aria-labelledby="rate-label">
  <input type="radio" class="star-rating__input" id="sr-5" name="sr" value="5" /><label for="sr-5" class="star-rating__star" aria-label="5 stars"></label>
  <input type="radio" class="star-rating__input" id="sr-4" name="sr" value="4" /><label for="sr-4" class="star-rating__star" aria-label="4 stars"></label>
  <input type="radio" class="star-rating__input" id="sr-3" name="sr" value="3" /><label for="sr-3" class="star-rating__star" aria-label="3 stars"></label>
  <input type="radio" class="star-rating__input" id="sr-2" name="sr" value="2" /><label for="sr-2" class="star-rating__star" aria-label="2 stars"></label>
  <input type="radio" class="star-rating__input" id="sr-1" name="sr" value="1" /><label for="sr-1" class="star-rating__star" aria-label="1 star"></label>
</div>
```

## Why is this useful?

- **Animation-first** — the signature motion is the fill wipe: each star is a CSS-masked star shape with a two-layer background (gold gradient + empty color); the gold layer's `background-size` transitions `0% → 100%` on `:hover`/`:checked`. Stars also scale up slightly on hover for tactile feedback. All via `background-size`/`transform`.
- **Glassmorphism aesthetic** — empty stars are translucent on the frosted dark background; filled stars are a warm gold gradient.
- **Accessible** — semantic `role="radiogroup"` with real radio inputs (keyboard operable: arrow keys / space) and `aria-label`s per star. `:focus-visible` highlights the focused star with a glow. Full `prefers-reduced-motion` support (no transitions; hover scale disabled).
- **Reusable** — configurable via CSS custom properties (`--star-duration`, `--star-ease`, `--star-size`, `--star-gap`, `--star-full`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS interaction, no JS.
- `style.css` — CSS-masked stars, fill-wipe via `background-size`, hover-preview + checked-fill via sibling combinators, focus-visible glow, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
