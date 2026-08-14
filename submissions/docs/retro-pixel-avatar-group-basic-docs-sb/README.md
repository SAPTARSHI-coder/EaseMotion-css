# Retro Pixel Avatar Group — basic usage

Documentation guide for the **Retro Pixel Avatar Group** component, focused on **basic usage**.

## Overview
Basic usage guide for the retro pixel avatar group: overlapping monospace avatars with pixel borders.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-rpag" role="group" aria-label="Avatars"><span class="ease-rpag__avatar">AB</span><span class="ease-rpag__avatar">CD</span><span class="ease-rpag__avatar">+3</span></div>
```

## CSS class naming conventions
- `.ease-retro-pixel-avatar-group-basic` — root container
- `.ease-retro-pixel-avatar-group-basic__<element>` — BEM-style child elements
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

Closes #81610
