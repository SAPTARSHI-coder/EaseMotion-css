# Retro Pixel Avatar Group — accessibility integration

Documentation guide for the **Retro Pixel Avatar Group** component, focused on **accessibility integration**.

## Overview
Accessibility guide for the retro pixel avatar group: role=group, aria-label per avatar, focus-visible.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-rpag" role="group" aria-label="Team avatars"><span class="ease-rpag__avatar" role="img" aria-label="Ada">AB</span><span class="ease-rpag__avatar" role="img" aria-label="Bea">CD</span></div>
```

## CSS class naming conventions
- `.ease-retro-pixel-avatar-group-a11y` — root container
- `.ease-retro-pixel-avatar-group-a11y__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-rpag-bg: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements where possible.
- `:focus-visible` outlines for keyboard users.
- `aria-label`, `aria-current`, `aria-modal`, `role` used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus; Enter/Space to activate; Escape closes modals.

Closes #81612
