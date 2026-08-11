# Pulse-Active Popover — Marketing Landing Page

A pure CSS popover component with pulse-active ring animation for marketing landing page pricing layouts in EaseMotion CSS.

## What does this do?

Displays a pricing card grid for a marketing landing page. The featured plan CTA button has a continuous pulse ring animation that draws attention, and clicking it reveals a popover with plan details — all in pure CSS with no JavaScript.

## How is it used?

```html
<div class="pa-card pa-card--featured">
  <span class="pa-card__label">Most Popular</span>
  <input type="checkbox" id="pa-toggle-1" class="pa-toggle" aria-hidden="true">
  <h3 class="pa-card__name">Professional</h3>
  <p class="pa-card__price">$29<small>/mo</small></p>
  <ul class="pa-card__features">
    <li>Unlimited projects</li>
    <li>100 GB storage</li>
  </ul>
  <label for="pa-toggle-1" class="pa-cta" role="button" tabindex="0">
    Choose Pro
  </label>
  <div class="pa-popover" role="tooltip">
    <p class="pa-popover__title">Professional Plan</p>
    <p class="pa-popover__text">Everything in Starter plus unlimited projects.</p>
    <a href="#" class="pa-popover__link">Compare plans &rarr;</a>
  </div>
</div>
```

## Why is it useful?

Marketing landing pages need attention-grabbing CTAs that convert. The pulse-active ring animation creates a subtle, continuous visual cue that draws the eye to the featured plan without being intrusive. Combined with the popover for quick plan details, this creates a polished, conversion-focused pricing section using only CSS.

## Features

- **Pure CSS** — checkbox toggle for popover, no JavaScript
- **Pulse-active animation** — continuous ring pulse on featured CTA using box-shadow keyframes
- **Marketing-focused** — pricing card grid with featured plan highlight
- **Responsive** — auto-fit grid, single column on mobile
- **Accessible** — `role="tooltip"`, `aria-labelledby`, `aria-describedby`, focus-visible, `prefers-reduced-motion` support
- **Uses EaseMotion CSS variables** — colors, spacing, shadows, easing curves, font stack

## Files

- `demo.html` — self-contained demo page
- `style.css` — component styles and pulse animations
- `README.md` — this file
