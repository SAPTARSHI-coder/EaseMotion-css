# CSS-only Navbar

Documentation demonstrating how to use the **CSS-only Navbar** component.

## Overview
A pure-CSS navbar with a checkbox-driven mobile menu toggle, no JavaScript.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<nav class="ease-cnavbar" aria-label="Primary"><input type="checkbox" id="cnav" class="ease-cnavbar__toggle-input" /><label for="cnav" class="ease-cnavbar__toggle" aria-hidden="true">☰</label><span class="ease-cnavbar__brand">Brand</span><div class="ease-cnavbar__links"><a href="#">Home</a><a href="#">About</a></div></nav>
```

## CSS class naming conventions
- `.ease-css-only-navbar` — root container
- `.ease-css-only-navbar__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-cnavbar-bg: #6366f1;
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

Closes #78787
