# CSS-only Footer

Documentation demonstrating how to use the **CSS-only Footer** component.

## Overview
A pure-CSS footer with link columns and a gradient top border, responsive on small screens.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<footer class="ease-cfooter"><div class="ease-cfooter__col"><h3>Product</h3><a href="#">Features</a></div><div class="ease-cfooter__col"><h3>Company</h3><a href="#">About</a></div></footer>
```

## CSS class naming conventions
- `.ease-css-only-footer` — root container
- `.ease-css-only-footer__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-cfooter-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-current`, `aria-expanded`, `role`, and `aria-roledescription` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.

Closes #79655
