# Neumorphic Button — accessibility integration

Documentation guide for the **Neumorphic Button** component, focused on **accessibility integration**.

## Overview
Accessibility guide for the neumorphic button: focus-visible ring, aria-pressed example, reduced-motion guard.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<button class="ease-nbtn" aria-pressed="false">Toggle</button>
```

## CSS class naming conventions
- `.ease-neumorphic-button-a11y` — root container
- `.ease-neumorphic-button-a11y__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-neu-bg: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements where possible.
- `:focus-visible` outlines for keyboard users.
- `aria-label`, `aria-current`, `aria-modal`, `role` used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus; Enter/Space to activate; Escape closes modals.

Closes #81632
