# Swing-Hover Tooltip — E-Commerce Checkout

A pure CSS tooltip with a spring-like "swing" entrance animation, styled
for an e-commerce checkout flow (clean card surfaces, green primary/CTA
accent, includes a realistic checkout-field help pattern). Triggered on
hover and keyboard focus. Zero JavaScript.

## Features

- 🎯 Pure CSS — no JavaScript required
- ⌨️ Keyboard accessible via `:focus-visible`
- 🔄 Four placement variants: top, bottom, left, right
- 🎛️ Customizable timing, easing, scale, offset via CSS variables
- 🛒 Includes a realistic checkout-form usage example (info icons next to
  card number / CVV / promo code fields)
- 📱 Fully responsive
- 🌀 Respects `prefers-reduced-motion`

## Usage

```html
<div class="tooltip-wrap">
  <button class="tt-trigger" aria-describedby="tt-1">Hover me</button>
  <span class="tt-bubble tt-bubble--top" id="tt-1" role="tooltip">
    Tooltip text here
  </span>
</div>
```

Swap `tt-bubble--top` for `tt-bubble--bottom`, `tt-bubble--left`, or
`tt-bubble--right` to change placement.

### Checkout field-help pattern

```html
<span class="tooltip-wrap">
  <button class="info-icon" aria-describedby="tt-card">i</button>
  <span class="tt-bubble tt-bubble--top" id="tt-card" role="tooltip">
    16-digit number on the front of your card
  </span>
</span>
```

## Customization

| Variable | Default | Description |
|---|---|---|
| `--tt-duration` | `0.3s` | Animation duration |
| `--tt-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Springy swing easing |
| `--tt-scale` | `0.88` | Starting scale before swing-in |
| `--tt-swing-angle` | `14deg` | Rotation angle of the swing |
| `--tt-offset` | `10px` | Gap between trigger and tooltip |
| `--tt-bg` | `#111827` | Tooltip background color |
| `--tt-accent` | `#16a34a` | Primary green accent (checkout/CTA) |

Example override for a single tooltip:

```css
.tt-bubble--custom {
  --tt-duration: 0.5s;
  --tt-scale: 0.6;
  --tt-swing-angle: 26deg;
}
```

## Accessibility

- Revealed on both `:hover` and `:focus-visible`, so keyboard users get the
  same experience as mouse users.
- Each trigger uses `aria-describedby` pointing to the tooltip's `id`.
- Tooltip element uses `role="tooltip"`.
- Animation disabled for users with `prefers-reduced-motion: reduce`.

## Files

- `demo.html` — showcase with all four placements, a primary CTA example,
  and a checkout-form field-help usage pattern
- `style.css` — component styles and animation logic
- `README.md` — this file