# Parallax Navbar

Documentation demonstrating how to use the **Parallax Navbar** component.

## Overview
A navbar with a parallax logo offset and links that shift at different speeds on scroll/hover.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<nav class="ease-pnav" aria-label="Primary"><span class="ease-pnav__logo">Ease</span><div class="ease-pnav__links"><a href="#" class="ease-pnav__link" data-depth="2">Home</a><a href="#" class="ease-pnav__link" data-depth="1">Docs</a><a href="#" class="ease-pnav__link" data-depth="3">Blog</a></div></nav>
```

## CSS class naming conventions
- `.ease-parallax-navbar` — root container
- `.ease-parallax-navbar__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-pnav-bg: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-current`, and `role` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.

Closes #78709
