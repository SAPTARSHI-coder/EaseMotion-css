# Glassmorphism Input Field

Documentation demonstrating how to use the **Glassmorphism Input Field** component.

## Overview
A frosted-glass input field with a translucent background and a glowing focus ring.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<input type="text" class="ease-ginput" placeholder="Search" aria-label="Search" />
```

## CSS class naming conventions
- `.ease-glassmorphism-input-field` — root container
- `.ease-glassmorphism-input-field__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-ginput-accent: #6366f1;
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

Closes #79750
