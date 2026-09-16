# Responsive Tooltip

Documentation demonstrating how to use the **Responsive Tooltip** component.

## Overview
A tooltip that appears above its trigger on hover/focus, adapting position at small widths.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<span class="ease-tooltip"><button class="ease-tooltip__trigger" aria-describedby="rt">Help</button><span id="rt" class="ease-tooltip__bubble" role="tooltip">Tip text</span></span>
```

## CSS class naming conventions
- `.ease-responsive-tooltip` — root container
- `.ease-responsive-tooltip__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-tooltip-bg: #6366f1;
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

Closes #79815
