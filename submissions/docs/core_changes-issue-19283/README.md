# Animated Pricing Cards

Pure CSS animated pricing card component with 3 tiers, hover lift effect, monthly/yearly toggle, and staggered entrance animation. Zero JavaScript.

## Features

- **3 pricing tiers**: Basic ($9/mo), Pro ($29/mo, featured), Enterprise ($99/mo)
- **Featured plan** with gradient border glow via `::before` pseudo-element and "Most Popular" badge
- **Hover lift** — cards rise 8px with elevated box-shadow
- **Monthly/Yearly toggle** — checkbox hack with sliding toggle switch, toggles price display between monthly and yearly rates
- **Feature lists** with checkmark icons per tier
- **Staggered entrance** via `@keyframes cardRise` with `nth-child` animation delays (0.1s, 0.25s, 0.4s)
- **Responsive CSS Grid** — `auto-fit, minmax(280px, 1fr)` on desktop, single column on mobile
- **Pure CSS, zero JavaScript**
- **`prefers-reduced-motion`** support

## Files

| File | Description |
|------|-------------|
| `demo.html` | 3 pricing cards with billing toggle |
| `style.css` | All styles, animations, toggle logic, responsive, reduced-motion |
| `README.md` | This documentation |

## Usage

```html
<input type="checkbox" id="billing-toggle">
<div class="pricing-grid">
  <article class="card">
    <h2>Basic</h2>
    <div class="card-price">
      <span class="price-monthly">$9</span>
      <span class="price-yearly">$90</span>
      <span class="period-monthly">/month</span>
      <span class="period-yearly">/year</span>
    </div>
    <ul class="card-features">
      <li>✓ 5 projects</li>
    </ul>
    <button class="card-cta">Get Started</button>
  </article>
</div>
```

## How the Toggle Works

A hidden `<input type="checkbox">` controls billing period. When checked, CSS sibling selectors hide monthly prices and show yearly prices. The toggle switch knob slides left/right with a spring-like `cubic-bezier` transition.

## Keyframes

| Keyframe | Purpose |
|----------|---------|
| `cardRise` | Cards fade in and rise up from 30px below |

Fixes #19283
