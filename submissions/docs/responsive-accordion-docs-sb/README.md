# Responsive Accordion

Documentation demonstrating how to use the **Responsive Accordion** component.

## Overview
An accordion using native details/summary that stacks on small screens with smooth open/close.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-racc"><details class="ease-racc__panel" open><summary class="ease-racc__q">Section A</summary><div class="ease-racc__a">Content A.</div></details><details class="ease-racc__panel"><summary class="ease-racc__q">Section B</summary><div class="ease-racc__a">Content B.</div></details></div>
```

## CSS class naming conventions
- `.ease-responsive-accordion` — root container
- `.ease-responsive-accordion__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-racc-bg: #6366f1;
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

Closes #78835
