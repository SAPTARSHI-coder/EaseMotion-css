# Dynamic Footer

Documentation demonstrating how to use the **Dynamic Footer** component.

## Overview
A footer with a gradient top accent bar and link columns that lift on hover.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<footer class="ease-dfooter"><div class="ease-dfooter__col"><a href="#">Docs</a><a href="#">Blog</a></div><div class="ease-dfooter__col"><a href="#">Privacy</a><a href="#">Terms</a></div></footer>
```

## CSS class naming conventions
- `.ease-dynamic-footer` — root container
- `.ease-dynamic-footer__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-dfooter-accent: #6366f1;
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

Closes #78630
