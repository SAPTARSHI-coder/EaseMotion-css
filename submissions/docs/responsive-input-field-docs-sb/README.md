# Responsive Input Field

Documentation demonstrating how to use the **Responsive Input Field** component.

## Overview
A responsive input field with a floating label and a focus ring, adapting padding at small widths.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<label class="ease-field">
  <input type="text" class="ease-field__input" placeholder=" " aria-label="Username" />
  <span class="ease-field__label">Username</span>
</label>
```

## CSS class naming conventions
- `.ease-responsive-input-field` — root container
- `.ease-responsive-input-field__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-field-accent: #6366f1;
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

Closes #79816
