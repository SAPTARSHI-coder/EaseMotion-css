# Dashboard Stats Widget

## Overview

A modern SaaS dashboard stats widget featuring four analytics cards for Revenue, Active Users, Conversion Rate, and Growth. Each card includes trend indicators, hover lift, and glow accents for a polished dashboard presentation.

## Why it fits EaseMotion CSS

This component is fully self-contained and built with pure HTML and CSS. It delivers a professional analytics UI with responsive layout and motion-friendly hover effects, aligning with EaseMotion CSS criteria for reusable, production-ready components.

## Usage example

```html
<link rel="stylesheet" href="style.css">
<section class="stats-grid">
  <article class="stat-card stat-revenue">
    <div class="stat-card-top">
      <p class="stat-title">Revenue</p>
      <span class="trend trend-up">+12%</span>
    </div>
    <h2>$124.8k</h2>
    <p class="stat-copy">Monthly revenue with strong gain from paid plans and onboarding campaigns.</p>
  </article>
</section>
```

## Customization options

- Update colors by changing the root variables: `--accent`, `--highlight`, and text tones.
- Adjust card radius and shadow depth in `.stat-card` for different visual density.
- Change trend badge styling in `.trend` and `.trend-up` to support negative or neutral indicators.
- Modify typography in `.stat-title`, `.stat-card h2`, and `.stat-copy` for spacing and scale.
