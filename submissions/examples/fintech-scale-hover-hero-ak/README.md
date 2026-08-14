# CSS Scale-Hover Hero Section for Fintech Dashboard Layouts

## Description
Fixes #59390 — a pure CSS hero section designed for fintech dashboard
overview/landing pages, with layered scale-hover interactions: a subtle
lift on the hero card itself, a spring-scale CTA button, and individually
interactive stat cards.

## Usage
```html
<section class="ease-hero">
  <span class="ease-hero__eyebrow">Portfolio Overview</span>
  <h2 class="ease-hero__title">Your investments, working harder</h2>
  <p class="ease-hero__subtitle">Short supporting copy.</p>

  <button class="ease-hero__cta" type="button">View Full Report →</button>

  <div class="ease-hero__stats">
    <div class="ease-hero__stat" tabindex="0">
      <span class="ease-hero__stat-label">Total Balance</span>
      <span class="ease-hero__stat-value">$128,450</span>
    </div>
    <div class="ease-hero__stat" tabindex="0">
      <span class="ease-hero__stat-label">Monthly Return</span>
      <span class="ease-hero__stat-value ease-hero__stat-value--positive">+4.2%</span>
    </div>
  </div>
</section>
```

Add `ease-hero__stat-value--positive` or `--negative` to color-code stat values.

## Custom Properties
Uses `--ease-color-primary` (falls back to `#2563eb`) for the eyebrow text,
CTA button background, and focus outlines — consistent with the framework's
existing custom property convention.

## Features
- Pure CSS/HTML — no JavaScript required
- Layered scale-hover interactions: hero card (1.015x lift), CTA button
  (1.06x spring scale), and individual stat cards (1.05x scale)
- Spring-like easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`) on all
  interactive elements
- Fully keyboard accessible — stat cards and CTA both support `:focus-visible`
- Responsive — stats stack vertically below 640px, title/padding scale down
- Dark mode support via `prefers-color-scheme: dark`
- Respects `prefers-reduced-motion: reduce` — disables all scale transforms,
  keeps shadow/background-only feedback instead

## Testing
Open `demo.html` in a browser. Hover the hero card, the CTA button, and
each stat card individually to see the layered scale effects. Resize the
window to check responsive stacking, and toggle your OS "reduce motion"
setting to verify the fallback.