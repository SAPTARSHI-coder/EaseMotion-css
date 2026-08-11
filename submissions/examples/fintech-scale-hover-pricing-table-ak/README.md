# CSS Scale-Hover Pricing Table for Fintech Dashboard Layouts

## Description
Fixes #59405 — a pure CSS pricing table where each tier card scales up
smoothly on hover and keyboard focus, designed for fintech dashboard
plan/subscription pages. Includes a highlighted "recommended" tier.

## Usage
```html
<div class="ease-pricing-sh">
  <div class="ease-pricing-sh__tier">
    <p class="ease-pricing-sh__name">Basic</p>
    <p class="ease-pricing-sh__price">$0<span>/mo</span></p>
    <ul class="ease-pricing-sh__features">
      <li>Feature one</li>
    </ul>
    <button class="ease-pricing-sh__cta" type="button">Get Started</button>
  </div>

  <div class="ease-pricing-sh__tier ease-pricing-sh__tier--featured">
    <span class="ease-pricing-sh__badge">Most Popular</span>
    <p class="ease-pricing-sh__name">Pro</p>
    <p class="ease-pricing-sh__price">$29<span>/mo</span></p>
  </div>
</div>
```

Add `ease-pricing-sh__tier--featured` to highlight a tier as recommended,
with an optional `ease-pricing-sh__badge` label.

## Custom Properties
Uses `--ease-color-primary` (falls back to `#2563eb`) for the featured
tier accent, checkmarks, and CTA buttons — consistent with the framework's
existing custom property convention.

## Features
- Pure CSS/HTML — no JavaScript required
- Spring-like scale transform (`cubic-bezier(0.34, 1.56, 0.64, 1)`) on
  hover and `:focus-within`, per tier
- Featured tier scales further (1.06x vs 1.04x) with stronger shadow
- Fully keyboard accessible — tier cards respond to focus within them,
  CTA buttons have their own `:focus-visible` state
- Responsive — tiers stack vertically below 720px with a reduced scale
  amount to avoid layout jitter on narrow viewports
- Dark mode support via `prefers-color-scheme: dark`
- Respects `prefers-reduced-motion: reduce` — disables the scale
  transform, keeps border/shadow-only feedback instead

## Distinction from other pricing table submissions
This is a purely interaction-based (hover/focus scale) variant, separate
from a fade-in entrance animation pattern — no `@keyframes` or page-load
animation is used here, only responsive hover/focus transforms.

## Testing
Open `demo.html` in a browser. Hover or Tab through each tier to see the
scale interaction, resize the window to check responsive behavior, and
toggle your OS "reduce motion" setting to verify the fallback.