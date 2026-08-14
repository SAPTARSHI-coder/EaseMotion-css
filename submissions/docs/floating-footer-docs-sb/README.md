# Floating Footer

Documentation demonstrating how to use the **Floating Footer** component.

## Overview
A footer that floats above the page with a soft shadow and a back-to-top link.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<footer class="ease-ffooter"><p>© 2026 EaseMotion</p><a class="ease-ffooter__top" href="#top">↑ Top</a></footer>
```

## CSS class naming conventions
- `.ease-floating-footer` — root container
- `.ease-floating-footer__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-ffooter-bg: #6366f1;
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

Closes #78572
