# Slide-Up Carousel for Fintech Dashboard Layouts

A horizontal carousel where cards slide up into view with staggered timing, designed for fintech dashboards.

## What does this do?

Displays financial metric cards in a horizontally scrollable carousel. Each card slides up from below with staggered delays on page load, giving a smooth cascading entrance.

## How is it used?

```html
<div class="su-carousel">
  <div class="su-carousel__track">
    <article class="su-card">
      <div class="su-card__icon su-card__icon--indigo">💰</div>
      <h3 class="su-card__label">Total Balance</h3>
      <p class="su-card__value">$847,293</p>
      <span class="su-card__delta su-card__delta--up">+4.2%</span>
    </article>
  </div>
</div>
```

## Why is it useful?

Fintech dashboards need to present multiple metrics cleanly. The slide-up entrance draws attention to each card without being distracting, and the carousel keeps the layout compact on smaller screens.

## CSS Custom Properties

| Property       | Description     | Default   |
| -------------- | --------------- | --------- |
| `--su-indigo`  | Primary accent  | `#635bff` |
| `--su-emerald` | Positive change | `#16a34a` |
| `--su-amber`   | Neutral change  | `#d97706` |
| `--su-card`    | Card background | `#ffffff` |
| `--su-radius`  | Card radius     | `14px`    |

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
