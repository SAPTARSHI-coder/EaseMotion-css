# Glassmorphism Accordion — accessibility integration

Documentation guide for the **Glassmorphism Accordion** component, focused on **accessibility integration**.

## Overview
Accessibility guide for the glassmorphism accordion: aria-expanded on summary, region role for panel, focus-visible, reduced-motion.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-gacc"><details class="ease-gacc__panel" open><summary class="ease-gacc__q" aria-expanded="true" aria-controls="ga">Item A</summary><div id="ga" class="ease-gacc__a" role="region">Content A.</div></details></div>
```

## CSS class naming conventions
- `.ease-glassmorphism-accordion-a11y` — root container
- `.ease-glassmorphism-accordion-a11y__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-gacc-bg: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements where possible.
- `:focus-visible` outlines for keyboard users.
- `aria-label`, `aria-current`, `aria-modal`, `role` used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus; Enter/Space to activate; Escape closes modals.

Closes #81629
