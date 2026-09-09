# Animated Pricing Table

A modern, fully responsive pricing table component built with pure HTML and CSS. It includes an animated monthly/yearly billing toggle, glowing popular card, staggered entrance animations, and smooth hover effects.

## Features

- **Pure CSS Billing Toggle**
  - Switch between monthly and yearly pricing without JavaScript.
  - Uses the checkbox hack and CSS sibling selectors.

- **Animated Pricing Cards**
  - Smooth staggered entrance animations.
  - Hover lift effect with glowing border and background highlight.

- **Popular Plan Highlight**
  - Gradient border.
  - Animated shine badge.
  - Slight elevation to draw attention.

- **Modern UI Effects**
  - Glassmorphism-style cards.
  - Gradient text.
  - Soft ambient background glows.
  - Button shine hover animation.

- **Responsive Design**
  - Three-column layout on desktop.
  - Single-column layout on tablets and mobile.

- **Accessibility**
  - Keyboard-accessible toggle input.
  - Visible focus state.
  - Supports `prefers-reduced-motion`.

## Usage

Include the HTML structure from `demo.html` and link `style.css`.

```html
<input type="checkbox" id="billing-toggle" class="billing-toggle-input" />

<main class="pricing-page">
  <!-- Pricing header, toggle, and cards -->
</main>