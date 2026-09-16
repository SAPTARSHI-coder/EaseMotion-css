# Interactive Sidebar

Documentation demonstrating how to use the **Interactive Sidebar** component.

## Overview
A sidebar nav with expandable items, a focusable toggle, and an active state.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<aside class="ease-isidebar"><button class="ease-isidebar__toggle" aria-expanded="true" aria-controls="ismenu">Menu</button><nav id="ismenu" class="ease-isidebar__nav"><a class="ease-isidebar__link is-active" aria-current="page" href="#">Dashboard</a><a class="ease-isidebar__link" href="#">Reports</a></nav></aside>
```

## CSS class naming conventions
- `.ease-interactive-sidebar` — root container
- `.ease-interactive-sidebar__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-isidebar-bg: #6366f1;
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

Closes #78760
