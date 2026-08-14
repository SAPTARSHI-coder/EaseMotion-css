# Responsive Pricing Card — Basic Usage

## Overview
A responsive pricing card for presenting a plan, price, benefits, and primary action.
The layout adapts from wider desktop columns to narrow mobile screens.

## Markup
```html
<article class="pricing-card">
  <p class="pricing-card__eyebrow">Starter</p>
  <h2 class="pricing-card__title">Launch</h2>
  <p class="pricing-card__price">$19 <span>/ month</span></p>
  <ul class="pricing-card__features"><li>Unlimited projects</li><li>Email support</li></ul>
  <a class="pricing-card__action" href="#start">Choose plan</a>
</article>
```

## Class Naming
`pricing-card` is the component block.
Use element names for the eyebrow, title, price, features, and action.
Avoid selectors tied to unrelated page structure.

## Content Hierarchy
Keep the plan name and price prominent.
Use a short benefit list for quick comparison.
Make the primary action descriptive.

## Custom Properties
Expose surface, text, accent, radius, spacing, and shadow values.

## Responsive Behavior
Use a fluid width with a sensible maximum.
Let feature text wrap naturally.
Keep the action large enough for touch input.

## Accessibility
Use semantic headings and lists.
Ensure price and benefit text has sufficient contrast.
Use a real link when the action navigates to a plan flow.
Do not communicate plan differences through color alone.

## Keyboard Guidance
Links must have visible focus states.
Keep the card's interactive elements in a predictable order.

## Motion
Optional hover effects should respect reduced-motion preferences.

## Testing
Test mobile and desktop widths.
Test long plan names and benefit lists.
Test keyboard focus and zoom.
Test contrast and touch targets.

## Files
`README.md` contains usage documentation.
`demo.html` is the expanded example.
`style.css` contains clean, spaced CSS.

## Maintenance
Keep pricing data in application content.
Keep layout and visual styling in the component stylesheet.
