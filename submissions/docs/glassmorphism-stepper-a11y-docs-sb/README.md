# Glassmorphism Stepper — accessibility integration

Documentation guide for the **Glassmorphism Stepper** component, focused on **accessibility integration**.

## Overview
Accessibility guide for the glassmorphism stepper: ARIA roles for steps, keyboard navigation between steps, and reduced-motion support.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<ol class="ease-stepper" role="list">
  <li class="ease-stepper__step is-complete" aria-current="step">Account</li>
  <li class="ease-stepper__step is-active" aria-current="step">Profile</li>
  <li class="ease-stepper__step">Verify</li>
</ol>
```

## CSS class naming conventions
- `.ease-glassmorphism-stepper-a11y` — root container
- `.ease-glassmorphism-stepper-a11y__<element>` — BEM-style child elements
- `.ease-glassmorphism-stepper-a11y--<variant>` — appearance modifier classes
- `.is-active`, `.is-up`, `.is-down` — state modifier classes

## Custom CSS variable overrides
```css
:root {
  --ease-step-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-current`, `aria-pressed`, `aria-label`, and `role` attributes are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons/chips.
- For popovers/drawers, Escape closes and returns focus to the trigger.

Closes #81529
