# Pricing Table Component

A feature comparison / pricing table component built with CSS Grid, featuring plan columns, highlighted "Most Popular" plan, checkmark/cross indicators, CTA buttons, and responsive card stacking on mobile.

## Features

- **Grid layout**: responsive `auto-fit` columns, stacked cards on mobile
- **`.ease-pricing-plan`**: individual plan card with border, radius, hover lift
- **`.ease-pricing-featured`**: highlighted "Most Popular" column with primary color border, scale, and enhanced shadow
- **`.ease-pricing-badge`**: absolutely positioned pill badge (e.g., "Most Popular")
- **`.ease-pricing-amount` / `.ease-pricing-currency` / `.ease-pricing-period`**: pricing display
- **`.ease-pricing-features`**: feature list with `.ease-pricing-check` (green) and `.ease-pricing-cross` (red)
- **`.ease-pricing-cta`**: full-width CTA button
- **Dark mode**: compatible

## Usage

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css@latest/easemotion.min.css">
<link rel="stylesheet" href="style.css">

<div class="ease-pricing-table">
  <div class="ease-pricing-plan">
    <h3 class="ease-pricing-name">Starter</h3>
    <div class="ease-pricing-amount">$19</div>
    <div class="ease-pricing-period">per month</div>
    <ul class="ease-pricing-features">
      <li><span class="ease-pricing-check">&#10003;</span> Feature</li>
      <li><span class="ease-pricing-cross">&#10007;</span> No feature</li>
    </ul>
    <a href="#" class="ease-pricing-cta">Get Started</a>
  </div>
</div>
```

Fixes #12458
