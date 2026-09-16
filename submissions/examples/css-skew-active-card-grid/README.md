# CSS Skew-Active Card Grid for Fintech Dashboard Layouts

An interactive, responsive Fintech Dashboard Card Grid built with pure HTML5 and CSS3. Featuring glassmorphic frosted glass panels, custom color gradient accents, statistical indicators, and accessible 3D skew-active micro-interactions on hover, focus, and press.

---

## Overview

The **Skew-Active Card Grid** is designed for modern executive dashboards, fintech platforms, and crypto portfolios. It provides visual feedback through dynamic CSS skew transformations (`skewX` / `skewY` with 3D perspective) without relying on heavy JavaScript libraries.

---

## Features

- **Pure HTML5 & CSS3**: Zero JavaScript dependencies, lightweight and performant.
- **Skew-Active Animation**: Interactive 3D skew and elevation transitions on hover (`:hover`), focus (`:focus-visible`), and click (`:active`).
- **Glassmorphism Design**: Frosted glass surface using `backdrop-filter: blur()`, subtle border highlights, and dark-mode backdrop ambient glows.
- **Fintech Card Variants**: Includes pre-configured cards for **Revenue**, **Portfolio Valuation**, **Active Investments**, and **Monthly Growth Rate**.
- **CSS Custom Properties**: Fully customizable design tokens for colors, angles, shadows, and transitions.
- **Accessibility & Focus Ring**: Keyboard navigable (`tabindex="0"`) with custom `:focus-visible` indicators and semantic HTML5 landmarks.
- **Motion Preference Support**: Full `@media (prefers-reduced-motion: reduce)` support for users sensitive to motion.
- **Responsive Layout**: Flexible CSS Grid arrangement (`repeat(auto-fit, minmax(260px, 1fr))`) for mobile, tablet, and desktop views.

---

## Folder Structure

```
css-skew-active-card-grid/
├── demo.html    # HTML5 interactive showcase
├── style.css    # Pure CSS styles, design tokens, and animations
└── README.md    # Documentation & usage guide
```

---

## Installation

Simply copy `style.css` or link it directly into your HTML page:

```html
<link rel="stylesheet" href="path/to/style.css">
```

---

## Usage

Include the HTML structure for the grid and cards in your page. Each card uses `tabindex="0"` for accessibility and appropriate card variant modifiers (e.g. `card--revenue`, `card--portfolio`).

### HTML Example

```html
<main class="card-grid" aria-label="Fintech Statistics Grid">
  <article class="card card--revenue" tabindex="0" aria-labelledby="revenue-title">
    <div class="card-glass-sheen" aria-hidden="true"></div>
    
    <div class="card-header">
      <div class="card-icon-container">
        <!-- SVG Icon -->
      </div>
      <span class="trend-badge trend-badge--up">+14.2%</span>
    </div>

    <div class="card-body">
      <h2 id="revenue-title" class="card-title">Total Revenue</h2>
      <div class="card-value-group">
        <span class="card-currency">$</span>
        <span class="card-value">128,450</span>
        <span class="card-decimal">.00</span>
      </div>
      <p class="card-subtext">+$15,920 vs previous month</p>
    </div>

    <div class="card-footer">
      <div class="progress-bar-container">
        <div class="progress-bar-track">
          <div class="progress-bar-fill" style="width: 85.6%;"></div>
        </div>
      </div>
    </div>
  </article>
</main>
```

---

## CSS Variables

The component uses root CSS variables for quick customization of theme colors, skew angles, and blur intensity:

```css
:root {
  /* Colors */
  --bg-primary: #0a0d14;
  --bg-card: rgba(18, 24, 38, 0.7);
  --bg-card-hover: rgba(24, 32, 50, 0.85);

  /* Skew Transformation Angles */
  --skew-hover-x: -2.5deg;
  --skew-hover-y: 1deg;
  --skew-active-x: 1.5deg;
  --skew-active-y: -0.5deg;

  /* Glassmorphism */
  --border-card: rgba(255, 255, 255, 0.08);
  --glass-blur: 16px;

  /* Accent Gradients */
  --gradient-revenue: linear-gradient(135deg, #10b981 0%, #059669 100%);
  --gradient-portfolio: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  --gradient-investment: linear-gradient(135deg, #06b6d4 0%, #0284c7 100%);
  --gradient-growth: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}
```

---

## Customization

### Adjusting Skew Intensity
To increase or soften the skew effect, update the `--skew-hover-x` and `--skew-hover-y` variables in your CSS:

```css
:root {
  --skew-hover-x: -4deg;
  --skew-hover-y: 2deg;
}
```

### Adding New Card Variants
Create a new modifier class for custom themes:

```css
.card--custom::before {
  background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
}

.card--custom:hover {
  box-shadow: var(--shadow-card-hover), 0 0 30px rgba(236, 72, 153, 0.25);
}
```

---

## Accessibility

- **Keyboard Navigation**: Cards are keyboard focusable via `tabindex="0"`.
- **Focus Rings**: High-contrast, custom outline indicators (`:focus-visible`).
- **Semantic HTML**: Built using `<article>`, `<header>`, `<main>`, `<h1-h2>`, and ARIA attributes (`aria-labelledby`, `aria-hidden`).
- **Reduced Motion**: Automatically simplifies animation curves and disables 3D skew effects when `@media (prefers-reduced-motion: reduce)` is active.

---

## Responsive Design

The card grid utilizes auto-fit CSS Grid layout. On screens smaller than `768px`, the grid seamlessly stacks into a single column layout with adjusted header padding.

---

## Browser Compatibility

- Chrome / Edge 88+
- Firefox 103+
- Safari 14.1+ (supports `-webkit-backdrop-filter`)
