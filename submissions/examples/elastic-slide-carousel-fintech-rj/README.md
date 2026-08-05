# Elastic Slide Carousel for Fintech Dashboard Layouts

A lightweight, performant CSS carousel component designed specifically for fintech dashboard interfaces, featuring elastic slide animations with spring-like overshoot effects.

## What does this do?

This component provides a responsive carousel for displaying financial metrics (revenue, users, conversion rates, etc.) with smooth elastic animations that give a modern, polished feel to fintech dashboards.

## How is it used?

```html
<main class="fintech-carousel">
  <header class="fintech-carousel__header">
    <h2 class="fintech-carousel__title">Dashboard Title</h2>
    <nav class="fintech-carousel__nav">
      <button class="fintech-carousel__nav-btn">←</button>
      <button class="fintech-carousel__nav-btn">→</button>
    </nav>
  </header>

  <section class="fintech-carousel__track">
    <article class="fintech-carousel__slide">
      <div class="fintech-card">
        <div class="fintech-card__icon">📊</div>
        <h3 class="fintech-card__title">Metric Name</h3>
        <p class="fintech-card__description">Description</p>
        <div class="fintech-card__metric">
          <span class="fintech-card__value">$123,456</span>
          <span class="fintech-badge fintech-badge--success">+12.5%</span>
        </div>
      </div>
    </article>
    <!-- More slides... -->
  </section>

  <div class="fintech-carousel__indicators">
    <button
      class="fintech-carousel__dot fintech-carousel__dot--active"
    ></button>
    <button class="fintech-carousel__dot"></button>
  </div>
</main>
```

## Why is it useful?

This component aligns with EaseMotion CSS's philosophy of providing lightweight, pure CSS solutions for modern web interfaces. It eliminates the need for JavaScript carousel libraries while delivering:

- **Performance**: CSS-only animations using GPU-composited properties (transform, opacity)
- **Accessibility**: Full support for `prefers-reduced-motion`, semantic HTML, and ARIA attributes
- **Responsiveness**: Adapts seamlessly across desktop, tablet, and mobile viewports
- **Customizability**: CSS custom properties for easy theming and integration

## Features

- Elastic slide-in animations with spring-like overshoot
- Staggered animation delays for visual appeal
- Mini chart components for data visualization
- Progress bars with animated fills
- Navigation buttons with hover effects
- Indicator dots for slide navigation
- Scroll progress indicator
- Responsive breakpoints at 1024px, 768px, and 480px
- High contrast mode support
- Print styles

## CSS Custom Properties

| Property                     | Description               | Default                             |
| ---------------------------- | ------------------------- | ----------------------------------- |
| `--carousel-primary`         | Primary background color  | `#1a1f36`                           |
| `--carousel-accent`          | Accent/highlight color    | `#4f46e5`                           |
| `--carousel-success`         | Success state color       | `#10b981`                           |
| `--carousel-warning`         | Warning state color       | `#f59e0b`                           |
| `--carousel-danger`          | Danger/error color        | `#ef4444`                           |
| `--carousel-elastic-ease`    | Elastic easing function   | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| `--carousel-duration-normal` | Normal animation duration | `0.5s`                              |
| `--carousel-gap`             | Grid gap spacing          | `1.5rem`                            |
| `--carousel-radius`          | Border radius             | `0.75rem`                           |

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Folder Structure

```
elastic-slide-carousel-fintech-rj/
├── demo.html       # Self-contained HTML showcase
├── style.css       # Pure CSS with animations
└── README.md       # This documentation
```
