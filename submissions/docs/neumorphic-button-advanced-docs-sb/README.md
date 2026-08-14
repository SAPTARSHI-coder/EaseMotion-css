# Neumorphic Button — advanced styling

Documentation guide for the **Neumorphic Button** component, focused on **advanced styling**.

## Overview
Advanced styling for the neumorphic button: a pressed state with an inset shadow and a hover raise.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<button class="ease-nbtn">Neumorphic</button>
```

## CSS class naming conventions
- `.ease-neumorphic-button-advanced` — root container
- `.ease-neumorphic-button-advanced__<element>` — BEM-style child elements
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

Closes #81631
