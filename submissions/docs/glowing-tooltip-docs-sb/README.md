# Glowing Tooltip

Documentation demonstrating how to use the **Glowing Tooltip** component.

## Overview
A tooltip with a glowing border that fades in above its trigger on hover/focus.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<span class="ease-glowtip"><button class="ease-glowtip__trigger" aria-describedby="glw">Tip</button><span id="glw" class="ease-glowtip__bubble" role="tooltip">Glowing tip</span></span>
```

## CSS class naming conventions
- `.ease-glowing-tooltip` — root container
- `.ease-glowing-tooltip__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-glowtip-glow: #6366f1;
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

Closes #78621
