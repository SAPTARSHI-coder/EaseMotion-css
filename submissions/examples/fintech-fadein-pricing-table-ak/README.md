# CSS Fade-In Pricing Table for Fintech Dashboard Layouts

## Description
Fixes #59402 — a pure CSS pricing table for fintech dashboard plan/subscription
pages, with a staggered fade-in-up entrance animation for each tier and a
highlighted "recommended" middle tier.

## Usage
```html
<div class="ease-pricing">
  <div class="ease-pricing__tier">
    <p class="ease-pricing__name">Basic</p>
    <p class="ease-pricing__price">$0<span>/mo</span></p>
    <p class="ease-pricing__desc">Short description.</p>
    <ul class="ease-pricing__features">
      <li>Feature one</li>
      <li>Feature two</li>
    </ul>
    <button class="ease-pricing__cta" type="button">Get Started</button>
  </div>

  <div class="ease-pricing__tier ease-pricing__tier--featured">
    <span class="ease-pricing__badge">Most Popular</span>
    <p class="ease-pricing__name">Pro</p>
    <p class="ease-pricing__price">$29<span>/mo</span></p>
    <!-- ... -->
  </div>
</div>
```

Add `ease-pricing__tier--featured` to any tier to visually highlight it as
recommended, with an optional `ease-pricing__badge` label.

## Custom Properties
Uses `--ease-color-primary` (falls back to `#2563eb`) for the featured tier
accent, checkmarks, and CTA buttons — consistent with the framework's
existing custom property convention.

## Features
- Pure CSS/HTML — no JavaScript required
- Staggered fade-in-up entrance animation per tier (`nth-child` delays)
- Featured/recommended tier with distinct styling and hover lift
- Fully keyboard accessible (`:focus-visible` on CTA buttons)
- Responsive — tiers stack vertically below 720px
- Dark mode support via `prefers-color-scheme: dark`
- Respects `prefers-reduced-motion: reduce` — skips the fade-in animation
  entirely, tiers render at full opacity immediately

## Testing
Open `demo.html` in a browser and reload to see the staggered fade-in.
Resize the window to check responsive stacking, and toggle your OS
"reduce motion" setting to verify the fallback.