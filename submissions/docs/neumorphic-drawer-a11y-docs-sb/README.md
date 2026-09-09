# Neumorphic Drawer — accessibility integration

Documentation guide for the **Neumorphic Drawer** component, focused on **accessibility integration**.

## Overview
Accessibility guide for the neumorphic drawer: dialog role, aria-modal, focus trap, and Escape to close with focus return.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-drawer-scrim" hidden></div>
<aside class="ease-drawer" role="dialog" aria-modal="true" aria-label="Menu" hidden>
  <nav class="ease-drawer__nav"><a href="#">Home</a><a href="#">Settings</a></nav>
  <button class="ease-drawer__close" aria-label="Close">×</button>
</aside>
```

## CSS class naming conventions
- `.ease-neumorphic-drawer-a11y` — root container
- `.ease-neumorphic-drawer-a11y__<element>` — BEM-style child elements
- `.ease-neumorphic-drawer-a11y--<variant>` — appearance modifier classes
- `.is-active`, `.is-today`, `.is-selected`, `.is-left`, `.is-right` — state modifier classes

## Custom CSS variable overrides
```css
:root {
  --ease-neu-bg: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `role`, `aria-modal`, `aria-pressed`, and `aria-describedby` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For popovers/drawers, Escape closes and returns focus to the trigger.

Closes #81539
