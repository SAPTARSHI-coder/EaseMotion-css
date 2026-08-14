# Interactive Notification Badge — basic usage

Documentation guide for the **Interactive Notification Badge** component, focused on **basic usage**.

## Overview
Basic usage guide for the interactive notification badge: a bell icon with a count badge that pulses.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<button class="ease-inb" aria-label="Notifications"><span class="ease-inb__icon" aria-hidden="true">🔔</span><span class="ease-inb__count">3</span></button>
```

## CSS class naming conventions
- `.ease-interactive-notification-badge-basic` — root container
- `.ease-interactive-notification-badge-basic__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-inb-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements where possible.
- `:focus-visible` outlines for keyboard users.
- `aria-label`, `aria-current`, `aria-modal`, `role` used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus; Enter/Space to activate; Escape closes modals.

Closes #81617
