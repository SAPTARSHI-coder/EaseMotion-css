# SaaS Modern Filter Bar

Documentation demonstrating how to use the **SaaS Modern Filter Bar** component.

## Overview
accessibility integration

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
Accessibility guide for the SaaS Modern filter bar: aria-pressed on chips, role=group, focus-visible, reduced-motion.
```

## CSS class naming conventions
- `.ease-saas-modern-filter-bar-a11y` — root container
- `.ease-saas-modern-filter-bar-a11y__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  .ease-sfilter { display: flex; gap: 0.5rem; padding: 0.75rem; background: #1e293b; border-radius: 0.75rem; }
.ease-sfilter__chip { padding: 0.4rem 0.9rem; border: 1px solid #334155; background: transparent; color: #cbd5e1; border-radius: 999px; cursor: pointer; }
.ease-sfilter__chip.is-active { background: #6366f1; color: #fff; border-color: #6366f1; }
.ease-sfilter__chip:focus-visible { outline: 3px solid Highlight; outline-offset: 2px; }: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-current`, `aria-describedby`, `role`, and `aria-pressed` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For modals/tooltips, Escape closes and returns focus to the trigger.

Closes #81543
