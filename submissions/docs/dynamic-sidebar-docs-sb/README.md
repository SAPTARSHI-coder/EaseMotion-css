# Dynamic Sidebar

Documentation demonstrating how to use the **Dynamic Sidebar** component.

## Overview
A sidebar whose items highlight on hover with a sliding accent bar.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<aside class="ease-dsidebar"><nav class="ease-dsidebar__nav"><a class="ease-dsidebar__link" href="#">Inbox</a><a class="ease-dsidebar__link" href="#">Sent</a></nav></aside>
```

## CSS class naming conventions
- `.ease-dynamic-sidebar` — root container
- `.ease-dynamic-sidebar__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-dsidebar-accent: #6366f1;
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

Closes #78780
