# Animated Navbar

Documentation demonstrating how to use the **Animated Navbar** component.

## Overview
A navbar whose links slide in on load with a stagger, and a focusable mobile toggle.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<nav class="ease-anav" aria-label="Primary"><a class="ease-anav__link" href="#" style="--i:0">Home</a><a class="ease-anav__link" href="#" style="--i:1">Docs</a><a class="ease-anav__link" href="#" style="--i:2">Blog</a></nav>
```

## CSS class naming conventions
- `.ease-animated-navbar` — root container
- `.ease-animated-navbar__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-anav-bg: #6366f1;
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

Closes #78772
