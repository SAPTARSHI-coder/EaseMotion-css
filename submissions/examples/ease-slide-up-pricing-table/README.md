# Ease Slide-Up Pricing Table — SaaS Showcase

## Description
A SaaS-styled pricing table where cards slide straight up into view on load, staggered per card, with the featured plan getting a slightly larger entrance scale. Includes a pure CSS monthly/annual billing toggle that swaps the displayed price across all cards simultaneously — no JavaScript required for either the entrance animation or the billing switch.

## Features
- Vertical slide-up entrance animation, staggered across cards
- Featured plan gets elevated shadow, accent border, and a larger scale on entrance
- Pure CSS billing toggle (monthly ↔ annual) using `:has()` to swap price display across the whole table from a single checkbox
- "Save 20%" badge next to the annual option
- Fully keyboard accessible (`role="list"`/`"listitem"`, real `<a>` CTAs, checkbox toggle with visible `:focus-visible`)
- Fully responsive (cards stack full-width, featured scale removed, on narrow viewports)
- Fully customizable via CSS custom properties
- Respects `prefers-reduced-motion`

## Usage
```html
<div class="ease-saas-pricing">
  <div class="billing-toggle-row">
    <span class="billing-label">Monthly</span>
    <input type="checkbox" id="billingToggle" class="toggle-input" />
    <label for="billingToggle" class="toggle-switch" aria-label="Toggle annual billing"></label>
    <span class="billing-label">Annual</span>
    <span class="save-badge">Save 20%</span>
  </div>

  <div class="pricing-grid" role="list" aria-label="Pricing plans">
    <div class="pricing-card" role="listitem">
      <p class="plan-name">Starter</p>
      <div class="price-display">
        <div class="price-value monthly"><span class="amount">$12</span><span class="period">/ month</span></div>
        <div class="price-value annual"><span class="amount">$115</span><span class="period">/ year</span></div>
      </div>
      <ul class="plan-features"><li><svg>...</svg>Feature</li></ul>
      <a href="#" class="plan-cta">Start Free Trial</a>
    </div>
  </div>
</div>
```
Every card needs both a `.price-value.monthly` and `.price-value.annual` block — the toggle swaps their visibility across the entire table at once via a `:has()` selector on the shared `.ease-saas-pricing` ancestor.

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--slide-duration` | `0.7s` | Card slide-up entrance duration |
| `--slide-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Timing function |
| `--stagger` | `0.13s` | Delay increment between cards |
| `--accent` | `#6366f1` | Accent color (toggle, featured border, CTA) |
| `--radius` | `18px` | Card corner rounding |

## Browser Note
The billing toggle relies on the CSS `:has()` selector, supported in all current major browsers (Chrome/Edge 105+, Safari 15.4+, Firefox 121+). In unsupported browsers, both price values remain visible stacked rather than failing — a graceful degradation rather than a broken state.

## Accessibility
Cards use `role="list"`/`role="listitem"` semantics with real `<a>` CTA elements. Respects `prefers-reduced-motion` by disabling the slide-up entrance while preserving the featured card's static scale distinction.

## Files
- `demo.html` — live working example with 3 SaaS pricing tiers and a working billing toggle
- `style.css` — component styles and all animations
- `README.md` — this file