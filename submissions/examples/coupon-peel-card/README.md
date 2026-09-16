# Coupon Peel Card Effect

A CSS-only coupon card hover effect where the top-right corner appears to peel when the user hovers over the card.

## What does this do?

Displays a styled coupon/promo card that reveals a folded corner peel animation on hover using pure CSS `::before` and `::after` pseudo-elements — no JavaScript needed.

## How is it used?

```html
<section class="coupon-card">
  <span class="badge">LIMITED OFFER</span>
  <h2>50% OFF</h2>
  <p>Use code <strong>EASE50</strong> and save on your next purchase.</p>
  <button>Claim Offer</button>
</section>
```

Apply the `.coupon-card` class to any card element. The peel effect on the top-right corner activates automatically on `:hover`.

## Why is it useful?

Coupon and promotional cards are common UI patterns in e-commerce and marketing pages. The corner-peel micro-interaction adds visual depth and a tactile feel using only CSS transforms and pseudo-elements, fitting naturally into EaseMotion CSS's collection of hover animation utilities.

## Features

- CSS-only hover animation
- No JavaScript required
- Smooth card lift effect
- Coupon-style folded corner peel
- Useful for offers, promo cards, pricing cards, and discount banners

## Folder Structure

```txt
coupon-peel-card/
├── demo.html
├── style.css
└── README.md
```
