# Dynamic Button

Documentation demonstrating how to use the **Dynamic Button** component.

## Overview
A button with a gradient background that shifts on hover, a press scale, and a focus ring.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<button class="ease-dynbtn">Submit</button>
```

## CSS class naming conventions
- `.ease-dynamic-button` — root container
- `.ease-dynamic-button__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-dynbtn-from: #6366f1;
  --ease-dynbtn-to: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-describedby`, `aria-valuenow`, `role`, and `aria-selected` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.

Closes #78551
