# Floating Stat Card — Pastel

A floating statistical card component featuring a soft pastel
visual language and subtle CSS-driven motion.

Built for EaseMotion CSS issue #81458.

## Features

- Pastel visual styling
- Floating card animation
- Three reusable statistic cards
- Soft decorative background glow
- Hover elevation effect
- Animated accent indicator
- Responsive desktop, tablet and mobile layouts
- Accessible focus states
- `prefers-reduced-motion` support
- Zero JavaScript dependencies

## Usage

Include `style.css` in your project and use the component
markup from `demo.html`.

Example:

```html
<article class="pastel-stat-card pastel-stat-card--lavender">
  <div class="pastel-stat-card__top">
    <span class="pastel-stat-card__label">
      TOTAL USERS
    </span>

    <span class="pastel-stat-card__icon">
      ↗
    </span>
  </div>

  <div class="pastel-stat-card__value">
    24.8K
  </div>

  <div class="pastel-stat-card__bottom">
    <span class="pastel-stat-card__change">
      +12.8%
    </span>

    <span class="pastel-stat-card__period">
      this month
    </span>
  </div>
</article>