# Glowing Stat Card — Glassmorphism

A glowing glassmorphism statistical card component created for
EaseMotion CSS issue #81450.

## Features

- Glassmorphism card surface
- Animated ambient glow
- Violet, cyan and pink variants
- Hover elevation effect
- Glass shine overlay
- Animated progress indicator
- Responsive desktop, tablet and mobile layouts
- Accessible focus-visible states
- `prefers-reduced-motion` support
- Pure HTML and CSS
- Zero JavaScript dependencies

## Variants

The demo includes three visual variants:

- `glass-stat-card--violet`
- `glass-stat-card--cyan`
- `glass-stat-card--pink`

## Basic Usage

```html
<article class="glass-stat-card glass-stat-card--violet">
  <div class="glass-stat-card__glow"></div>

  <div class="glass-stat-card__top">
    <span class="glass-stat-card__label">
      ACTIVE USERS
    </span>

    <span class="glass-stat-card__icon" aria-hidden="true">
      ↗
    </span>
  </div>

  <div class="glass-stat-card__value">
    24.8K
  </div>

  <div class="glass-stat-card__meta">
    <span class="glass-stat-card__change">
      +14.6%
    </span>

    <span class="glass-stat-card__period">
      vs last month
    </span>
  </div>

  <div class="glass-stat-card__progress" aria-hidden="true">
    <span></span>
  </div>
</article>