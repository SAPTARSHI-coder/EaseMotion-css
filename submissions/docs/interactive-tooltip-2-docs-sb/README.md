# Interactive Tooltip

Documentation demonstrating how to use the **Interactive Tooltip** component.

## Overview
An interactive tooltip that stays open while focused and contains an action link.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<span class="ease-itip2"><button class="ease-itip2__trigger" aria-describedby="it2" aria-expanded="false">Account</button><span id="it2" class="ease-itip2__bubble" role="tooltip"><a href="#">Open profile</a></span></span>
```

## CSS class naming conventions
- `.ease-interactive-tooltip-2` — root container
- `.ease-interactive-tooltip-2__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-itip2-bg: #6366f1;
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

Closes #78740
