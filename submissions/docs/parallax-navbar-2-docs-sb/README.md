# Parallax Navbar

Documentation demonstrating how to use the **Parallax Navbar** component.

## Overview
A navbar where the logo and links move at different speeds for a parallax feel on hover.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<nav class="ease-pnav2" aria-label="Primary"><span class="ease-pnav2__logo" style="--d:2">Ease</span><div class="ease-pnav2__links"><a href="#" style="--d:3">Home</a><a href="#" style="--d:1">Docs</a></div></nav>
```

## CSS class naming conventions
- `.ease-parallax-navbar-2` — root container
- `.ease-parallax-navbar-2__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-pnav2-bg: #6366f1;
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

Closes #78862
