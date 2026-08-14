# Glassmorphism Accordion — advanced styling

Documentation guide for the **Glassmorphism Accordion** component, focused on **advanced styling**.

## Overview
Advanced styling for the glassmorphism accordion: an open panel with a gradient accent border and smooth expand.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-gacc"><details class="ease-gacc__panel is-open" open><summary class="ease-gacc__q">Item A</summary><div class="ease-gacc__a">Content A.</div></details></div>
```

## CSS class naming conventions
- `.ease-glassmorphism-accordion-advanced` — root container
- `.ease-glassmorphism-accordion-advanced__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-gacc-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements where possible.
- `:focus-visible` outlines for keyboard users.
- `aria-label`, `aria-current`, `aria-modal`, `role` used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus; Enter/Space to activate; Escape closes modals.

Closes #81628
