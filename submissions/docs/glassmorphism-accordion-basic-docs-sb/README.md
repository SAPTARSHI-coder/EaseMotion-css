# Glassmorphism Accordion — basic usage

Documentation guide for the **Glassmorphism Accordion** component, focused on **basic usage**.

## Overview
Basic usage guide for the glassmorphism accordion: a frosted details/summary accordion with an active state.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-gacc"><details class="ease-gacc__panel" open><summary class="ease-gacc__q">Item A</summary><div class="ease-gacc__a">Content A.</div></details><details class="ease-gacc__panel"><summary class="ease-gacc__q">Item B</summary><div class="ease-gacc__a">Content B.</div></details></div>
```

## CSS class naming conventions
- `.ease-glassmorphism-accordion-basic` — root container
- `.ease-glassmorphism-accordion-basic__<element>` — BEM-style child elements
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

Closes #81627
