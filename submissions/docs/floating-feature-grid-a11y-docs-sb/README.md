# Floating Feature Grid — accessibility integration

Documentation guide for the **Floating Feature Grid** component, focused on **accessibility integration**.

## Overview
Accessibility guide for the floating feature grid: role=list, aria-label per item, focus-visible, reduced-motion.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<ul class="ease-ffg" role="list" aria-label="Features"><li class="ease-ffg__item" role="listitem"><h3>Fast</h3><p>Snappy perf.</p></li><li class="ease-ffg__item" role="listitem"><h3>Secure</h3><p>Encrypted.</p></li></ul>
```

## CSS class naming conventions
- `.ease-floating-feature-grid-a11y` — root container
- `.ease-floating-feature-grid-a11y__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-ffg-bg: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements where possible.
- `:focus-visible` outlines for keyboard users.
- `aria-label`, `aria-current`, `aria-modal`, `role` used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus; Enter/Space to activate; Escape closes modals.

Closes #81626
