# Animated Stats Cards

Modern animated statistics cards built with pure HTML and CSS. Useful for dashboards, landing pages, analytics sections, and admin panels.

## Features

- Pure HTML and CSS implementation.
- Animated card entrance with staggered delay.
- Hover lift and glow effects.
- Colorful icon variants.
- Trend badges for growth and stability.
- Responsive grid layout.
- Supports `prefers-reduced-motion`.

## Usage

Copy the HTML structure from `demo.html` and link `style.css`.

```html
<article class="stat-card">
  <div class="stat-icon blue">
    <!-- SVG icon -->
  </div>

  <div class="stat-info">
    <h2>Total Users</h2>
    <p class="stat-value">24,580</p>
    <span class="stat-trend up">+12.4% this month</span>
  </div>
</article>