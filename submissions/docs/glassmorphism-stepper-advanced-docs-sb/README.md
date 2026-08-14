# Glassmorphism Stepper — advanced styling

Documentation guide for the **Glassmorphism Stepper** component, focused on **advanced styling**.

## Overview
A glassmorphism stepper with frosted backdrop, layered translucent surfaces, and a progress indicator that fills as steps complete.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<ol class="ease-stepper">
  <li class="ease-stepper__step is-complete">Account</li>
  <li class="ease-stepper__step is-active">Profile</li>
  <li class="ease-stepper__step">Verify</li>
</ol>
```

## CSS class naming conventions
- `.ease-{slug}` — root container
- `.ease-{slug}__<element>` — BEM-style child elements
- `.is-active`, `.is-complete`, `.is-up`, `.is-down` — state modifier classes

## Custom CSS variable overrides
```css
:root {
  --ease-glass-bg: #6366f1;
  --ease-glass-blur: #6366f1;
  --ease-step-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- Decorative icons are hidden from AT with `aria-hidden="true"` or `alt=""`.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For popovers/menus, Escape closes and returns focus to the trigger.

Closes #81528
