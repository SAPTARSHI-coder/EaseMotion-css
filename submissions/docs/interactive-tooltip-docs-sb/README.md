# Interactive Tooltip

Documentation demonstrating how to use the **Interactive Tooltip** component.

## Overview
An interactive tooltip that stays open while focused and contains an action button.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<span class="ease-itip"><button class="ease-itip__trigger" aria-describedby="it" aria-expanded="false">Settings</button><span id="it" class="ease-itip__bubble" role="tooltip"><button class="ease-itip__action">Open settings</button></span></span>
```

## CSS class naming conventions
- `.ease-interactive-tooltip` — root container
- `.ease-interactive-tooltip__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-itip-bg: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-describedby`, `aria-current`, and `role` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For tooltips, Escape dismisses and returns focus to the trigger.

Closes #79818
