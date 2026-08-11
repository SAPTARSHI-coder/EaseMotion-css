# CSS Rotate-Fade Popover — E-Commerce Checkout

## 1. What does this do?
A pure CSS popover that fades, rotates, and scales into view to show a checkout order summary — no JavaScript.

## 2. How is it used?
Wrap a trigger and panel in `.popover-wrap`; it reveals on `:hover` / `:focus-within`.

```html
<div class="popover-wrap">
  <button class="popover-trigger">View Order Summary</button>
  <div class="popover">
    <p class="popover__title">Order Summary</p>
    <ul class="popover__list">
      <li><span>Item</span><span>$79.00</span></li>
    </ul>
    <p class="popover__total"><span>Total</span><span>$90.72</span></p>
  </div>
</div>
```

Key custom properties: `--popover-duration`, `--popover-rotate`, `--popover-scale`, `--popover-ease`.

## 3. Why is it useful?
Fits EaseMotion's philosophy: a raw, GPU-friendly (`transform`/`opacity` only) demo with zero JS, ready for the maintainer to standardize and merge — perfect for checkout confirmations where motion should feel light, not heavy.