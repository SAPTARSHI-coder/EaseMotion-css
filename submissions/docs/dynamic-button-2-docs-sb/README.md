# Dynamic Button

Documentation demonstrating how to use the **Dynamic Button** component.

## Overview
A button with a gradient that animates position on hover, a press scale, and a focus ring.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<button class="ease-dynbtn2">Save</button>
```

## CSS class naming conventions
- `.ease-dynamic-button-2` — root container
- `.ease-dynamic-button-2__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-dynbtn2-from: #6366f1;
  --ease-dynbtn2-to: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-current`, `aria-modal`, `role`, and `aria-expanded` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For modals, Escape closes and returns focus to the trigger.

Closes #78752
