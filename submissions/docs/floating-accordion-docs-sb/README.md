# Floating Accordion

Documentation demonstrating how to use the **Floating Accordion** component.

## Overview
A floating accordion with panels that expand/collapse on click, animated with height transitions.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-accordion">
  <details class="ease-accordion__panel" open>
    <summary class="ease-accordion__header">Section 1</summary>
    <div class="ease-accordion__body">Content for section 1.</div>
  </details>
  <details class="ease-accordion__panel">
    <summary class="ease-accordion__header">Section 2</summary>
    <div class="ease-accordion__body">Content for section 2.</div>
  </details>
</div>
```

## CSS class naming conventions
- `.ease-floating-accordion` — root container
- `.ease-floating-accordion__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-accordion-bg: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-describedby`, `aria-current`, and `role` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For tooltips, Escape dismisses and returns focus to the trigger.

Closes #79799
