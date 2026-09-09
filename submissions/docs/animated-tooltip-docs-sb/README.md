# Animated Tooltip

Documentation demonstrating how to use the **Animated Tooltip** component.

## Overview
A tooltip that slides up and fades in on hover/focus with a smooth easing.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<span class="ease-atip"><button class="ease-atip__trigger" aria-describedby="at">Help</button><span id="at" class="ease-atip__bubble" role="tooltip">Animated tip</span></span>
```

## CSS class naming conventions
- `.ease-animated-tooltip` — root container
- `.ease-animated-tooltip__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-atip-bg: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-current`, `aria-describedby`, `role`, and `aria-pressed` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For modals/tooltips, Escape closes and returns focus to the trigger.

Closes #79609
