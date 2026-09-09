# Responsive Pricing Card — advanced styling

Documentation guide for the **Responsive Pricing Card** component, focused on **advanced styling**.

## Overview
Advanced styling for the responsive pricing card: a highlighted featured plan with a gradient border and a scale-on-hover CTA.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-pricing is-featured"><div class="ease-pricing__head"><h3 class="ease-pricing__name">Pro</h3><span class="ease-pricing__price">$19</span></div><button class="ease-pricing__cta">Choose Pro</button></div>
```

## CSS class naming conventions
- `.ease-responsive-pricing-card-advanced` — root container
- `.ease-responsive-pricing-card-advanced__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-pricing-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-pressed`, `aria-expanded`, `aria-selected`, `role`, and `aria-controls` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For accordions/dropdowns, Escape closes and returns focus to the trigger.

Closes #81580
