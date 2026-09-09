# Glassmorphism Badge

Documentation demonstrating how to use the **Glassmorphism Badge** component.

## Overview
A frosted-glass badge with a translucent background, a colored dot, and a label.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<span class="ease-badge"><span class="ease-badge__dot" aria-hidden="true"></span>New</span>
```

## CSS class naming conventions
- `.ease-glassmorphism-badge` — root container
- `.ease-glassmorphism-badge__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-badge-bg: #6366f1;
  --ease-badge-dot: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-describedby`, `aria-current`, and `role` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For tooltips, Escape dismisses and returns focus to the trigger.

Closes #79798
