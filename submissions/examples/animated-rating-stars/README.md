# ease-rating

Animated star rating widget — interactive (hover/click) and read-only display variants, pure CSS.

## What
- `.ease-rating` — interactive radio-based star selector with a pop animation on hover.
- `.ease-rating-display` — read-only stars supporting partial fill (e.g. 3.5/5) via a `--rating` CSS variable, with an animated fill-in on load.

## How
- Interactive version uses reversed-order radio inputs + `~` sibling selectors, a classic CSS-only star rating trick, so no JS is needed for state.
- Read-only version uses a `::before` pseudo-element clipped to `width: var(--rating)` to create the partial-star fill effect, animated with `@keyframes ease-rating-fill`.
- Hover triggers a quick `scale` pop (`ease-star-pop`) for tactile feedback.
- `prefers-reduced-motion` disables the pop animation.

## Why
Rating widgets are a near-universal e-commerce/review UI pattern. EaseMotion CSS has no existing rating component, and this shows off both interactive (radio-hack) and purely visual (clip-fill) CSS techniques.

## Files
- `demo.html` — interactive + read-only examples
- `style.css` — `ease-rating` / `ease-rating-display` classes
- `README.md` — this file

## Usage
\```html
<div class="ease-rating">
  <input type="radio" name="r" id="r5"><label for="r5">★</label>
  <!-- ... -->
</div>

<div class="ease-rating-display" style="--rating:70%;">★★★★★</div>
\```