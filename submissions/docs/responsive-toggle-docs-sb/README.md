# Responsive Toggle

Documentation demonstrating how to use the **Responsive Toggle** component.

## Overview
A toggle switch that adapts its size on small screens, built on a checkbox.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<label class="ease-rtoggle"><input type="checkbox" class="ease-rtoggle__input" /><span class="ease-rtoggle__track"><span class="ease-rtoggle__knob"></span></span></label>
```

## CSS class naming conventions
- `.ease-responsive-toggle` — root container
- `.ease-responsive-toggle__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-rtoggle-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-current`, `aria-expanded`, `role`, and `aria-roledescription` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.

Closes #79688
