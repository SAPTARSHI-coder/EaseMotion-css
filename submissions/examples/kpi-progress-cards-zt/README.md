# KPI Progress Cards

## Overview

A collection of four KPI progress cards for SaaS dashboards, each showing a metric title, main value, percentage change badge, and animated progress bar. The design uses glassmorphism-inspired panels and smooth hover transitions for a modern admin interface.

## Features

- Four responsive KPI cards with distinct accent colors
- Metric title, large value, and trend badge on every card
- Animated progress bar for visual goal tracking
- Hover elevation effect with smooth transitions
- Glassmorphism-style dashboard presentation
- Fully self-contained pure HTML and CSS implementation

## Usage

```html
<link rel="stylesheet" href="style.css">
<main class="kpi-dashboard">
  <header class="dashboard-header">
    <p class="eyebrow">KPI Dashboard</p>
    <h1>Performance overview</h1>
    <p class="dashboard-copy">Track your core business metrics with animated progress cards and modern glassmorphism UI styling.</p>
  </header>

  <section class="kpi-grid">
    <article class="kpi-card card-blue">
      <div class="kpi-top">
        <p class="kpi-label">New revenue</p>
        <span class="kpi-badge badge-positive">+18.4%</span>
      </div>
      <h2>$24.7K</h2>
      <div class="kpi-progress">
        <span class="progress-bar progress-blue" style="width: 76%;"></span>
      </div>
      <p class="kpi-footnote">Goal progress toward Q2 upsell targets.</p>
    </article>
  </section>
</main>
```

## Why it fits EaseMotion CSS

This submission is self-contained and opens directly in the browser with no JavaScript. It conforms to EaseMotion CSS principles by using reusable, responsive CSS-driven dashboard cards with clean motion, modern SaaS typography, and accent-driven visual hierarchy.
