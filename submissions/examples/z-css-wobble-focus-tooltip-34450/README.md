# CSS Wobble-Focus Tooltip (Product Catalog)

Closes #34450

## What does this do?

A pure CSS tooltip that reveals with a springy "wobble-focus" transition (a quick overshoot rotate + scale settling into place), styled for product catalog / storefront layouts — zero JavaScript required.

## How is it used?

Wrap a focusable trigger (a real `<button>`, so it's keyboard reachable) and the tooltip content in a `.tooltip-wrap`. The tooltip shows on `:hover` and on `:focus-within` (so tabbing to the button reveals it too):

```html
<span class="tooltip-wrap">
  <button type="button" class="info-trigger" aria-describedby="tip-shipping">
    <span aria-hidden="true">i</span>
    <span class="visually-hidden">Shipping details</span>
  </button>
  <span class="wobble-tooltip" id="tip-shipping" role="tooltip">
    Free 2-day shipping · ships within 24h
  </span>
</span>
```

Timing, easing and the wobble intensity are all exposed as custom properties so a product page can retune the feel without touching the animation logic:

```css
:root {
  --wobble-duration: 0.6s;
  --wobble-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
  --wobble-scale-max: 1.06;
  --wobble-rotate-max: 3deg;
}
```

## Why is it useful?

It's a self-contained, JS-free micro-interaction that fits EaseMotion's animation-first philosophy: drop it into a product grid to surface shipping/stock/warranty info without cluttering the card, it's fully responsive (tooltip repositions and drops the wobble on narrow viewports to avoid overflow), keyboard accessible via `:focus-within` + `aria-describedby`, and it respects `prefers-reduced-motion`.
