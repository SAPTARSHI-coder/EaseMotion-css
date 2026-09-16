# Glowing Footer

Documentation demonstrating how to use the **Glowing Footer** component.

## Overview
A footer with a soft top glow and a faint bottom fade.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<footer class="ease-footer">
  <p class="ease-footer__text">© 2026 EaseMotion</p>
  <nav class="ease-footer__links"><a href="#">Privacy</a><a href="#">Terms</a></nav>
</footer>
```

## CSS class naming conventions
- `.ease-glowing-footer` — root container
- `.ease-glowing-footer__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-footer-glow: #6366f1;
  --ease-footer-bg: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-current`, `role`, and `aria-expanded` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.

Closes #79772
