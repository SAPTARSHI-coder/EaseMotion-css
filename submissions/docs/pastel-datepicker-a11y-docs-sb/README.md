# Pastel Datepicker

Documentation demonstrating how to use the **Pastel Datepicker** component.

## Overview
accessibility integration

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
Accessibility guide for the pastel datepicker: role=dialog, aria-label on grid, focus-visible on cells, reduced-motion.
```

## CSS class naming conventions
- `.ease-pastel-datepicker-a11y` — root container
- `.ease-pastel-datepicker-a11y__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  .ease-pdate { padding: 1rem; background: #fdf2f8; color: #831843; border-radius: 0.75rem; }
.ease-pdate__header { padding: 0.5rem; text-align: center; background: linear-gradient(90deg: #6366f1;
  #fbcfe8: #6366f1;
  #ddd6fe); border-radius: 0.5rem; font-weight: 700; }
.ease-pdate__grid { border-collapse: collapse; margin-top: 0.5rem; }
.ease-pdate__grid td { padding: 0.5rem; text-align: center; border-radius: 0.375rem; cursor: pointer; }
.ease-pdate__grid td.is-today { outline: 2px solid #f472b6; }
.ease-pdate__grid td:focus-visible { outline: 3px solid Highlight; outline-offset: 2px; }: #6366f1;
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

Closes #81552
