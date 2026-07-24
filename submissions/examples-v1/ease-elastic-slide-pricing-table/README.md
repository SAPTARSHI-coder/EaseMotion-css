# Ease Elastic-Slide Pricing Table

## Description
An accessible pricing table where each card slides in from alternating directions with an elastic/spring bounce (`cubic-bezier(0.34, 1.56, 0.64, 1)` overshoot easing), staggered across cards. The featured plan is visually emphasized and its badge pops in slightly after the card settles. Pure CSS, zero JavaScript.

## Features
- Elastic/spring slide-in entrance per card, alternating left/right direction
- Staggered timing across cards for a cascading reveal
- Featured plan gets elevation, accent border, and a bouncing badge
- Fully keyboard accessible — semantic `role="list"`/`"listitem"`, real `<a>` CTA links with visible `:focus-visible` outlines
- Fully responsive (cards stack full-width on narrow viewports)
- Fully customizable via CSS custom properties
- Respects `prefers-reduced-motion`

## Usage
```html
<div class="ease-pricing-table" role="list" aria-label="Pricing plans">
  <div class="pricing-card" role="listitem" style="--slide-from: -60px;">
    <p class="plan-name">Starter</p>
    <div class="plan-price">
      <span class="amount">$9</span>
      <span class="period">/ month</span>
    </div>
    <p class="plan-desc">Plan description.</p>
    <ul class="plan-features">
      <li><svg>...</svg>Feature one</li>
    </ul>
    <a href="#" class="plan-cta">Choose Plan</a>
  </div>

  <div class="pricing-card is-featured" role="listitem" style="--slide-from: 60px;">
    <span class="featured-badge">Most Popular</span>
    <!-- same structure as above -->
  </div>
</div>
```
Set `--slide-from` per card (negative for slide-from-left, positive for slide-from-right) to control entrance direction. Add `.is-featured` to highlight a plan.

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--elastic-duration` | `0.9s` | Slide-in animation duration |
| `--elastic-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Elastic/bounce timing function |
| `--stagger` | `0.12s` | Delay increment between cards |
| `--accent` | `#6366f1` | Accent color (featured border, CTA, checkmarks) |
| `--radius` | `16px` | Card corner rounding |

## Accessibility
Cards use `role="list"`/`role="listitem"` semantics, CTAs are real anchor elements (not `<div>`s) with visible `:focus-visible` outlines, and color contrast follows standard text/background ratios. Respects `prefers-reduced-motion` by disabling all entrance animations, showing cards in their final settled position immediately (featured card keeps its static elevation offset).

## Files
- `demo.html` — live working example with 3 pricing tiers, one featured
- `style.css` — component styles and all animations
- `README.md` — this file