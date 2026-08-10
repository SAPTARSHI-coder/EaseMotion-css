# Float-Drift Carousel for Fintech Dashboard Layouts

A lightweight, pure CSS carousel featuring gentle floating and drifting animations, designed for fintech dashboard interfaces.

## What does this do?

This component provides a responsive carousel for displaying financial metrics with smooth float and drift animations that create an elegant, living dashboard feel without JavaScript.

## How is it used?

```html
<main class="fd-carousel">
  <header class="fd-carousel__header">
    <h2 class="fd-carousel__title">Dashboard Title</h2>
    <nav class="fd-carousel__controls">
      <button class="fd-carousel__btn fd-carousel__btn--prev">←</button>
      <button class="fd-carousel__btn fd-carousel__btn--next">→</button>
    </nav>
  </header>

  <section class="fd-carousel__track">
    <article class="fd-carousel__card fd-carousel__card--float">
      <div class="fd-card">
        <div class="fd-card__header">
          <span class="fd-card__icon fd-card__icon--blue">📊</span>
          <span class="fd-card__badge fd-card__badge--up">+5.2%</span>
        </div>
        <h3 class="fd-card__label">Metric Name</h3>
        <p class="fd-card__value">$2.4M</p>
      </div>
    </article>
  </section>
</main>
```

## Why is it useful?

This component aligns with EaseMotion CSS's philosophy of lightweight, animation-first CSS solutions. It delivers:

- **Performance**: GPU-composited animations using only `transform` and `opacity`
- **Accessibility**: Full `prefers-reduced-motion` support with semantic HTML and ARIA attributes
- **Responsiveness**: Adapts across desktop, tablet, and mobile viewports
- **Customizability**: CSS custom properties for easy theming

## Features

- Gentle floating animation (vertical bob)
- Drift animation (diagonal subtle motion)
- Elastic entry animation with spring-like settle
- Sparkline charts for data visualization
- Color-coded status badges (up/down indicators)
- Responsive at 1024px, 768px, and 480px breakpoints
- Print-friendly styles
- High contrast mode support

## CSS Custom Properties

| Property              | Description        | Default                                |
| --------------------- | ------------------ | -------------------------------------- |
| `--fd-bg-primary`     | Page background    | `#0c1222`                              |
| `--fd-bg-card`        | Card background    | `#162032`                              |
| `--fd-blue`           | Primary accent     | `#3b82f6`                              |
| `--fd-green`          | Success color      | `#22c55e`                              |
| `--fd-ease-drift`     | Drift easing       | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| `--fd-duration-float` | Float cycle        | `4s`                                   |
| `--fd-gap`            | Card spacing       | `1.25rem`                              |
| `--fd-radius`         | Card border-radius | `16px`                                 |

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Folder Structure

```
float-drift-carousel-fintech-rj/
├── demo.html       # Self-contained HTML showcase
├── style.css       # Pure CSS with float-drift animations
└── README.md       # This documentation
```
