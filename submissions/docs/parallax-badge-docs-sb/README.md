# Parallax Badge

Documentation demonstrating how to use the **Parallax Badge** component.

## Overview
A badge with layers that shift at different depths on hover for a parallax pop.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<span class="ease-pbadge" role="img" aria-label="New badge"><span class="ease-pbadge__back" aria-hidden="true"></span><span class="ease-pbadge__text">New</span></span>
```

## CSS class naming conventions
- `.ease-parallax-badge` — root container
- `.ease-parallax-badge__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-pbadge-accent: #6366f1;
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

Closes #79748
