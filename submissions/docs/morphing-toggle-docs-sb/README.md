# Morphing Toggle

Documentation demonstrating how to use the **Morphing Toggle** component.

## Overview
A toggle switch whose knob morphs shape and slides on toggle, built on a checkbox.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<label class="ease-mtoggle"><input type="checkbox" class="ease-mtoggle__input" /><span class="ease-mtoggle__track"><span class="ease-mtoggle__knob"></span></span></label>
```

## CSS class naming conventions
- `.ease-morphing-toggle` — root container
- `.ease-morphing-toggle__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-mtoggle-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-current`, and `role` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.

Closes #78706
