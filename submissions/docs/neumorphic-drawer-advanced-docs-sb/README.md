# Neumorphic Drawer — advanced styling

Documentation guide for the **Neumorphic Drawer** component, focused on **advanced styling**.

## Overview
Advanced styling guide for the neumorphic drawer: soft inset/outset shadows, slide-in transitions, and scrim overlay.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-drawer-scrim" hidden></div>
<aside class="ease-drawer" aria-label="Menu" hidden>
  <nav class="ease-drawer__nav"><a href="#">Home</a><a href="#">Settings</a></nav>
</aside>
```

## CSS class naming conventions
- `.ease-neumorphic-drawer-advanced` — root container
- `.ease-neumorphic-drawer-advanced__<element>` — BEM-style child elements
- `.ease-neumorphic-drawer-advanced--<variant>` — appearance modifier classes
- `.is-active`, `.is-up`, `.is-down` — state modifier classes

## Custom CSS variable overrides
```css
:root {
  --ease-neu-bg: #6366f1;
  --ease-neu-shadow-light: #6366f1;
  --ease-neu-shadow-dark: #6366f1;
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

Closes #81538
