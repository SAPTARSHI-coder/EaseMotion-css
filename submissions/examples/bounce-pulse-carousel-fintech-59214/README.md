# Bounce-Pulse Carousel for Fintech Dashboard Layouts

A horizontal carousel where fintech metric cards bounce into view with staggered timing and a single pulse ring effect, designed for dashboard interfaces.

## What does this do?

Displays financial metric cards in a horizontally scrollable carousel. Each card bounces in from a scaled-down state with staggered delays on page load, and a one-shot pulse ring expands outward from the card center for added visual emphasis.

## How is it used?

```html
<div class="bp-carousel">
  <div class="bp-carousel__track">
    <article class="bp-card bp-card--delay-1">
      <div class="bp-card__pulse"></div>
      <div class="bp-card__icon bp-card__icon--violet">💰</div>
      <h3 class="bp-card__label">Net Worth</h3>
      <p class="bp-card__value">$1,247,830</p>
      <span class="bp-card__delta bp-card__delta--up">+5.6% MTD</span>
    </article>
  </div>
</div>
```

## Why is it useful?

Fintech dashboards benefit from attention-grabbing but non-disruptive animations. The bounce entrance draws the eye to each metric card on load, while the subtle pulse ring adds depth without competing with the data itself.

## CSS Custom Properties

| Property     | Description      | Default   |
| ------------ | ---------------- | --------- |
| `--bp-violet`| Primary accent   | `#7c5cfc` |
| `--bp-teal`  | Positive change  | `#0ea5a0` |
| `--bp-orange`| Neutral change   | `#e88c30` |
| `--bp-card`  | Card background  | `#ffffff` |
| `--bp-radius`| Card radius      | `14px`    |

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
