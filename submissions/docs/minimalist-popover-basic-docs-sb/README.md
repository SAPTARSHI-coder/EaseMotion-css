# Minimalist Popover — basic usage

Documentation guide for the **Minimalist Popover** component, focused on **basic usage**.

## Overview
A minimal popover that toggles on click with a clean arrow and subtle shadow, built on a disclosure button.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<button class="ease-popover-trigger" aria-describedby="pb">Info</button>
<div id="pb" class="ease-popover" role="tooltip" hidden>A short note.</div>
```

## CSS class naming conventions
- `.ease-{slug}` — root container
- `.ease-{slug}__<element>` — BEM-style child elements
- `.is-active`, `.is-complete`, `.is-up`, `.is-down` — state modifier classes

## Custom CSS variable overrides
```css
:root {
  --ease-popover-bg: #6366f1;
  --ease-popover-shadow: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- Decorative icons are hidden from AT with `aria-hidden="true"` or `alt=""`.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For popovers/menus, Escape closes and returns focus to the trigger.

Closes #81533
