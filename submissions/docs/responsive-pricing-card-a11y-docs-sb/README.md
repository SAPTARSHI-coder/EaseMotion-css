# Responsive Pricing Card — accessibility integration

Documentation guide for the **Responsive Pricing Card** component, focused on **accessibility integration**.

## Overview
Accessibility guide for the responsive pricing card: aria-pressed on plan toggle, focus-visible CTA, and reduced-motion guards.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-pricing" role="group" aria-label="Pricing plan"><h3 class="ease-pricing__name" id="pn">Pro</h3><p class="ease-pricing__desc">For growing teams.</p><button class="ease-pricing__cta" aria-labelledby="pn">Select Pro</button></div>
```

## CSS class naming conventions
- `.ease-responsive-pricing-card-a11y` — root container
- `.ease-responsive-pricing-card-a11y__<element>` — BEM-style child elements
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

Closes #81581
