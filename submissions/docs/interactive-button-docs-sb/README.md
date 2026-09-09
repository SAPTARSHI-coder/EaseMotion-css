# Interactive Button

Documentation demonstrating how to use the **Interactive Button** component.

## Overview
A button with a ripple on click, a glow on hover, and a focus ring, responding to mouse and keyboard.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<button class="ease-ibtn">Click me</button>
```

## CSS class naming conventions
- `.ease-interactive-button` — root container
- `.ease-interactive-button__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-ibtn-accent: #6366f1;
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

Closes #78696
