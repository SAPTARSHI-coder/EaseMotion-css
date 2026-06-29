# Pricing Toggle Cards

## Overview

A modern SaaS pricing section that shows three tier cards with a visual monthly/yearly toggle. The component uses clean typography, hover lift, and a featured plan highlight for a production-ready pricing UI.

## Why it fits EaseMotion CSS

This submission is self-contained and built with pure HTML and CSS. It delivers polished dashboard-style motion and responsive layout without JavaScript, matching the EaseMotion CSS focus on reusable, production-quality UI components.

## Usage example

```html
<link rel="stylesheet" href="style.css">
<section class="pricing-grid">
  <article class="pricing-card">
    <span class="pricing-badge">Starter</span>
    <h2>$19</h2>
    <p class="pricing-cycle">per month</p>
    <p class="pricing-copy">Essential tools for small teams and early-stage projects.</p>
    <ul class="pricing-features">
      <li>Up to 5 team members</li>
      <li>Basic analytics</li>
      <li>Email support</li>
    </ul>
    <a class="btn btn-primary" href="#">Choose Starter</a>
  </article>
</section>
```

## Customization guidance

- Change the accent colors by updating `--accent` and `--highlight`.
- Adjust card depth via `box-shadow` on `.pricing-card` and `.pricing-card:hover`.
- Modify the toggle style by changing `.pricing-toggle` and `.toggle-pill` padding or colors.
- Update typography in `.hero-panel h1`, `.pricing-card h2`, and `.pricing-copy` for refined spacing.
