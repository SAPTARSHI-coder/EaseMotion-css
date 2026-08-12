# ease-star-rating — CSS-only Interactive Star Rating

1. **What does this add?** A fully accessible, CSS-only interactive star rating picker built with radio inputs and sibling selectors — no JavaScript. Includes hover-fill animation, size variants (`-sm`/default/`-lg`), color variants (`-gold`/`-primary`/custom via `--ease-star-color`), keyboard focus support, and `prefers-reduced-motion` fallback.
2. **How is it used?**
```html
<fieldset class="ease-star-rating" aria-label="Rate this product">
  <input type="radio" name="rating" id="r5" value="5" />
  <label for="r5" aria-label="5 stars"></label>
  <input type="radio" name="rating" id="r4" value="4" />
  <label for="r4" aria-label="4 stars"></label>
  <input type="radio" name="rating" id="r3" value="3" checked />
  <label for="r3" aria-label="3 stars"></label>
  <input type="radio" name="rating" id="r2" value="2" />
  <label for="r2" aria-label="2 stars"></label>
  <input type="radio" name="rating" id="r1" value="1" />
  <label for="r1" aria-label="1 star"></label>
</fieldset>

<!-- Variants -->
<fieldset class="ease-star-rating ease-star-rating-sm">...</fieldset>
<fieldset class="ease-star-rating ease-star-rating-lg ease-star-rating-primary">...</fieldset>

<!-- Custom color override -->
<fieldset class="ease-star-rating" style="--ease-star-color: #22c55e;">...</fieldset>
```
3. **Why is it useful?** The markup is reverse-ordered (`flex-direction: row-reverse`) so the 5-star input comes first in the DOM, letting the `~` general sibling selector light up "this star and everything after it in DOM order" on hover — the standard CSS-only star-rating trick. Using real `<input type="radio">` elements (visually hidden, but keyboard-focusable) means the component is natively accessible: screen readers announce it as a radio group, `Tab`/arrow keys work out of the box, and `:focus-visible` provides a clear keyboard focus ring — all without JavaScript, aligned with EaseMotion CSS's zero-dependency philosophy.

**Note:** This is the accessible radio-input/click-to-rate variant, complementing the static display component (`ease-rating-stars-gn`, #8123) and the simpler hover-preview variant (`ease-rating-gn`, #283) already in this repo — together covering the full spectrum of star-rating use cases (display-only, hover-preview, and accessible interactive picker).