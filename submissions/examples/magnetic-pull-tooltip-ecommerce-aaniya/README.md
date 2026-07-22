# Magnetic Pull Tooltip — E-Commerce Checkout

A pure CSS tooltip styled for e-commerce checkout interfaces. It snaps into
place with a magnetic pull motion — a small overshoot past its resting
position — when its trigger is hovered or focused.

## What it does

- Single `@keyframes` animation (`ease-magnet-cart-pull`), no JavaScript
- Tooltip starts below and slightly scaled down, pulls upward with a subtle
  overshoot, then settles into place
- Checkout-specific visual language: a small rounded status tag (e.g. "Free
  over $50", "10% off", "Only 3 left") above the title, green confirm accent
  color — distinct from the SaaS card, neumorphic soft-UI, and other
  magnetic-pull variants in this repo

## How to use it

```html
<div class="magnet-tooltip-cart">
  <button class="magnet-tooltip-cart__trigger">Shipping</button>
  <div class="magnet-tooltip-cart__bubble">
    <span class="magnet-tooltip-cart__tag">Free over $50</span>
    <span class="magnet-tooltip-cart__title">Fast delivery</span>
    <span class="magnet-tooltip-cart__body">
      Standard shipping arrives in 3–5 business days.
    </span>
  </div>
</div>
```

Just drop the markup in and hover (or Tab to focus) the trigger button.

## Customization

Tunable via CSS custom properties on `:root` or scoped to a component:

| Property | Default | Description |
|---|---|---|
| `--ease-magnet-cart-duration` | `480ms` | Animation duration |
| `--ease-magnet-cart-curve` | `cubic-bezier(0.34, 1.5, 0.6, 1)` | Easing curve (drives the overshoot) |
| `--ease-magnet-cart-scale` | `1` | Final resting scale of the tooltip |
| `--ease-magnet-cart-pull-distance` | `22px` | Starting vertical offset before the pull |

## Accessibility

- Triggers via `:hover` **and** `:focus-visible`, so keyboard users see the
  tooltip too
- Respects `prefers-reduced-motion`: animation is skipped and the tooltip
  simply appears in its resting state
- Responsive down to mobile widths (bubble width adjusts at 480px)

## Why it fits EaseMotion CSS

Readable, single-purpose CSS animation with no dependencies, exposed
customization points, and accessibility built in — in line with the
library's animation-first philosophy.